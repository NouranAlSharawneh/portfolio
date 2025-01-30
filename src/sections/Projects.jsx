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
        'A simple movie site that allows you to search for movies',
        'Build with React.js',
        'Deployed on Vercel',
      ],
      links: [
        {
          liveLink: {
            textBtn: 'Live Url',
            url: 'https://usepopcorn.netlify.app/',
          },
          githubLink: {
            textBtn: 'Github Repo',
            url: 'https://usepopcorn.netlify.app/',
          },
        },
      ],
    },
    {
      projectName: 'Fast Pizza',
      projectImg: FastPizzaImage,
      projectPoints: [
        'A simple e-commerce site that allows you to search for pizzas',
        'Build with React.js',
        'Deployed on Vercel',
      ],
      links: [
        {
          liveLink: {
            textBtn: 'Live Url',
            url: 'https://usepopcorn.netlify.app/',
          },
          githubLink: {
            textBtn: 'Github Repo',
            url: 'https://usepopcorn.netlify.app/',
          },
        },
      ],
    },
    {
      projectName: 'WorldWise',
      projectImg: WorldWiseImage,
      projectPoints: [
        'A simple e-commerce site that allows you to search for products',
        'Build with React.js',
        'Deployed on Vercel',
      ],
      links: [
        {
          liveLink: {
            textBtn: 'Live Url',
            url: 'https://usepopcorn.netlify.app/',
          },
          githubLink: {
            textBtn: 'Github Repo',
            url: 'https://usepopcorn.netlify.app/',
          },
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
      <div className="pl-1">
        <div className="mt-10 flex flex-col">
          {portfolioProjects.map((project) => (
            <div key={project.projectName}>
              <div>
                <h3>{project.projectName}</h3>
                <hr />
                <ul>
                  {project.projectPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div>
                  {project.links.map((link) => (
                    <>
                      <button key={link.liveLink.url}>
                        <a href={link.liveLink.url}>{link.liveLink.textBtn}</a>
                      </button>
                      <button key={link.githubLink.url}>
                        <a href={link.githubLink.url}>
                          {link.githubLink.textBtn}
                        </a>
                      </button>
                    </>
                  ))}
                </div>

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
