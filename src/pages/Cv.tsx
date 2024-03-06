import sigurdData from '../data/jobs.json';
import Job from '../components/Job';

function CV(): JSX.Element {
  return (
    <div>
      <div className="mb-2">
        <h3 className="text-xl font-semibold mb-2">Qualifications</h3>
        <ul className="list-disc pl-4">
          <li>BMus in Music: 2.1 from University of Edinburgh</li>
          <li>CodeClan: 16 Week Professional Software Development Course</li>
        </ul>
      </div>
      <br />
      <div>
        <h3 className="text-xl font-semibold mb-2">Experience</h3>
        {sigurdData.jobs.map((job, index) => (
          <div key={index}>
            <Job job={job} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CV;
