import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { auth_url, getToken, getUriRefresh } from '../../services/authService';

interface IMainProps {
}

const Main: React.FunctionComponent<IMainProps> = (props) => {
  const dispatch = useDispatch();
  //kiểm tra xem có access tokem chưa
  const token = useSelector((state) => state.auth.access_token);

  React.useEffect(() => {
      if (window.location.href.includes('access_token')) {
        // nếu có access token thì lưu lại vào session
      } else {
        // không thì redirect về trang login
        window.location.href = auth_url
      }
    // }
  }, [token]);

  return (
  <div>main</div>
  );
}

export default Main;