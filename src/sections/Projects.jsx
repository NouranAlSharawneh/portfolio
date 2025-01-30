import MainNav from '../components/MainNav';
import usePopcornImage from '../../public/assets/projects/usePopCorn.png';
import FastPizzaImage from '../../public/assets/projects/FastPizza.png';
import WorldWiseImage from '../../public/assets/projects/WorldWise.png';

const Projects = () => {
  const portfolioProjects = [
    {
      projectName: 'usePopCorn',
      projectImg: usePopcornImage,
      projectPoints: [
        {
          point1: 'A simple movie site that allows you to search for movies',
          point2: 'Build with React.js',
          point3: 'Deployed on Vercel',
        },
      ],
      links: [
        {
          liveLink: 'https://usepopcorn.netlify.app/',
          githubLink: 'https://github.com/abhishekbhagwat/usePopCorn',
        },
      ],
    },
    {
      projectName: 'Fast Pizza',
      projectImg: FastPizzaImage,
      projectPoints: [
        {
          point1:
            'A simple e-commerce site that allows you to search for pizzas',
          point2: 'Build with React.js',
          point3: 'Deployed on Vercel',
        },
      ],
      links: [
        {
          liveLink: 'https://fast-pizza.netlify.app/',
          githubLink: 'https://github.com/abhishekbhagwat/fast-pizza',
        },
      ],
    },
    {
      projectName: 'WorldWise',
      projectImg: WorldWiseImage,
      projectPoints: [
        {
          point1:
            'A simple e-commerce site that allows you to search for products',
          point2: 'Build with React.js',
          point3: 'Deployed on Vercel',
        },
      ],
      links: [
        {
          liveLink: 'https://worldwise.netlify.app/',
          githubLink: 'https://github.com/abhishekbhagwat/world-wise',
        },
      ],
    },
  ];
  return (
    <section
      id="projects"
      className="mx-3 border-b border-gray-600 pb-15 sm:mx-auto sm:max-w-[85rem] sm:pl-5"
    >
      <MainNav active={'projects'} />
      <div>
        <div className="mt-10 flex flex-col">
          {portfolioProjects.map((project) => (
            <div key={project.projectName}>
              <div>
                <h3>{project.projectName}</h3>
                <hr />
                <ul>
                  {project.projectPoints.map((point) => (
                    <li key={point.point1}>{point.point1}</li>
                  ))}
                </ul>
                <ul>
                  {project.links.map((link) => (
                    <li key={link.liveLink}>{link.liveLink}</li>
                  ))}
                </ul>
                <img src={project.projectImg} alt={project.projectName} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
