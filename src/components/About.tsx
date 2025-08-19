import React from 'react';
import { Calendar, MapPin, Code, Award, Users, Coffee } from 'lucide-react';
import { useSiteData } from '../context/SiteContext';

const About: React.FC = () => {
  const { data } = useSiteData();

  const skillCategories = [
    { name: 'Frontend', color: 'bg-blue-100 text-blue-800', category: 'frontend' },
    { name: 'Backend', color: 'bg-green-100 text-green-800', category: 'backend' },
    { name: 'Database', color: 'bg-purple-100 text-purple-800', category: 'database' },
    { name: 'Tools', color: 'bg-orange-100 text-orange-800', category: 'tools' },
  ];

  const getSkillLevel = (level: number) => {
    const levels = ['Beginner', 'Intermediate', 'Advanced', 'Expert', 'Master'];
    return levels[level - 1] || 'Beginner';
  };

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '11+' },
    { icon: Calendar, label: 'Years Experience', value: '2+' },
    { icon: Users, label: 'Happy Clients', value: '10+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '760+' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about my background, skills, and journey in software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* About Text */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 mb-4">
                  {data.personal.bio}
                </p>
                <p className="text-gray-600 mb-4">
                  I'm passionate about creating digital experiences that make a difference. Whether it's a sleek
                  web application, a robust API, or an innovative mobile app, I love turning ideas into reality
                  through clean, efficient code.
                </p>
                <p className="text-gray-600">
                  When I'm not coding, you can find me exploring new technologies, contributing to open source
                  projects, or enjoying a good cup of coffee while reading about the latest trends in tech.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-yellow-600">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{data.personal.location}</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>Available for freelance</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
              >
                <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        

        {/* Experience */}
        {/* <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Work Experience</h3>
          <div className="space-y-8">
            {data.experience.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-8 pb-8 border-l-2 border-indigo-200 last:border-l-0 last:pb-0"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{exp.position}</h4>
                      <p className="text-lg text-indigo-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-500 mt-2 md:mt-0">
                      {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {' '}
                      {exp.endDate 
                        ? new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                        : 'Present'
                      }
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;