import jobHistory from '../data/job-history.json';
import Job from '../components/Job';
import PageTitle from '../components/PageTitle';

function CV(): JSX.Element {
  return (
    <div>
      <div className="mb-2">
        <PageTitle title="Qualifications" />
        <ul className="list-disc pl-4">
          <li className="m-1 md:m-0">BMus in Music: 2.1 from University of Edinburgh: 2012 - 2016</li>
          <li className="m-1 md:m-0">
            CodeClan: 16 Week Professional Software Development Course: November 2019 - March 2020
          </li>
        </ul>
      </div>
      <br />
      <div>
        <h3 className="text-2xl font-semibold mb-2">Experience</h3>
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
