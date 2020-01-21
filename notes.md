## Setup APIS

API access points for when user submits the quiz after registration => set information based on experience level submitted

if user clicks on beginner course, send that to API and populate currentCourses based on this

when you select beginner course, start day 1.

When user completes a session, a new API post method is submitted with the new information and when they click the X, the page refreshes with a new API call.

## Proposal to refine the Course and Meditation Schema

```javascript
const meditationSchema = new mongoose.Schema(
  {
    sessionDetail: {
      level: String,
      quote: String,
      currentTime: Date
    },
    completed: Boolean,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Courses"
    }
  },
  { timestamps: true },
  { collection: "meditation" }
);
```

```javascript
const courseSchema = new mongoose.Schema(
  {
    courseDetail: {
      difficulty: String,
      level: Number,
      duration: Date,
      music: String
    },
    meditationId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meditation"
      }
    ]
  },
  { timestamps: true },
  { collection: "course" }
);
```