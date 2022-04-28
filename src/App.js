import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from './Axios';
import Navbar from './components/Navbar';
import { MyContext } from './context';
import ErrorPage from './pages/404/404.js';
import Favourites from './pages/Favourites/Favourites';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {
   const { user, setUser } = useContext(MyContext);
   useEffect(() => {
      axios.post('/auto-login').then(({ data }) => setUser(data));
   }, []);
   return (
      <Router>
         <Navbar />
         <Switch>
            <Route exact path="/">
               <Home />
            </Route>
            {!user && (
               <>
                  <Route exact path="/login">
                     <Login />
                  </Route>
                  <Route exact path="/signup">
                     <Signup />
                  </Route>
               </>
            )}
            {user && (
               <Route exact path="/my-favourites">
                  <Favourites />
               </Route>
            )}
            <Route>
               <ErrorPage />
            </Route>
         </Switch>
      </Router>
   );
}

export default App;
