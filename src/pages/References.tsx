import references from '../data/references.json';
import Reference from '../components/Reference';

function References(): JSX.Element {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-semibold mb-2">Testimonials</h1>
        {references.references.map((reference, index) => (
          <div key={index}>
            <Reference reference={reference} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default References;
