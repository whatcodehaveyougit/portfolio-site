function Home(): JSX.Element {
  return (
    <div className="home">
      <p>
        I started out by building WordPress websites on a freelance basis in 2018 and have been working in software
        development as a web developer since 2020. I have worked in several companies with teams of different sizes on a
        full time basis and as a contractor too. My skillset is as follows.
      </p>
      <section className="grid grid-cols-3 my-4">
        <div>
          <h3 className="font-semibold text-xl">Primary:</h3>
          <ul>
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
        <div>
          <h3 className="font-semibold text-xl">Secondary:</h3>
          <ul>
            <li>Angular</li>
            <li>Vue</li>
            <li>Unit Testing</li>
            <li>jQuery</li>
            <li>PHP</li>
            <li>jQuery</li>
            <li>App Certification</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-xl">Strong Awareness of:</h3>
          <ul>
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
