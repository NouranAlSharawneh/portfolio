import usePopcornImage from '../../public/assets/projects/usePopCorn.png';
import FastPizzaImage from '../../public/assets/projects/FastPizza.png';
import WorldWiseImage from '../../public/assets/projects/WorldWise.png';
import HigriDateImage from '../../public/assets/projects/HigriDate.png';
import AppebiteImage from '../../public/assets/projects/appebite.png';

export const portfolioProjects = [
  {
    id: 1,
    projectName: 'Fast Nunu Pizza',
    projectImg: FastPizzaImage,
    projectPoints: [
      'Frontend built with React and Redux Toolkit',
      'Interactive pizza menu with different options',
      'Responsive design with fast loading times',
    ],
    links: [
      {
        liveLink: {
          textBtn: 'Live Url',
          url: 'https://fastnunupizza-pi.vercel.app/',
        },
        githubLink: {
          textBtn: 'Github Repo',
          url: 'https://github.com/NouranAlSharawneh/fast-react-pizza',
        },
      },
    ],
  },

  {
    id: 2,
    projectName: 'usePopCorn',
    projectImg: usePopcornImage,
    projectPoints: [
      'Movie discovery platform powered by the OMDB API.',
      'Track and rate movies with localStorage support',
      'View detailed movie info and mark as watched',
    ],
    links: [
      {
        liveLink: {
          textBtn: 'Live Url',
          url: 'https://usepopcorn-jet.vercel.app/',
        },
        githubLink: {
          textBtn: 'Github Repo',
          url: 'https://github.com/NouranAlSharawneh/usePopcorn',
        },
      },
    ],
  },
  {
    id: 3,
    projectName: 'WorldWise',
    projectImg: WorldWiseImage,
    projectPoints: [
      'Built with React Router and Context API',
      'Optimized performance using memo, useMemo, and useCallback',
      'Explore global information with a dynamic, responsive UI',
    ],
    links: [
      {
        liveLink: {
          textBtn: '--',
          url: '--',
        },
        githubLink: {
          textBtn: 'Github Repo',
          url: 'https://github.com/NouranAlSharawneh/worldwise',
        },
      },
    ],
  },
  {
    id: 4,
    projectName: 'Higri Date Converter',
    projectImg: HigriDateImage,
    projectPoints: [
      'React app for converting Gregorian to Hijri dates',
      'Simple and intuitive interface for quick conversions',
      'User-friendly and responsive design',
    ],
    links: [
      {
        liveLink: {
          textBtn: 'Live Url',
          url: 'https://hijri-conv.netlify.app/',
        },
        githubLink: {
          textBtn: 'Github Repo',
          url: 'https://github.com/NouranAlSharawneh/date-converter',
        },
      },
    ],
  },
  {
    id: 5,
    projectName: 'Appebite',
    projectImg: AppebiteImage,
    projectPoints: [
      'Flutter app with diverse cuisines and AI-powered recipe generation',
      'OpenAI API for ingredient alternatives and personalized recipes',
      'Features include meal plans, calorie tracker, and supermarket locator',
    ],
    links: [
      {
        liveLink: {
          textBtn: '--',
          url: '--',
        },
        githubLink: {
          textBtn: 'Github Repo',
          url: 'https://github.com/NouranAlSharawneh/appebite',
        },
      },
    ],
  },
];
