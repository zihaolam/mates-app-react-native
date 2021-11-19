import React, { createContext, useContext, useReducer } from 'react';
import { payments } from 'mocks/payment';

const PaymentContext = createContext();

const initialState = {
	allPayments: payments
};


function paymentReducer(state, action) {
  switch (action.type) {
    case 'addPayment': {
      return { ...state, allPayments: [...state.allPayments, action.payload]};
    }
    case 'removePayment': {
		return {...state, allPayments: state.allPayments.filter(payment => payment.id !== action.payload)}
	}
  }
}

function PaymentProvider({ children }) {
  const [state, dispatch] = useReducer(paymentReducer, initialState);
  const value = { state, dispatch };
  return <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>;
}

function usePaymentContext() {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

export { PaymentProvider, usePaymentContext };
