import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MyContext } from "../../context";
import axios from "../../Axios";

function WorkoutModal({ title, target, equipment, name, id }) {
  const [show, setShow] = useState(false);
  const { user, setUser } = useContext(MyContext);
  const [loading, setLoading] = useState(false);
  console.log(id);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddToFavourites = () => {
    console.log("workoutId", id);
    setLoading(true);
    axios
      .post("/add-favourites/", { workoutId: id })
      .then(({ data }) => {
        setLoading(false);

        setUser(data);
        alert("Meal Added to Favourites");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleRemoveFromFavourites = () => {
    setLoading(true);
    axios
      .post("/remove-favourites/", { workoutId: id })
      .then(({ data }) => {
        setLoading(false);

        setUser(data);
        alert("Meal Removed from Favourites");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        See Workout
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{equipment}</Modal.Body>
        <Modal.Body>{name}</Modal.Body>
        <Modal.Body>{target}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {user && (
            <>
              {user.favourites.includes(id) ? (
                <Button
                  variant="danger"
                  onClick={handleRemoveFromFavourites}
                  disabled={loading}
                >
                  Remove from Favourites
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={handleAddToFavourites}
                  disabled={loading}
                >
                  Add To Favourite Workouts
                </Button>
              )}
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WorkoutModal;
