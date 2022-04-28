import React from "react";
import WorkoutCard from "../WorkoutCard";
// import {useEffect, useState } from "react";
import "./styles.css"

function WorkoutsContainer({ workouts }) {
  return (
    <div className="workout-container"> 
      {workouts.map((workout) => {
        
       return <WorkoutCard key={workout.idWorkout}  {...workout}/>
        // return <div key={workout.id}>{workout.bodyPart}</div>;
      })}
    </div>
  );
}





// FUNCTION BELOW BRINGS UP JUST ONE BODY PART AT A TIME

// function WorkoutsContainer({ workouts }) {

//     const [bodyParts, setBodyParts] = useState([]);

//     useEffect(() => {
//         if (workouts) {
//             let tempArray = [];
//             workouts.forEach(workout => {
//                 if (!tempArray.includes(workout.bodyPart)) {
//                     tempArray.push(workout.bodyPart);
//                 }
//             });

//             setBodyParts(tempArray);
//         }
//     }, [workouts])

//   return (
//     <div>
//       {bodyParts.map((bodyPart) => {
//         return <div>{bodyPart}</div>;
//       })}
//     </div>
//   );
// }

export default WorkoutsContainer;