

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { auth_url, getToken, getUriRefresh , setToken} from '../../services/authService';

// interface IMainProps {
// }

// const Main: React.FunctionComponent<IMainProps> = (props) => {
//   const dispatch = useDispatch();
//   //kiểm tra xem có access token chưa
//   const token = useSelector((state) => state.auth.access_token);
//   console.log("1111111111===="+ token);
  

//   React.useEffect(() => {
//     if (!token) {
//       const acc_token = dispatch(getToken()).token
//       console.log("22222222222===="+acc_token);
//       if (window.location.href.includes('access_token')) {
//      //   // nếu có access token thì lưu lại vào session
//         dispatch(setToken(acc_token))
      
//       }


//     }
//     else {
//         // không thì redirect về trang login
//         window.location.href = auth_url
//       }
//     // }
//   }, [token]);
  

//   return (
//   <div>main</div>
//   );
// }

// export default Main;


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
      console.log("111111111================" + token)
      const _token = dispatch(getToken())
      console.log(_token)
        // nếu có access token thì lưu lại vào session
        window.sessionStorage.setItem('token', _token.token);
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
