import React from "react";
import "./styles.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { MyContext } from "../../context";
import axios from "axios";

function Jumbotron() {
  const [searchInput, setsearchInput] = useState("");
  const { setWorkouts } = useContext(MyContext);

  function handleSearch() {
    axios
      .get(`https://exercisedb.p.rapidapi.com/exercises/name/${searchInput}`, {
        headers: {
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
          "X-RapidAPI-Key":
          // insert api key
            "c9bc40e250mshc9a0253036e8abep1a9eccjsn02f8dbdd6992",
        },
      })
      .then(({ data }) => setWorkouts(data));
      
  }

  return (
    <div className="my-jumbotron">
      <h1>Welcome</h1>
      <h2>You can search your desired Workout</h2>
      <div className="button-input">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search For A Workout"
            aria-label="Workout Search Input"
            aria-describedby="workout-search-button"
            value={searchInput}
            onChange={(e) => setsearchInput(e.target.value)}
          />
          <Button
            variant="danger"
            id="workout-search-button"
            onClick={handleSearch}
          >
            Button
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}

export default Jumbotron;
