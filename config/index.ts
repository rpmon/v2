export const config = {
  defaultTitle: "Rohit Prakash",
  defaultDescription:
    "Rohit Prakash is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences.",
  defaultUrl: "https://rohitprakash.dev",
  defaultImage: "/og.png",
  twitterUsername: "@rohitp934",
  email: "rohitp934@gmail.com",
  resume: "https://cv.rohitprakash.dev",
  loaderDelay: 2000,
  socialMedia: [
    {
      name: "GitHub",
      url: "https://github.com/rohitp934",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/rohitp934",
    },
    {
      name: "Linkedin",
      url: "https://linkedin.com/in/rohitp934",
    },
  ],
  navLinks: [
    {
      name: "About",
      url: "/home/#about",
    },
    {
      name: "Experience",
      url: "/home/#jobs",
    },
    {
      name: "Work",
      url: "/home/#projects",
    },
    {
      name: "Contact",
      url: "/home/#contact",
    },
  ],
  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

export const KEY_CODES = {
  ARROW_LEFT: "ArrowLeft",
  ARROW_LEFT_IE11: "Left",
  ARROW_RIGHT: "ArrowRight",
  ARROW_RIGHT_IE11: "Right",
  ARROW_UP: "ArrowUp",
  ARROW_UP_IE11: "Up",
  ARROW_DOWN: "ArrowDown",
  ARROW_DOWN_IE11: "Down",
  ESCAPE: "Escape",
  ESCAPE_IE11: "Esc",
  TAB: "Tab",
  SPACE: " ",
  SPACE_IE11: "Spacebar",
  ENTER: "Enter",
};
