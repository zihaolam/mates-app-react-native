import { PaymentProvider } from "./payment";
import { UserProvider } from "./user";
import { RoomProvider } from "./room";
import { NoticeProvider } from "./notice";
import { TodoProvider } from "./todo";
import React from "react";

const ContextProviders = ({ children }) => (
  <TodoProvider>
    <NoticeProvider>
      <PaymentProvider>
        <UserProvider>
          <RoomProvider>{children}</RoomProvider>
        </UserProvider>
      </PaymentProvider>
    </NoticeProvider>
  </TodoProvider>
);

export default ContextProviders;
