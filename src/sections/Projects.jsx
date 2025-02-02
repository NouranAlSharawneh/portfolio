import MainNav from '../components/MainNav';
import { FaCircleCheck } from 'react-icons/fa6';
import { GoArrowUpRight } from 'react-icons/go';
import { portfolioProjects } from '../data/projects';

const Projects = () => {
  console.log(portfolioProjects[3].projectImg);
  return (
    <section
      id="projects"
      className="mx-3 pb-20 sm:mx-auto sm:max-w-[85rem] sm:pl-5"
    >
      <MainNav active={'projects'} />

      <div className="pl-1">
        <span className="block pt-4 pb-3 text-3xl font-bold text-gray-800 md:text-7xl">
          Projects
        </span>
        <div className="flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <div
              key={project.id}
              className="sticky z-0 overflow-hidden rounded-3xl bg-gray-950 px-5 pt-5 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:outline-2 after:-outline-offset-2 after:outline-gray-600 after:content-['']"
              style={{
                top: `calc(10px + ${projectIndex * 40}px)`,
              }}
            >
              {/* <div className="absolute inset-0 -z-1 rounded-3xl bg-gray-800" /> */}
              <div className="md:grid md:grid-cols-2">
                <div className="lg:pt-10 lg:pl-10">
                  <div className="flex-col px-3">
                    <div className="inline-flex text-gray-100">
                      <h3 className="text-4xl font-bold tracking-widest lg:text-6xl">
                        {project.projectName}
                      </h3>
                    </div>
                    <hr className="mt-4 border-t-2 border-gray-200/5" />
                    <ul className="mt-4 flex flex-col gap-4">
                      {project.projectPoints.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2 text-sm tracking-wide text-gray-300 lg:gap-4 lg:text-xl"
                        >
                          <FaCircleCheck size={15} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {project.links.map((link, index) => (
                      <div
                        key={index}
                        className="mt-8 flex flex-col gap-2 md:flex-row lg:gap-10"
                      >
                        <button className="h-12 w-full grow cursor-pointer items-center justify-center gap-2 rounded-xl bg-gray-100 font-semibold tracking-wide text-gray-950 transition-colors duration-500 ease-in-out md:flex md:w-1/2 md:px-8">
                          <a
                            href={link.githubLink.url}
                            className="inline-flex items-center justify-center gap-2"
                            target="_blank"
                          >
                            <span>{link.githubLink.textBtn}</span>
                            <GoArrowUpRight />
                          </a>
                        </button>
                        {link.liveLink.textBtn !== '--' && (
                          <button
                            key={link.liveLink.url}
                            className="h-12 w-full grow cursor-pointer items-center justify-center gap-2 rounded-xl bg-gray-100 font-semibold tracking-wide text-gray-950 transition-colors duration-500 ease-in-out hover:bg-gray-200 md:flex md:w-1/2 md:px-8"
                          >
                            <a
                              href={link.liveLink.url}
                              target="_blank"
                              className="inline-flex items-center justify-center gap-2"
                            >
                              <span>{link.liveLink.textBtn}</span>
                              <GoArrowUpRight />
                            </a>
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <img
                    loading="lazy"
                    src={project.projectImg}
                    alt={project.projectName}
                    className="mt-8 -mb-4 lg:ml-22"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
