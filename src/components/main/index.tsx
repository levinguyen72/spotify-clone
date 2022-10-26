import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { auth_url, getToken, getUriRefresh } from '../../services/authService';

interface IMainProps {
}

const Main: React.FunctionComponent<IMainProps> = (props) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.access_token);
console.log(1111111111111,auth_url)
  React.useEffect(() => {
    // if (!token) {
      // const _token = authService.getToken();
      if (window.location.href.includes('access_token')) {
        // dispatch(authService.setToken(_token));
        // authService.setToken(_token.access_token);\
        
        console.log(token)
      } else {
        window.location.href = auth_url
      }
    // }
  }, [token]);

  return (
  <div>main</div>
  );
}

export default Main;