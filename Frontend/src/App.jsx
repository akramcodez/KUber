import { Route, Routes } from 'react-router-dom';
import Start from './pages/start';
import UserSignup from './pages/user.signup';
import UserLogin from './pages/user.login';
import CaptainSignup from './pages/captain.signup';
import CaptainLogin from './pages/captain.login';
import Home from './pages/home';
import CaptainHome from './pages/captain.home';
import UserProtectedWrapper from './pages/userProtectedWrapper';
import UserLogout from './pages/user.logout';
import CaptainProtectedWrapper from './pages/captainProtectedWrapper';
import CaptainLogout from './pages/captain.logout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/user-logout"
          element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectedWrapper>
              <CaptainHome />
            </CaptainProtectedWrapper>
          }
        />
        <Route
          path="/captain-logout"
          element={
            <CaptainProtectedWrapper>
              <CaptainLogout />
            </CaptainProtectedWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
