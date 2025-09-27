import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, FileText, Video, Globe } from "lucide-react";

const Resources = () => {
  const externalLinks = [
    {
      title: "EPA Waste Management Guidelines",
      description: "Comprehensive guidelines from the Environmental Protection Agency on waste management best practices and regulations.",
      url: "https://www.epa.gov/hw",
      icon: FileText,
      category: "Government Resources"
    },
    {
      title: "Waste Management World Magazine",
      description: "Leading publication covering global waste management industry news, technologies, and innovations.",
      url: "https://waste-management-world.com/",
      icon: BookOpen,
      category: "Industry News"
    },
    {
      title: "Ellen MacArthur Foundation - Circular Economy",
      description: "Resources and research on transitioning to a circular economy and sustainable waste management practices.",
      url: "https://ellenmacarthurfoundation.org/",
      icon: Globe,
      category: "Sustainability"
    },
    {
      title: "International Solid Waste Association (ISWA)",
      description: "Global network of waste management professionals sharing knowledge and best practices worldwide.",
      url: "https://www.iswa.org/",
      icon: Globe,
      category: "Professional Networks"
    },
    {
      title: "MIT Technology Review - AI in Waste Management",
      description: "Latest research and developments in artificial intelligence applications for waste management and recycling.",
      url: "https://www.technologyreview.com/",
      icon: FileText,
      category: "AI & Technology"
    },
    {
      title: "Zero Waste International Alliance",
      description: "Resources and guidelines for implementing zero waste strategies in communities and organizations.",
      url: "https://zwia.org/",
      icon: BookOpen,
      category: "Zero Waste"
    },
    {
      title: "Recycling Today Magazine",
      description: "Industry publication focusing on recycling technologies, market trends, and business strategies.",
      url: "https://www.recyclingtoday.com/",
      icon: BookOpen,
      category: "Recycling"
    },
    {
      title: "Smart Cities World - Waste Management",
      description: "Coverage of smart city initiatives and IoT technologies in urban waste management systems.",
      url: "https://www.smartcitiesworld.net/",
      icon: Globe,
      category: "Smart Cities"
    },
  ];

  const faqs = [
    {
      question: "How does AI improve waste sorting accuracy?",
      answer: "Our AI system uses computer vision and convolutional neural networks (CNNs) to analyze waste materials in real-time. It can distinguish between different types of plastics, identify contamination, and sort materials with up to 99% accuracy - far exceeding manual sorting capabilities."
    },
    {
      question: "What are the six waste streams managed by NeuroBin?",
      answer: "The six streams are: (1) Biodegradable waste, (2) Recyclable materials, (3) Non-recyclable waste, (4) Hazardous materials, (5) Biomedical waste, and (6) E-waste/electronic components. Each stream has specialized handling and processing requirements."
    },
    {
      question: "How does the system ensure regulatory compliance?",
      answer: "Our AI automatically tracks and documents all hazardous and e-waste materials, generating audit-ready compliance reports. The system maintains detailed records of quantities, types, and disposal methods to meet all regulatory requirements."
    },
    {
      question: "Can the system integrate with existing waste management infrastructure?",
      answer: "Yes, NeuroBin is designed to integrate with existing waste collection and processing infrastructure. Our modular approach allows for gradual implementation and can work with various conveyor systems, sorting equipment, and collection vehicles."
    },
    {
      question: "What kind of cost savings can organizations expect?",
      answer: "Organizations typically see 20-30% reduction in collection costs through route optimization, 40-60% improvement in sorting efficiency, and significant savings in labor costs. The exact savings depend on current operations and implementation scope."
    },
    {
      question: "How does the route optimization work?",
      answer: "Our AI uses IoT sensors to monitor fill levels in collection points, analyzes traffic patterns, and considers factors like fuel costs and vehicle capacity to calculate the most efficient collection routes. This reduces both costs and carbon emissions."
    },
  ];

  const categories = [...new Set(externalLinks.map(link => link.category))];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Resources & <span className="bg-gradient-primary bg-clip-text text-transparent">Knowledge</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore external resources, industry insights, and frequently asked questions about intelligent waste management.
          </p>
        </div>

        {/* External Resources */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">External Resources</h2>
          
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-primary">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {externalLinks
                  .filter(link => link.category === category)
                  .map((link, index) => (
                    <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                            <link.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-2">{link.title}</h4>
                            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                              {link.description}
                            </p>
                            <Button 
                              asChild 
                              variant="outline" 
                              size="sm"
                              className="hover:bg-primary/10 hover:border-primary/50"
                            >
                              <a href={link.url} target="_blank" rel="noopener noreferrer">
                                Visit Resource <ExternalLink className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;