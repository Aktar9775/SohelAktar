import React, { useState } from 'react';
import { Settings, User, Briefcase, FileText, Mail, Save, Plus, Trash2, Edit } from 'lucide-react';
import { useSiteData } from '../context/SiteContext';
import { Project, BlogPost, Experience, Skill } from '../types';

const Admin: React.FC = () => {
  const { data, updateData } = useSiteData();
  const [activeTab, setActiveTab] = useState<'personal' | 'projects' | 'blog' | 'experience' | 'skills'>('personal');
  const [isEditing, setIsEditing] = useState<string | null>(null);

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'blog', label: 'Blog Posts', icon: FileText },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Settings }
  ] as const;

  const handlePersonalUpdate = (field: string, value: string) => {
    updateData({
      personal: {
        ...data.personal,
        [field]: value
      }
    });
  };

  const handleSocialUpdate = (platform: string, value: string) => {
    updateData({
      personal: {
        ...data.personal,
        social: {
          ...data.personal.social,
          [platform]: value
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 px-6 py-4">
            <h1 className="text-2xl font-bold text-white flex items-center">
              <Settings className="w-6 h-6 mr-3" />
              Admin Panel
            </h1>
            <p className="text-indigo-100 mt-1">Manage your portfolio content</p>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 bg-gray-50 border-r border-gray-200">
              <nav className="p-4 space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-2 text-left rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-indigo-100 text-indigo-700 font-semibold'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon className="w-4 h-4 mr-3" />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="flex-1 p-6">
              {activeTab === 'personal' && (
                <PersonalInfoTab
                  data={data.personal}
                  onPersonalUpdate={handlePersonalUpdate}
                  onSocialUpdate={handleSocialUpdate}
                />
              )}
              {activeTab === 'projects' && (
                <ProjectsTab
                  projects={data.projects}
                  onUpdate={(projects) => updateData({ projects })}
                />
              )}
              {activeTab === 'blog' && (
                <BlogTab
                  posts={data.blogPosts}
                  onUpdate={(blogPosts) => updateData({ blogPosts })}
                />
              )}
              {activeTab === 'experience' && (
                <ExperienceTab
                  experience={data.experience}
                  onUpdate={(experience) => updateData({ experience })}
                />
              )}
              {activeTab === 'skills' && (
                <SkillsTab
                  skills={data.skills}
                  onUpdate={(skills) => updateData({ skills })}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PersonalInfoTab: React.FC<{
  data: any;
  onPersonalUpdate: (field: string, value: string) => void;
  onSocialUpdate: (platform: string, value: string) => void;
}> = ({ data, onPersonalUpdate, onSocialUpdate }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => onPersonalUpdate('name', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
        <input
          type="text"
          value={data.title}
          onChange={(e) => onPersonalUpdate('title', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => onPersonalUpdate('email', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
        <input
          type="text"
          value={data.phone}
          onChange={(e) => onPersonalUpdate('phone', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
        <input
          type="text"
          value={data.location}
          onChange={(e) => onPersonalUpdate('location', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Avatar URL</label>
        <input
          type="url"
          value={data.avatar}
          onChange={(e) => onPersonalUpdate('avatar', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
    </div>
    
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
      <textarea
        value={data.bio}
        onChange={(e) => onPersonalUpdate('bio', e.target.value)}
        rows={4}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>

    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Links</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">GitHub</label>
          <input
            type="url"
            value={data.social.github}
            onChange={(e) => onSocialUpdate('github', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
          <input
            type="url"
            value={data.social.linkedin}
            onChange={(e) => onSocialUpdate('linkedin', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Twitter</label>
          <input
            type="url"
            value={data.social.twitter}
            onChange={(e) => onSocialUpdate('twitter', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  </div>
);

const ProjectsTab: React.FC<{
  projects: Project[];
  onUpdate: (projects: Project[]) => void;
}> = ({ projects, onUpdate }) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: 'New Project',
      description: 'Project description',
      image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: [],
      category: 'web',
      featured: false
    };
    onUpdate([...projects, newProject]);
    setEditingId(newProject.id);
  };
  
  const deleteProject = (id: string) => {
    onUpdate(projects.filter(p => p.id !== id));
  };
  
  const updateProject = (id: string, updates: Partial<Project>) => {
    onUpdate(projects.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900">Projects</h2>
        <button
          onClick={addProject}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </button>
      </div>
      
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-200 rounded-lg p-4">
            {editingId === project.id ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) => updateProject(project.id, { title: e.target.value })}
                    className="px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="Project title"
                  />
                  <select
                    value={project.category}
                    onChange={(e) => updateProject(project.id, { category: e.target.value as any })}
                    className="px-3 py-2 border border-gray-300 rounded-lg"
                  >
                    <option value="web">Web</option>
                    <option value="mobile">Mobile</option>
                    <option value="fullstack">Full Stack</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <textarea
                  value={project.description}
                  onChange={(e) => updateProject(project.id, { description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  rows={3}
                  placeholder="Project description"
                />
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => setEditingId(null)}
                    className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs mt-2">
                    {project.category}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditingId(project.id)}
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteProject(project.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Similar implementations for BlogTab, ExperienceTab, and SkillsTab would follow...
const BlogTab: React.FC<{ posts: BlogPost[]; onUpdate: (posts: BlogPost[]) => void }> = ({ posts }) => (
  <div>
    <h2 className="text-xl font-bold text-gray-900 mb-4">Blog Posts</h2>
    <p className="text-gray-600">Blog management coming soon...</p>
  </div>
);

const ExperienceTab: React.FC<{ experience: Experience[]; onUpdate: (experience: Experience[]) => void }> = ({ experience }) => (
  <div>
    <h2 className="text-xl font-bold text-gray-900 mb-4">Experience</h2>
    <p className="text-gray-600">Experience management coming soon...</p>
  </div>
);

const SkillsTab: React.FC<{ skills: Skill[]; onUpdate: (skills: Skill[]) => void }> = ({ skills }) => (
  <div>
    <h2 className="text-xl font-bold text-gray-900 mb-4">Skills</h2>
    <p className="text-gray-600">Skills management coming soon...</p>
  </div>
);

export default Admin;