import { useContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { registerUserAction } from './store/action/actions';
import { store } from './store/store';
import { auth } from './utils/firebase.config';
import Header from './views/Header/Header';
import Home from './views/Home/Home';
import LogIn from './views/Login/Login';
import Register from './views/Register/Register';
import Search from './views/Search/Search';

function App() {
  const {
    dispatch,
  } = useContext(store);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      try {
        if (user) {
          console.log({ ruqua: user });
          const { displayName, email: userEmail, photoURL } = user;
          dispatch(registerUserAction({ displayName, userEmail, photoURL }));
        }
      } catch (error) {
        console.log(error.message);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <Router>
      <ToastContainer
        position='bottom-left'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <PrivateRoute exact path='/search'>
          <Search />
        </PrivateRoute>

        <Route exact path='/login'>
          <LogIn />
        </Route>

        <Route exact path='/register'>
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
