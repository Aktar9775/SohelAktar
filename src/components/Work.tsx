import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { useSiteData } from '../context/SiteContext';
import { Project } from '../types';

const Work: React.FC = () => {
  const { data } = useSiteData();
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'web', 'mobile', 'fullstack', 'other'];

  const filteredProjects = data.projects.filter(project => 
    filter === 'all' || project.category === filter
  );

  const featuredProjects = data.projects.filter(project => project.featured);

  return (
    <section id="work" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4  ">
            Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and solution.
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.slice(0, 2).map((project) => (
                <FeaturedProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center text-gray-500 mr-4">
            <Filter className="w-4 h-4 mr-2" />
            Filter:
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-yellow-400 text-white shadow-lg'
                  : 'bg-gray-900 text-white hover:bg-gray-500 border border-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

const FeaturedProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-4 right-4">
        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">
          Featured
        </span>
      </div>
    </div>
    <div className="p-3">
      <h3 className="text-xl font-bold text-gray-900 ">{project.title}</h3>
      {/* <p className="text-gray-600">{project.description}</p> */}
      
      <div className="flex flex-wrap gap-1">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-1  py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Github className="w-4 h-4 mr-1" />
            Code
          </a>
        )}
      </div>
    </div>
  </div>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group">
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-3 right-3">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          project.category === 'web' ? 'bg-blue-100 text-blue-800' :
          project.category === 'mobile' ? 'bg-green-100 text-green-800' :
          project.category === 'fullstack' ? 'bg-purple-100 text-purple-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {project.category}
        </span>
      </div>
    </div>
    <div className="p-3">
      <h3 className="font-bold text-gray-900 mb-2">{project.title}</h3>
      {/* <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p> */}
      
      <div className="flex flex-wrap gap-1 mb-4">
        {project.technologies.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="px-1 py-1 bg-gray-100 text-gray-600 rounded text-xs"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 py-1 text-gray-500 text-xs">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>

      <div className="flex gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors text-sm"
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            Live
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors text-sm"
          >
            <Github className="w-3 h-3 mr-1" />
            Code
          </a>
        )}
      </div>
    </div>
  </div>
);

export default Work;