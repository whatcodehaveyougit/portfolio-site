function Home(): JSX.Element {
  return (
    <div className="home">
      <p className="text-center sm:text-left">
        My career started out by building WordPress websites on a freelance basis in 2018, this lead onto me completing
        the CodeClan Edinburgh 16 week bootcamp in 2020 and I have been working in software development ever since. To
        date I have worked in several companies with teams of different sizes on a full time basis and as a contractor.
        My skillset is as follows.
      </p>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
        <div className="text-center sm:text-left">
          <h3 className="font-semibold text-xl">Primary:</h3>
          <ul className="list-none sm:list-disc sm:ml-6">
            <li>HTML</li>
            <li>CSS / SASS / SCSS</li>
            <li>Javascript</li>
            <li>Git</li>
            <li>React</li>
            <li>Typescript</li>
            <li>End to End Testing</li>
            <li>WordPress</li>
            <li>Docker</li>
            <li>Redux</li>
            <li>API Integration (using Postman)</li>
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="font-semibold text-xl">Secondary:</h3>
          <ul className="list-none sm:list-disc sm:ml-6">
            <li>Angular</li>
            <li>Vue</li>
            <li>Unit Testing</li>
            <li>jQuery</li>
            <li>PHP</li>
            <li>jQuery</li>
            <li>App Certification</li>
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="font-semibold text-xl">Strong Awareness of:</h3>
          <ul className="list-none sm:list-disc sm:ml-6">
            <li>SEO</li>
            <li>Responsive Design / Mobile First</li>
            <li>Accessibility</li>
            <li>Agile</li>
            <li>Good Practices</li>
            <li>Different CSS Frameworks</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
