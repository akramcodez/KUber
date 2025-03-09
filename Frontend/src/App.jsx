import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import UserSignup from './pages/user.signup';
import UserLogin from './pages/user.login';
import CaptainSignup from './pages/captain.signup';
import CaptainLogin from './pages/captain.login';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user/login" element={<UserLogin />}></Route>
        <Route path="/user/signup" element={<UserSignup />}></Route>
        <Route path="/captain/login" element={<CaptainLogin />}></Route>
        <Route path="/captain/signup" element={<CaptainSignup />}></Route>
      </Routes>
    </div>
  );
};

export default App;
