import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextFormat {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextFormat>(
  {} as AuthContextFormat,
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', { email, password });
    console.log(response);
  }, []);
  return (
    <AuthContext.Provider value={{ name: 'Patrick', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
