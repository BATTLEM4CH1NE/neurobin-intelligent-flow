import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Camera, Zap, BarChart3, Shield, Cpu } from "lucide-react";
import aiSorting from "@/assets/ai-sorting.jpg";

const About = () => {
  const aiComponents = [
    {
      component: "High-Speed Scanners",
      technology: "Computer Vision (CNNs)",
      function: "Cameras and sensors capture images of the waste passing on the conveyor belt. The AI instantly identifies the material (e.g., PET plastic vs. HDPE plastic, coated cardboard vs. plain paper) with up to 99% accuracy.",
      icon: Camera,
    },
    {
      component: "Contamination Detection", 
      technology: "Predictive Analytics",
      function: "The AI monitors the quality of the sorted streams. If a Recyclable or Biodegradable stream shows a spike in contamination (e.g., too many non-recyclable wrappers), the system sends an immediate alert, allowing us to correct the issue or trace the source.",
      icon: Shield,
    },
  ];

  const streamApplications = [
    {
      stream: "All Streams (1 to 6)",
      application: "Waste Profiling & Trend Analysis", 
      benefit: "AI analyzes the volume and composition trends: \"We generated 15% more E-waste this quarter,\" or \"The Biomedical Waste peaked on Tuesdays.\"",
      icon: BarChart3,
    },
    {
      stream: "Logistics & Collection",
      application: "Route Optimization",
      benefit: "The AI uses fill-level sensors in our collection points and traffic data to calculate the most efficient truck routes, reducing collection costs and carbon emissions by up to 30%.",
      icon: Zap,
    },
    {
      stream: "Hazardous & E-waste (4 and 6)", 
      application: "Compliance & Reporting",
      benefit: "The system automatically tracks the exact type and quantity of these controlled materials, generating flawless, audit-ready compliance reports for legal disposal.",
      icon: Shield,
    },
    {
      stream: "Education & Behavior",
      application: "Source Auditing", 
      benefit: "By analyzing the composition of the general waste, the AI identifies where contamination is high (e.g., which building or floor), allowing us to launch targeted, data-driven educational campaigns.",
      icon: Brain,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">NeuroBin</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Revolutionizing waste management through artificial intelligence and advanced technology solutions.
          </p>
        </div>

        {/* Visual Demo Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visual Demo</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Watch our AI-powered waste management system in action. See how our intelligent technology 
              identifies, sorts, and optimizes waste processing with unprecedented accuracy and efficiency.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-card rounded-2xl p-8">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <video 
                  controls 
                  className="w-full h-auto"
                  poster="/videos/visual_demo_2.mp4"
                >
                  <source src="/videos/visual_demo_2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold mb-2">NeuroBin AI in Action</h3>
                <p className="text-muted-foreground">
                  Experience the future of waste management with our intelligent sorting technology
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Work Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Work</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              This is where we transition from a great waste management process to a leading-edge, intelligent system.
              Integrating Artificial Intelligence is the key to achieving unprecedented accuracy, efficiency, and real-time data insights across our six streams.
            </p>
          </div>

          <div className="bg-gradient-card rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Our Intelligent Waste Management System: The Power of AI
            </h3>
            <p className="text-muted-foreground text-center max-w-4xl mx-auto mb-8">
              We don't just sort the waste; we analyze and optimize the entire process using Artificial Intelligence and Computer Vision. 
              This transforms our central facility into a high-tech Material Intelligence Hub.
            </p>
            
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src={aiSorting} 
                alt="AI-powered waste sorting facility"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* AI in Action Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            AI in Action: Precision Sorting and Quality Control
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-4xl mx-auto">
            The core of our AI system is in the automated segregation line for streams 1 (Biodegradable), 2 (Recyclable), and 3 (Non-Recyclable).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiComponents.map((component, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <component.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{component.component}</h3>
                      <Badge variant="secondary" className="mb-4">{component.technology}</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{component.function}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* AI Across All Streams */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            AI Across All Six Streams: Data and Optimization
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-4xl mx-auto">
            The true value of our system lies in the data the AI continuously collects from all six streams:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {streamApplications.map((stream, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:border-accent/30 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <stream.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{stream.stream}</h3>
                      <Badge variant="outline" className="mb-4">{stream.application}</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{stream.benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="text-center bg-gradient-card rounded-2xl p-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-primary rounded-xl">
              <Cpu className="h-8 w-8 text-background" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-6">Why AI is Essential</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            By leveraging AI, we have moved beyond basic waste handling. We have created a dynamic, data-driven system that 
            maximizes resource recovery, guarantees regulatory compliance, and provides the real-time insights needed to achieve 
            our organizational Zero-Waste and sustainability goals.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;