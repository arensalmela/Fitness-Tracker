const router = require("express").Router();

const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
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
  Workout.aggregate([
    {
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration"
            },
        },
    },
])
.sort({_id: -1})
.limit(7)
.then(dbWorkout => {
    res.json(dbWorkout);
})
.catch(err => {
    res.json(err);
})
});
  

module.exports = router;
