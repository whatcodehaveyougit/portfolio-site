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
      <div className="flex justify-end">
        <h2>{name}</h2>
        <span className="ml-2 mr-2">|</span>
        <p>{company}</p>
        <span className="ml-2 mr-2">|</span>
        <p>{relation}</p>
        <span className="ml-2 mr-2">|</span>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default Reference;
