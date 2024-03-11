interface ReferenceProps {
  reference: {
    name: string;
    date: string;
    company: string;
    relation: string;
    kindWords: string;
  };
}

function Reference({ reference }: ReferenceProps): JSX.Element {
  const { name, date, company, relation, kindWords } = reference;
  return (
    <div className="border border-gray-300 rounded-md shadow-sm p-5 mb-5">
      <i>&quot;{kindWords}&quot;</i>
      <div className="grid grid-cols-2 sm:flex sm:justify-end mt-2 sm:mt-1">
        <h2>
          {name} <span className="hidden sm:inline ml-2 mr-2">|</span>
        </h2>
        <p>
          {company} <span className="hidden sm:inline ml-2 mr-2">|</span>
        </p>
        <p>
          {relation} <span className="hidden sm:inline ml-2 mr-2">|</span>
        </p>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default Reference;
