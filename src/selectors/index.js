export const projectsDatas = [
    {
        name: 'DEV Interest',
        description: 'A web platform to share and organize ressources around development.',
        techs: ['React', 'Redux', 'Sass'],
        url: 'https://devinterest.surge.sh/',
        githubLink: 'https://github.com/romainAccoce/DevInterest',
        image: '/images/devinterest-screenshot.png',
    },
    {
        name: 'Rock Paper Scissors',
        description: 'Play the classic game with original rules or switch to "Lizzard Spock" mode to spice it up.',
        techs: ['React', 'Redux', 'Sass'],
        url: 'https://romacc-rock-paper-scissors.surge.sh/',
        githubLink: 'https://github.com/romainAccoce/rock-paper-scissors',
        image: '/images/rock-paper-scissors-screenshot.png',
    },
    {
        name: 'Portfolio',
        description: 'An eficient way to present my self and my projects, feel free to customise it and use it for your self.',
        techs: ['React', 'Redux', 'Sass'],
        url: 'https://romain-accoce-portfolio.surge.sh/',
        githubLink: 'https://github.com/romainAccoce/portfolio',
        image: '/images/portfolio-screenshot.png',
    },
]

export const scrollToTop = () => {
    window.scrollTo( {
        top: 0,
        behavior: 'smooth',
    });
};