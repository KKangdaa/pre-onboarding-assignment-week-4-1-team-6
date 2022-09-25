import { useLocation } from 'react-router-dom';

export const getParameter = () => {
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(search);
  const page = params.get('_page');
  const limit = params.get('_limit');

  return { pathname, search, page, limit };
};
