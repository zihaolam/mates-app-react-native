import { PaymentProvider } from "./payment";
import { UserProvider } from "./user";
import { RoomProvider } from "./room";
import { NoticeProvider } from "./notice";
import { TodoProvider } from "./todo";
import { FoodProvider } from "./food";
import React from "react";

const ContextProviders = ({ children }) => (
  <FoodProvider>
    <TodoProvider>
      <NoticeProvider>
        <PaymentProvider>
          <UserProvider>
            <RoomProvider>{children}</RoomProvider>
          </UserProvider>
        </PaymentProvider>
      </NoticeProvider>
    </TodoProvider>
  </FoodProvider>
);

export default ContextProviders;
