import React, { createContext, useContext, useReducer } from "react";
import { rooms } from "mocks/room";

const RoomContext = createContext();

const initialState = {
  rooms,
};

const getInitials = (name) => {
  let initials = name.split(' ');
  
  if(initials.length > 1) {
    initials = initials.shift().charAt(0) + initials.pop().charAt(0);
  } else {
    initials = name.substring(0, 2);
  }
  
  return initials.toUpperCase();
}

function roomReducer(state, action) {
  switch (action.type) {
    case "addRoom": {
      const maxId = Math.max(state.rooms.map(room => room.id) + 1);
      const room = {
        id: maxId,
        roomName: action.payload,
        invitationCode: getInitials(action.payload)
      }
      return { ...state, rooms: [...state.rooms, room] };
    }
    case "removeRoom": {
      return {
        ...state,
        rooms: state.rooms.filter((room) => room.id !== action.payload.id),
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function RoomProvider({ children }) {
  const [state, dispatch] = useReducer(roomReducer, initialState);
  const value = { state, dispatch };
  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
}

function useRoomContext() {
  const context = useContext(RoomContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { RoomProvider, useRoomContext };
