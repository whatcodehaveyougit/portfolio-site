import sigurdData from '../data/data.json';
import Project from '../components/Project';

function Portfolio(): JSX.Element {
  return (
    <div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Experience</h3>
        {sigurdData.projects.map((project, index) => (
          <div key={index}>
            <Project project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
