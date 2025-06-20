import React from 'react';
import { Database, FileText, Users, Settings, BarChart3, Shield, Clock, Download } from 'lucide-react';

const Features: React.FC = () => {
  const mainFeatures = [
    {
      icon: Database,
      title: "Vehicle Setup & Classification",
      description: "Comprehensive vehicle database with detailed classification system supporting all vehicle types including cars, trucks, buses, and specialized equipment.",
      benefits: [
        "Automated VIN decoding and vehicle information lookup",
        "Custom vehicle categories and classifications",
        "Fuel type and engine specifications tracking",
        "Maintenance schedule templates"
      ]
    },
    {
      icon: BarChart3,
      title: "Fuel Tracking & Analytics",
      description: "Advanced fuel consumption monitoring with real-time analytics and efficiency reporting for cost optimization and environmental compliance.",
      benefits: [
        "Real-time fuel consumption tracking",
        "MPG calculations and efficiency trends",
        "Cost analysis and budget forecasting",
        "Environmental impact reporting"
      ]
    },
    {
      icon: FileText,
      title: "Automated Compliance Reports",
      description: "Generate Missouri DNR-compliant reports automatically with customizable templates and scheduled delivery options.",
      benefits: [
        "One-click DNR report generation",
        "Automated email delivery to stakeholders",
        "Historical report archive and versioning",
        "Custom report templates and formatting"
      ]
    },
    {
      icon: Users,
      title: "User Roles & Permissions",
      description: "Granular access control system supporting multiple departments with role-based permissions and audit trails.",
      benefits: [
        "Department-based access controls",
        "Admin, manager, and user role hierarchies",
        "Activity logging and audit trails",
        "Single sign-on integration support"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with data encryption and compliance monitoring."
    },
    {
      icon: Clock,
      title: "Automated Scheduling",
      description: "Schedule maintenance, inspections, and reporting tasks automatically."
    },
    {
      icon: Download,
      title: "Data Export",
      description: "Export data to Excel, PDF, and CSV formats for external analysis."
    },
    {
      icon: Settings,
      title: "Customization",
      description: "Customize fields, reports, and workflows to match your processes."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Fleet Management Features
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every tool you need to manage your university fleet efficiently, maintain compliance, 
            and generate insightful reports for informed decision-making.
          </p>
        </div>

        {/* Main Features */}
        <div className="space-y-20 mb-20">
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-3">
                      <div className="bg-green-100 rounded-full p-1 mt-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 h-80 flex items-center justify-center">
                  <div className="text-white text-center">
                    <feature.icon className="h-20 w-20 mx-auto mb-4 opacity-80" />
                    <p className="text-xl font-semibold opacity-90">{feature.title}</p>
                    <p className="text-blue-100 mt-2">Interactive Feature Demo</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Capabilities</h2>
            <p className="text-lg text-gray-600">More features to enhance your fleet management experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-20 bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">System Requirements</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Web-based application</li>
                <li>• Modern browser support</li>
                <li>• Mobile responsive design</li>
                <li>• Offline data sync capability</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Data & Security</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 256-bit SSL encryption</li>
                <li>• Regular automated backups</li>
                <li>• FERPA compliant</li>
                <li>• Role-based access control</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Integration</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Excel/CSV import/export</li>
                <li>• API for third-party systems</li>
                <li>• Single sign-on support</li>
                <li>• Email notification system</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;