import jobHistory from '../data/job-history.json';
import Job from '../components/Job';

function CV(): JSX.Element {
  return (
    <div>
      <div className="mb-2">
        <h3 className="text-xl font-semibold mb-2">Qualifications</h3>
        <ul className="list-disc pl-4">
          <li>BMus in Music: 2.1 from University of Edinburgh: 2012 - 2016</li>
          <li>CodeClan: 16 Week Professional Software Development Course: November 2019 - March 2020</li>
        </ul>
      </div>
      <br />
      <div>
        <h3 className="text-xl font-semibold mb-2">Experience</h3>
        {jobHistory.jobs.map((job, index) => (
          <div key={index}>
            <Job job={job} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CV;
