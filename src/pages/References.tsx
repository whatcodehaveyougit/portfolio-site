import sigurdData from '../data/data.json';
import Reference from '../components/Reference';

function References(): JSX.Element {
  console.log(sigurdData.references);
  return (
    <div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Testimonials</h3>
        {sigurdData.references.map((reference, index) => (
          <div key={index}>
            <Reference reference={reference} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default References;
