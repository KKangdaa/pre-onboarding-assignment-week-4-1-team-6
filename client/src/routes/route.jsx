import { LayoutContainer } from 'components';
import { Login } from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import pages from './page';
import ProtectedRoute from './protectedRoute';
const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<LayoutContainer />}>
          {pages.map((r) => {
            return (
              <Route
                key={r.pathname}
                path={r.pathname}
                element={
                  <ProtectedRoute isPublic={r.isPublic}>
                    {r.element}
                  </ProtectedRoute>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RootRoute;
