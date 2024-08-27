export const projectsDatas = [
  {
    name: "DEV Interest",
    description:
      "A web platform to share and organize ressources around development.",
    techs: ["React", "Redux", "Sass"],
    url: "https://devinterest.surge.sh/",
    githubLink: "https://github.com/romainAccoce/DevInterest",
    image: "/images/devinterest-screenshot.png",
  },
  {
    name: "Rock Paper Scissors",
    description:
      'Play the classic game with original rules or switch to "Lizzard Spock" mode to spice it up.',
    techs: ["React", "Redux", "Sass"],
    url: "https://romacc-rock-paper-scissors.surge.sh/",
    githubLink: "https://github.com/romainAccoce/rock-paper-scissors",
    image: "/images/rock-paper-scissors-screenshot.png",
  },
  {
    name: "Portfolio",
    description:
      "An eficient way to present my self and my projects, feel free to customise it and use it for your self.",
    techs: ["React", "Redux", "Sass"],
    url: "https://romain-accoce-portfolio.surge.sh/",
    githubLink: "https://github.com/romainAccoce/portfolio",
    image: "/images/portfolio-screenshot.png",
  },
];

const publicToken =
  "6e3e05053e207810cc72db321a29374598bd8a7d9db3739d7b2b94f356fb6f589a77bfeecc6ddb9504b6a6ea3ed0bb68142f66683e22cd45f37ed2c38d7225336b2d26cc6275f81a0586b85ea7e2a35cb2df933f447f13cae6c7a843d9b5f3bdce15609985f88843fbbfa38ecf463e6d370eb4828facdefad56ef5efb68eb53b";

export const apiConfig = {
  config: {
    headers: { Authorization: `Bearer ${publicToken}` },
  },
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
