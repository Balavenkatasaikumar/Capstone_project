import React from 'react';
import { ArrowRight, Upload, Settings, BarChart3, FileText, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: 1,
      icon: Upload,
      title: "Setup Your Fleet",
      description: "Import your vehicle data or add vehicles manually. Our system automatically categorizes and validates vehicle information.",
      details: [
        "Bulk import from Excel/CSV files",
        "Automatic VIN decoding",
        "Vehicle classification and categorization",
        "Fuel type and engine specifications"
      ],
      color: "bg-blue-500"
    },
    {
      step: 2,
      icon: Settings,
      title: "Configure Users & Permissions",
      description: "Set up user roles and permissions for different departments. Assign vehicles to responsible parties.",
      details: [
        "Department-based user groups",
        "Role-based access controls",
        "Vehicle assignment workflows",
        "Notification preferences"
      ],
      color: "bg-teal-500"
    },
    {
      step: 3,
      icon: BarChart3,
      title: "Track & Monitor",
      description: "Log fuel consumption, mileage, and maintenance activities. Monitor real-time analytics and performance metrics.",
      details: [
        "Fuel and mileage tracking",
        "Maintenance scheduling",
        "Real-time dashboard analytics",
        "Cost analysis and budgeting"
      ],
      color: "bg-purple-500"
    },
    {
      step: 4,
      icon: FileText,
      title: "Generate Reports",
      description: "Create compliance reports automatically. Schedule recurring reports and export data in various formats.",
      details: [
        "One-click DNR compliance reports",
        "Automated report scheduling",
        "Multiple export formats",
        "Historical data analysis"
      ],
      color: "bg-green-500"
    }
  ];

  const benefits = [
    "Reduce manual data entry by 80%",
    "Ensure 100% compliance with state reporting",
    "Save 10+ hours per month on reporting",
    "Improve fleet efficiency by 15%"
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How FleetManager Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get your university fleet management system up and running in four simple steps. 
            Our intuitive process ensures you're tracking, managing, and reporting on your fleet data efficiently.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-16 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-8 top-24 w-px h-16 bg-gray-300"></div>
              )}
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-start space-x-6">
                    <div className={`${step.color} w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center mb-4">
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium mr-4">
                          Step {step.step}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h2>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                      <ul className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`${step.color} rounded-xl p-8 h-80 flex items-center justify-center`}>
                    <div className="text-white text-center">
                      <step.icon className="h-20 w-20 mx-auto mb-4 opacity-80" />
                      <p className="text-xl font-semibold opacity-90">Step {step.step}</p>
                      <p className="text-blue-100 mt-2">{step.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why This Process Works</h2>
            <p className="text-lg text-gray-600">Proven results from universities already using FleetManager</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-4" />
                  <p className="font-semibold text-gray-900">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Implementation Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Week 1</h3>
              <p className="text-sm text-gray-600">System setup and user training</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-teal-600 font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Week 2</h3>
              <p className="text-sm text-gray-600">Data migration and validation</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Week 3</h3>
              <p className="text-sm text-gray-600">Process customization and testing</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-lg">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Week 4</h3>
              <p className="text-sm text-gray-600">Go-live and ongoing support</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join universities already streamlining their fleet management with our proven four-step process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200"
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/features"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View All Features
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;