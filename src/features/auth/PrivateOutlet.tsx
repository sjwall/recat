import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../app/hooks'

/**
 * Handles routes that require authentication.
 * Redirects to '/login' if not authenticated.
 *
 * @returns React component.
 */
export function PrivateOutlet() {
  const auth = useAuth();
  return auth.user ? <Outlet /> : <Navigate to="/login" />;
}

