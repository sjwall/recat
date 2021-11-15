import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../app/hooks'

export function PublicOutlet() {
  const auth = useAuth();
  return auth.user ? <Navigate to="/"/> :  <Outlet />;
}

