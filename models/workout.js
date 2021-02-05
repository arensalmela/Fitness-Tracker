const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },

    exercises: [
      {
        name: {
          type: String,
          trim: true,
          required: "Please enter excerise",
        },
        type: {
          type: String,
          trim: true,
          required: "Please enter type",
        },
        weight: {
          type: Number,
          trim: true,
          min: 1,
          required: "Please enter excerise",
        },
        sets: {
          type: Number,
          trim: true,
          min: 1,
        },
        reps: {
          type: Number,
          trim: true,
          min: 1,
        },
        weight: {
          type: Number,
          trim: true,
          min: 1,
        },
        duration: {
          type: Number,
          trim: true,
          min: 1,
          required: "Please enter duration",
        },
        distance: {
          type: Number,
          trim: true,
          min: 1,
        },
      },
    ],
  }

  //includes dynamically created properties

  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  // }
);

//isolating exercise object

// workoutSchema.virtual("totalDuration").get(function () {
//   return this.exercises.reduce((total, excerise) => {
//     return total + exercises.duration;
//   }, 0);
// });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
