import { useEffect } from 'react';
import { useLocation, unstable_useBlocker, Outlet, useNavigate } from 'react-router-dom';

import Segue from '@dancotton/segue';

function SegueReactRouter() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  unstable_useBlocker(() => {
    Segue.preNavigate();
    return false;
  });

  useEffect(() => {
    // This is a little hack - the blocker above isn't invoked on first navigate
    // so we need to manually trigger a first navigate onload here.
    // shouldn't cause a re-render though - just state updates in the router.
    navigate('/', { replace: true });
  }, [])

  useEffect(() => {
    Segue.postNavigate();
  }, [pathname]);

  return <Outlet />;
}

export default SegueReactRouter;