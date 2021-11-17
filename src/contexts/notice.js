import React, { createContext, useContext, useReducer } from "react";
import { notices } from "mocks/notice";

const NoticeContext = createContext();

const initialState = {
  allNotices: notices,
};

function noticeReducer(state, action) {
  switch (action.type) {
    case "addNotice": {
      return { ...state, allNotices: [...state.allNotices, action.payload] };
    }
    case "removeNotice": {
      return {
        ...state,
        allNotices: state.filter((notice) => notice.id !== action.payload),
      };
    }
  }
}

function NoticeProvider({ children }) {
  const [state, dispatch] = useReducer(noticeReducer, initialState);
  const value = { state, dispatch };
  return (
    <NoticeContext.Provider value={value}>{children}</NoticeContext.Provider>
  );
}

function useNoticeContext() {
  const context = useContext(NoticeContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { NoticeProvider, useNoticeContext };
