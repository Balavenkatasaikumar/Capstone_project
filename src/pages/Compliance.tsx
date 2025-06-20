import React from 'react';
import { Shield, CheckCircle, AlertTriangle, FileCheck, Clock, Award } from 'lucide-react';

const Compliance: React.FC = () => {
  const complianceFeatures = [
    {
      icon: Shield,
      title: "Missouri DNR Compliance",
      description: "Automated compliance with Missouri Department of Natural Resources vehicle fleet reporting requirements.",
      details: [
        "Automatic data validation against DNR standards",
        "Real-time compliance status monitoring",
        "Deadline tracking and alerts",
        "Audit trail for all submissions"
      ]
    },
    {
      icon: FileCheck,
      title: "Environmental Reporting",
      description: "Comprehensive environmental impact tracking and sustainability reporting for university initiatives.",
      details: [
        "Carbon footprint calculations",
        "Fuel efficiency trend analysis",
        "Emissions tracking by vehicle type",
        "Sustainability goal progress tracking"
      ]
    },
    {
      icon: Clock,
      title: "Automated Scheduling",
      description: "Never miss a compliance deadline with automated report generation and submission scheduling.",
      details: [
        "Customizable reporting schedules",
        "Automatic report generation",
        "Email notifications and reminders",
        "Multi-stakeholder distribution lists"
      ]
    }
  ];

  const requirements = [
    {
      category: "Vehicle Registration",
      items: [
        "All university-owned vehicles must be registered in the system",
        "Vehicle identification numbers (VIN) must be accurately recorded",
        "Fuel type and engine specifications must be documented",
        "Vehicle classification according to DNR guidelines"
      ]
    },
    {
      category: "Fuel Reporting",
      items: [
        "Monthly fuel consumption data collection",
        "Fuel purchase documentation and receipts",
        "Alternative fuel usage tracking (E85, biodiesel, CNG)",
        "Fuel efficiency calculations and trend analysis"
      ]
    },
    {
      category: "Maintenance Records",
      items: [
        "Preventive maintenance schedule documentation",
        "Repair and service history tracking",
        "Emissions testing and inspection records",
        "Vehicle retirement and disposal documentation"
      ]
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "100% Compliance Guarantee",
      description: "Ensure perfect compliance with all Missouri DNR reporting requirements through automated validation and submission."
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Reduce manual reporting time by 90% with automated data collection and report generation."
    },
    {
      icon: Award,
      title: "Audit Readiness",
      description: "Maintain comprehensive audit trails and documentation to support compliance reviews and inspections."
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Data Collection",
      description: "Automatically collect and validate vehicle data from multiple sources"
    },
    {
      step: 2,
      title: "Compliance Check",
      description: "Verify data meets all DNR requirements and flag any issues"
    },
    {
      step: 3,
      title: "Report Generation",
      description: "Generate compliant reports in the required format and schedule"
    },
    {
      step: 4,
      title: "Submission & Archive",
      description: "Submit reports and maintain permanent records for audit purposes"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Compliance & Sustainability Reporting
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay compliant with Missouri DNR regulations while supporting your university's sustainability initiatives. 
            Our automated compliance system ensures accurate reporting and reduces administrative burden.
          </p>
        </div>

        {/* Compliance Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {complianceFeatures.map((feature, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Missouri DNR Requirements */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Missouri DNR Requirements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{req.category}</h3>
                <ul className="space-y-3">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <div className="bg-blue-100 rounded-full p-1 mt-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Automated Compliance Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute mt-8 w-24 h-px bg-gray-300 transform translate-x-16"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Sustainability Focus */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Supporting University Sustainability Goals</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our platform goes beyond compliance to help universities achieve their sustainability objectives through 
                comprehensive environmental impact tracking and optimization recommendations.
              </p>
              <ul className="space-y-4">
                {[
                  "Carbon footprint reduction tracking",
                  "Fleet electrification planning",
                  "Alternative fuel adoption monitoring",
                  "Efficiency improvement recommendations"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-xl p-8 text-white">
              <div className="text-center">
                <Award className="h-16 w-16 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">Sustainability Dashboard</h3>
                <p className="text-green-100 mb-6">Track your environmental impact in real-time</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">-15%</div>
                    <div className="text-sm opacity-80">CO₂ Emissions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">+12%</div>
                    <div className="text-sm opacity-80">Fuel Efficiency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warning Box */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-16">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Compliance Notice</h3>
              <p className="text-yellow-700 leading-relaxed">
                Missouri state agencies and institutions are required to submit annual vehicle fleet reports to the 
                Department of Natural Resources. Failure to comply may result in penalties and funding restrictions. 
                Our system ensures 100% compliance with all reporting requirements and deadlines.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ensure Perfect Compliance Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't risk compliance issues or manual reporting errors. Let our automated system handle all your 
            Missouri DNR reporting requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200">
              Start Free Trial
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;