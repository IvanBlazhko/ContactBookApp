import { useSelector } from 'react-redux';

import {
  getIsLoggedIn,
  getIsRefreshing,
  getUserInfo,
  getError,
  getToken,
} from '../Redux/UserAuth/Selectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(getIsLoggedIn),
    isRefreshing: useSelector(getIsRefreshing),
    userinfo: useSelector(getUserInfo),
    error: useSelector(getError),
    token: useSelector(getToken),
  };
};
