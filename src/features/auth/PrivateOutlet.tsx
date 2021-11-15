import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../app/hooks'

export function PrivateOutlet() {
  const auth = useAuth();
  return auth.user ? <Outlet /> : <Navigate to="/login" />;
}

