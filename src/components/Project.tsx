interface ProjectProps {
  project: {
    title: string;
    link: string;
    gitHubLink: string | null;
    imageName: string;
    tags: string[];
    description: string;
    deliverables: string[];
  };
}

function Project({ project }: ProjectProps): JSX.Element {
  const { title, link, gitHubLink, imageName, tags, description, deliverables } = project;
  const imgUrl = new URL(`../images/${imageName}.png`, import.meta.url).href;

  return (
    <div className="project relative mb-4">
      <div
        className=" grid grid-cols-1 w-full h-full inset-0 bg-cover bg-center bg-no-repeat pt-12 pb-12 pl-4 pr-4"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-80 z-2"></div> {/* Black overlay */}
        <div className="relative z-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center">
            <p className="font-semibold mr-2 text-2xl">{title}</p>
            <div className="flex flex-wrap">
              {tags.map((tag) => (
                <span key={tag} className="border border-white m-1 p-2 rounded whitespace-nowrap">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="my-2">{description}</p>
          <ul className="list-disc ml-6">
            {deliverables.map((deliverable, index) => (
              <li key={index}>{deliverable}</li>
            ))}
          </ul>
          <div className="flex justify-end">
            <a className="border border-white p-2 mr-4 rounded" target="_blank" href={link} rel="noreferrer">
              View Site
            </a>
            {gitHubLink && (
              <a className="border border-white p-2 rounded" target="_blank" href={gitHubLink} rel="noreferrer">
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
