import projects from '../data/projects.json';
import Project from '../components/Project';
import PageTitle from '../components/PageTitle';

function Portfolio(): JSX.Element {
  return (
    <div>
      <div>
        <PageTitle title="Experience" />
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
