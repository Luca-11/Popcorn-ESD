var timeline = gsap.timeline();
timeline.to(
  "#pacman",
  {
    duration: 3,
    x: 2400,
  },
  0
);

timeline.to(
  "#pacman",
  {
    duration: 0,
    rotation: 90,
  },
  3
);

timeline.to(
  "#pacman",
  {
    duration: 1,
    y: 200,

    onComplete: () => {
      document.getElementById("pacman").src = "img/pacmanleft.gif";
    },
  },
  3
);

timeline.to(
  "#pacman",
  {
    rotation: 0,
    duration: 0,
  },
  4
);

timeline.to(
  "#pacman",
  {
    duration: 3,
    x: 0,
    onComplete: () => {
      document.getElementById("pacman").src = "img/pacman.gif";
    },
  },
  4
);

timeline.to(
  "#pacman",
  {
    duration: 0,
    rotation: 90,
  },
  7
);

timeline.to(
  "#pacman",
  {
    duration: 1,
    y: 400,
  },
  7
);

timeline.to(
  "#pacman",
  {
    duration: 0,
    rotation: 0,
  },
  8
);

timeline.to(
  "#pacman",
  {
    duration: 3,
    x: 2400,
  },
  8
);
