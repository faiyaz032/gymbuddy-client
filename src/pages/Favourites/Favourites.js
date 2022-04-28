import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import WorkoutCard from "../../components/WorkoutCard"

function Favourites() {
  const { user } = useContext(MyContext);
  const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    if (user.favourites.length) {
      const requests = user.favourites.map((favourite) =>
        fetch(
          `https://exercisedb.p.rapidapi.com/exercises/exercise/${favourite}`,
          {
            headers: {
              "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
              // insert api key
              "X-RapidAPI-Key":
                "c9bc40e250mshc9a0253036e8abep1a9eccjsn02f8dbdd6992",
            },
          }
        ).then((res) => res.json())
      );

      Promise.all(requests).then((res) => setFavourites(res));
    }
  }, [user]);

  if (!user.favourites.length) {
    return (
      <div>
        <h3>You don't have any favouite workouts</h3>
        <LinkContainer to="/">
          <Button on>Add favourites</Button>
        </LinkContainer>
      </div>
    );
  }
  return (
    <div>
      <h2>Your Favourites</h2>
      <div className="workout-container">
        {favourites.map((workout) => {
          return <WorkoutCard key={workout.idWorkout} {...workout} />;
        })}
      </div>{" "}
    </div>
  );
}

export default Favourites;

// Promise.all(...requests).then(res => console.log(res));

// `https://exercisedb.p.rapidapi.com/exercises/exercise/${favourite}`
