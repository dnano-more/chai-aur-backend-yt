import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("server is ready");
});

// get list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Lazy Plan",
      content: "I’m not lazy… I’m just on energy-saving mode.",
    },
    {
      id: 2,
      title: "Future Me",
      content: "I love deadlines… especially the whooshing sound they make when they fly by.",
    },
    {
      id: 3,
      title: "Morning Mood",
      content: "I wake up full of energy… then I remember I have to work.",
    },
    {
      id: 4,
      title: "Diet Plan",
      content: "I started a diet… but my fridge is still calling me at night.",
    },
    {
      id: 5,
      title: "Phone Addiction",
      content: "I checked my phone for the time… ended up scrolling for 30 minutes.",
    },
  ];

  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server runnig at http://localhost:${port}`);
});
