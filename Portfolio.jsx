import Project from '../components/Project';

function Portfolio() {
  const projects = [
    { title: 'Build Your Ride', repoLink: 'https://github.com/RoracJ/Build-Your-Ride' },
    { title: 'Read this README', repoLink: 'https://github.com/RoracJ/Read-this-README' },
    { title: 'placeholder' },
    { title: 'placeholder' },
    { title: 'placeholder' },
    { title: 'placeholder' },

    // Add more projects here
  ];

  return (
    <section>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </section>
  );
}

export default Portfolio;
