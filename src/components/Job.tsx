interface JobProps {
  job: {
    title: string;
    company: string;
    companyWebsite: string;
    contract: string;
    timeSpan: string;
    technologiesUsed: string[];
    mainResponsibilities: string[];
  };
}

function Job({ job }: JobProps): JSX.Element {
  console.log(job);
  const { title, company, companyWebsite, contract, timeSpan, technologiesUsed, mainResponsibilities } = job;
  return (
    <div className="job">
      <div className="flex flex-col md:flex-row md:items-center">
        <h3 className="font-semibold mr-2 text-lg">{title} - </h3>
        <a className="mr-4 text-lg" href={companyWebsite}>
          {company}
        </a>
      </div>
      <div className="flex flex-col md:flex-row md:items-center">
        <span className="mr-2">{timeSpan} - </span>
        <span>{contract}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 m-4">
        <ul className="list-disc">
          {technologiesUsed.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
        <ul className="col-span-1 md:col-span-4 list-disc">
          {mainResponsibilities.map((responsibility, index) => (
            <li className="mt-1" key={index}>
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Job;
