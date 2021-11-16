import { PaymentProvider } from "./payment";
import { UserProvider } from "./user";
import { RoomProvider } from "./room";
import React from 'react';

const ContextProviders = ({children}) => <PaymentProvider><UserProvider><RoomProvider>{children}</RoomProvider></UserProvider></PaymentProvider>

export default ContextProviders;