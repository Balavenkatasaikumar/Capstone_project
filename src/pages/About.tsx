import React from 'react';
import { GraduationCap, Users, Target, Award, Code, Database, Shield, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const projectStats = [
    { icon: Code, label: "Lines of Code", value: "15,000+" },
    { icon: Database, label: "Data Points Tracked", value: "500+" },
    { icon: Users, label: "User Roles Supported", value: "4" },
    { icon: Award, label: "Compliance Standards", value: "100%" }
  ];

  const teamMembers = [
    {
      name: "Development Team",
      role: "Computer Science Capstone",
      description: "Led the technical development, database design, and system architecture implementation.",
      skills: ["React.js", "Node.js", "Database Design", "API Development"]
    },
    {
      name: "Project Advisor",
      role: "Faculty Supervisor",
      description: "Provided guidance on project scope, requirements analysis, and industry best practices.",
      skills: ["Project Management", "Requirements Analysis", "Quality Assurance", "Industry Standards"]
    },
    {
      name: "Stakeholder Partners",
      role: "University Administration",
      description: "Defined requirements, provided domain expertise, and validated system functionality.",
      skills: ["Fleet Management", "Compliance", "Operations", "Reporting"]
    }
  ];

  const technologies = [
    { name: "React.js", description: "Modern frontend framework for responsive user interfaces" },
    { name: "TypeScript", description: "Type-safe JavaScript for robust application development" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework for beautiful, responsive designs" },
    { name: "Node.js", description: "Server-side JavaScript runtime for backend services" },
    { name: "PostgreSQL", description: "Reliable relational database for data persistence" },
    { name: "Chart.js", description: "Interactive data visualization and reporting charts" }
  ];

  const milestones = [
    {
      phase: "Phase 1",
      title: "Research & Planning",
      description: "Requirements gathering, stakeholder interviews, and technology selection",
      duration: "2 weeks"
    },
    {
      phase: "Phase 2",
      title: "System Design",
      description: "Database schema design, UI/UX mockups, and system architecture planning",
      duration: "3 weeks"
    },
    {
      phase: "Phase 3",
      title: "Development",
      description: "Core feature implementation, database integration, and testing",
      duration: "8 weeks"
    },
    {
      phase: "Phase 4",
      title: "Testing & Deployment",
      description: "User acceptance testing, bug fixes, and production deployment",
      duration: "2 weeks"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About the FleetManager Project
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive university capstone project developed to address real-world fleet management challenges 
            and Missouri DNR compliance requirements for educational institutions.
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {projectStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Project Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The University Vehicle Data Management & Reporting System was conceived as a capstone project to solve 
              a critical need in higher education: streamlined fleet management with automated compliance reporting.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Working closely with university administration and IT departments, our team identified key pain points 
              in manual data collection, report generation, and state compliance tracking. The result is a comprehensive 
              web-based solution that automates these processes while providing powerful analytics and insights.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Target className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Project Goal</h3>
                  <p className="text-sm text-gray-600">Automate fleet reporting and ensure 100% compliance</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Lightbulb className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Innovation</h3>
                  <p className="text-sm text-gray-600">First comprehensive solution for university fleet management</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white">
            <div className="text-center">
              <Shield className="h-16 w-16 mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
              <p className="text-blue-100 mb-6">Computer Science Capstone Project</p>
              <div className="space-y-3">
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <p className="font-semibold">University of Missouri</p>
                  <p className="text-sm opacity-80">Computer Science Department</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <p className="font-semibold">Spring 2024 Semester</p>
                  <p className="text-sm opacity-80">15-Week Development Cycle</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Development Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gray-300 transform translate-x-4"></div>
                )}
                
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-4 text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{milestone.description}</p>
                  <div className="bg-blue-50 rounded-lg px-3 py-1 inline-block">
                    <span className="text-blue-600 font-medium text-sm">{milestone.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Project Team</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.description}</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                "Reduced manual reporting time by 90%",
                "Achieved 100% Missouri DNR compliance",
                "Implemented role-based security system",
                "Created automated alert and notification system"
              ].map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{achievement}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                "Designed scalable database architecture",
                "Built responsive, mobile-friendly interface",
                "Integrated real-time data visualization",
                "Established comprehensive testing framework"
              ].map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Development */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Future Development</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            This capstone project serves as a foundation for continued development and potential commercialization 
            to benefit universities nationwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Mobile App</h3>
              <p className="text-sm text-blue-100">Native mobile applications for iOS and Android</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h3 className="font-semibold mb-2">AI Integration</h3>
              <p className="text-sm text-blue-100">Predictive analytics and optimization recommendations</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Multi-State Support</h3>
              <p className="text-sm text-blue-100">Expand compliance support to additional states</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;