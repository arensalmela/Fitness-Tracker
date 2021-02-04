const router = require("express").Router();

const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
