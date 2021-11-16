import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../app/hooks'

/**
 * Handles routes that are only displayed when not authentication.
 * Redirects to '/' if authenticated.
 *
 * @returns React component.
 */
export function PublicOutlet() {
  const auth = useAuth();
  return auth.user ? <Navigate to="/"/> :  <Outlet />;
}

