import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Zap, Shield, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import aiSorting from "@/assets/ai-sorting.jpg";
import smartCollection from "@/assets/smart-collection.jpg";
import analyticsDashboard from "@/assets/analytics-dashboard.jpg";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Sorting",
      description: "Computer vision and machine learning algorithms achieve 99% accuracy in waste classification and sorting.",
      image: aiSorting,
    },
    {
      icon: Zap,
      title: "Smart Collection",
      description: "IoT sensors and route optimization reduce collection costs and carbon emissions by up to 30%.",
      image: smartCollection,
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Comprehensive data insights across all six waste streams for informed decision-making.",
      image: analyticsDashboard,
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "Automated tracking and reporting for hazardous and e-waste materials ensures regulatory compliance.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Intelligent
                  <span className="block bg-gradient-primary bg-clip-text text-transparent animate-gradient">
                    Waste Management
                  </span>
                  Solutions
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Transform your waste management process with AI-powered sorting, real-time analytics, 
                  and intelligent optimization across six specialized waste streams.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  <Link to="/neurobin-ai">
                    Explore NeuroBin AI <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99%</div>
                  <div className="text-sm text-muted-foreground">Sorting Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">30%</div>
                  <div className="text-sm text-muted-foreground">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-ai-primary">6</div>
                  <div className="text-sm text-muted-foreground">Waste Streams</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-card">
                <img 
                  src={heroImage} 
                  alt="AI-powered waste management facility with advanced sorting technology"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-primary rounded-full animate-glow"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/50 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The Future of Waste Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our intelligent system combines artificial intelligence, computer vision, and IoT technology 
              to create the most advanced waste management platform available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                  {feature.image && (
                    <div className="mt-6 overflow-hidden rounded-lg">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Your Waste Management?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the future of intelligent waste management with NeuroBin's AI-powered solutions.
          </p>
          <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            <Link to="/neurobin-ai">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;