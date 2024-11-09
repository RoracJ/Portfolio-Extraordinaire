function Project({ project }) {
    return (
      <div className="project">
        <h3>{project.title}</h3>
        <img src={project.image} alt={project.title} />
        <div>
          <a href={project.repoLink} target="_blank" rel="https://game-armoury.onrender.com/Links to an external site.">GitHub Repo</a>
        </div>
      </div>
    );
  }
  
  export default Project;
  