const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },

    exercise: [
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
          required: "Please enter excerise",
        },
        reps: {
          type: Number,
          trim: true,
          min: 1,
          required: "Please enter excerise",
        },
        weight: {
          type: Number,
          trim: true,
          min: 1,
          required: "Please enter excerise",
        },
        duration: {
          type: Number,
          trim: true,
          min: 1,
          required: "Please enter excerise",
        },
        distance: {
          type: Number,
          trim: true,
          min: 1,
          required: "Please enter excerise",
        },
      },
    ],
  },

  //includes dynamically created properties

  {
    toJSON: {
      virtuals: true,
    },
  }
);

//isolating exercise object

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercise.reduce((total, excerise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
