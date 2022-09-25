import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children, isPublic }) => {
  const validation = isPublic || localStorage?.getItem('token');
  if (!validation) {
    return <Navigate to="/" />;
  }

  const location = useLocation();
  const ORDER = 'desc';
  const SORT = 'id';
  const PAGE = 1;
  const LIMIT = 10;
  const PAGE_URL_USERS = `/users?_order=${ORDER}&_sort=${SORT}&_page=${PAGE}&_limit=${LIMIT}&q=`;
  const PAGE_URL_ACCOUNTS = `/accounts?_order=${ORDER}&_sort=${SORT}&_page=${PAGE}&_limit=${LIMIT}&q=`;
  if (location.pathname === '/users' && location.search === '')
    return <Navigate to={PAGE_URL_USERS} />;
  else if (location.pathname === '/accounts' && location.search === '')
    return <Navigate to={PAGE_URL_ACCOUNTS} />;

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  isPublic: PropTypes.bool,
};

export default ProtectedRoute;