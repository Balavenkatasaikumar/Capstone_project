import React from 'react';
import { Download, FileText, BarChart3, PieChart, TrendingUp, Calendar } from 'lucide-react';

const ReportTemplates: React.FC = () => {
  const reportTypes = [
    {
      icon: FileText,
      title: "Missouri DNR Compliance Report",
      description: "Official state reporting format for Missouri Department of Natural Resources vehicle fleet data submission.",
      features: [
        "Automated data validation",
        "State-compliant formatting",
        "Fuel consumption analysis",
        "Vehicle exemption tracking"
      ],
      format: "PDF, Excel",
      frequency: "Annual, Quarterly",
      preview: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: BarChart3,
      title: "Fleet Performance Dashboard",
      description: "Comprehensive overview of fleet efficiency, costs, and performance metrics for administrative review.",
      features: [
        "Real-time performance metrics",
        "Cost per mile analysis",
        "Fuel efficiency trends",
        "Maintenance cost tracking"
      ],
      format: "PDF, PNG",
      frequency: "Monthly, Weekly",
      preview: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: PieChart,
      title: "Fuel Consumption Analysis",
      description: "Detailed breakdown of fuel usage by vehicle type, department, and time period with cost analysis.",
      features: [
        "Fuel type distribution",
        "Department-wise consumption",
        "Seasonal usage patterns",
        "Cost optimization recommendations"
      ],
      format: "Excel, PDF",
      frequency: "Monthly, Custom",
      preview: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: TrendingUp,
      title: "Vehicle Utilization Report",
      description: "Track vehicle usage patterns, identify underutilized assets, and optimize fleet size and allocation.",
      features: [
        "Vehicle usage statistics",
        "Idle time analysis",
        "Route optimization insights",
        "Fleet rightsizing recommendations"
      ],
      format: "PDF, Excel",
      frequency: "Quarterly, Monthly",
      preview: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Calendar,
      title: "Maintenance Schedule Report",
      description: "Comprehensive maintenance tracking with upcoming service requirements and cost projections.",
      features: [
        "Upcoming maintenance alerts",
        "Service history tracking",
        "Cost projection analysis",
        "Vendor performance metrics"
      ],
      format: "PDF, Excel",
      frequency: "Monthly, Weekly",
      preview: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const sampleData = [
    { metric: "Total Vehicles", value: "127", change: "+3 from last month" },
    { metric: "Total Miles", value: "45,678", change: "+12% from last month" },
    { metric: "Fuel Consumed", value: "3,245 gal", change: "-5% from last month" },
    { metric: "Average MPG", value: "14.1", change: "+8% improvement" }
  ];

  const faqs = [
    {
      question: "How do I submit fleet data to the Missouri Department of Natural Resources?",
      answer: "Our system automatically generates DNR-compliant reports in the required format. Simply export the annual report and submit it through the Missouri DNR online portal or email system."
    },
    {
      question: "What fuel types are supported in the reporting system?",
      answer: "We support all standard fuel types including gasoline, diesel, E85, biodiesel, CNG, propane, electric, and hybrid vehicles. Custom fuel types can be added upon request."
    },
    {
      question: "Can I export reports to Excel for further analysis?",
      answer: "Yes, all reports can be exported to Excel, PDF, and CSV formats. Excel exports include raw data tables and pre-formatted charts for additional analysis."
    },
    {
      question: "How often should I generate compliance reports?",
      answer: "Missouri DNR requires annual submissions, but we recommend generating quarterly reports to ensure data accuracy and identify any issues early in the reporting cycle."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Report Templates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access a complete library of pre-built report templates designed specifically for university fleet management 
            and Missouri DNR compliance requirements. Export in multiple formats for easy sharing and analysis.
          </p>
        </div>

        {/* Sample Data Overview */}
        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Sample Fleet Data Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleData.map((data, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-sm font-medium text-gray-600 mb-2">{data.metric}</h3>
                <p className="text-3xl font-bold text-gray-900 mb-1">{data.value}</p>
                <p className="text-sm text-green-600 font-medium">{data.change}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Report Templates */}
        <div className="space-y-12 mb-16">
          {reportTypes.map((report, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <report.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{report.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{report.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {report.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <div className="bg-green-100 rounded-full p-1 mt-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Export Formats</h4>
                        <p className="text-sm text-gray-600">{report.format}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Report Frequency</h4>
                        <p className="text-sm text-gray-600">{report.frequency}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      <Download className="h-4 w-4 mr-2" />
                      Download Sample
                    </button>
                    <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
                      Preview Template
                    </button>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <img
                      src={report.preview}
                      alt={`${report.title} preview`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Reports CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Need Custom Reports?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team can create custom report templates tailored to your specific university requirements and reporting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200">
              Request Custom Report
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-200">
              View All Templates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportTemplates;