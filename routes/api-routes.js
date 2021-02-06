const router = require("express").Router();

const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then((dbWorkouts) => {
      let totalDuration = dbWorkouts.exercises.reduce(function (prev, cur) {
        return prev + cur.duration;
      }, 0);
      dbWorkouts.totalDuration = totalDuration
      res.json(dbWorkouts);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.post("/api/exercise", (req, res) => {
  Workout.create({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    {
      $push: {
        exercises: req.body,
      },
    },
    { new: true },
    (err, data) => {
      if (err) {
        res.status(500).json({ err: err });
      }
      res.json(data);
    }
  );
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({}, (error, data) => {
    if (error) {
      res.status(500).json({ err: error });
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
