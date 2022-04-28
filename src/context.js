import { createContext, useState } from 'react';
export const MyContext = createContext();

function AppContext({ children }) {
  const [workouts, setWorkouts] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <MyContext.Provider value={{ workouts, setWorkouts, user, setUser}}>
        {children}
    </MyContext.Provider>
  );
}

export default AppContext;
