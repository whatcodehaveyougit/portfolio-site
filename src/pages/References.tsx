import references from '../data/references.json';
import Reference from '../components/Reference';
import PageTitle from '../components/PageTitle';

function References(): JSX.Element {
  return (
    <div>
      <div>
        <PageTitle title="Testimonials" />
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
