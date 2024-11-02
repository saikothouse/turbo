import { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

const ProjectList = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('https://api.github.com/users/YOUR_GITHUB_USERNAME/repos');
      const data = await response.json();
      setProjects(data);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <div key={project.id} data-aos="fade-up" className="p-4 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text -blue-400">View on GitHub</a>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
