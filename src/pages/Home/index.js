import Jumbotron from "../../components/Jumbotron";
import { useEffect, useContext } from "react";
import WorkoutsContainer from "../../components/WorkoutsContainer";
import { MyContext } from "../../context";

function Home() {
  const { workouts, setWorkouts } = useContext(MyContext);

  useEffect(() => {
    fetch("https://exercisedb.p.rapidapi.com/exercises", {
      headers: {
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        // insert api key
        "X-RapidAPI-Key": "c9bc40e250mshc9a0253036e8abep1a9eccjsn02f8dbdd6992",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setWorkouts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Jumbotron />
      <WorkoutsContainer workouts={workouts} />
    </div>
  );
}

export default Home;

// 193a3e7c2dmsh83c0994ee72ca68p157399jsn0728549a0461
