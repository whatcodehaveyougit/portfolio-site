import projects from '../data/projects.json';
import Project from '../components/Project';

function Portfolio(): JSX.Element {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-semibold mb-2">Experience</h1>
        {projects.projects.map((project, index) => (
          <div key={index}>
            <Project project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
