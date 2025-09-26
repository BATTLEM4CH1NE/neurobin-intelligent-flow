import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Brain, Camera, Zap, Upload, FileImage, BarChart3, AlertCircle } from "lucide-react";

const NeuroBinAI = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setAnalysisResult(null);
    }
  };

  const analyzeWaste = async () => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockResults = {
        material: "PET Plastic Bottle",
        confidence: 98.5,
        category: "Recyclable",
        stream: "Stream 2 - Recyclable Materials",
        properties: {
          color: "Clear/Transparent",
          condition: "Good - Minimal contamination",
          size: "500ml bottle",
          recyclingCode: "PET #1"
        },
        recommendations: [
          "Remove cap and label if possible",
          "Rinse to remove any residue",
          "Place in recyclable container",
          "Estimated processing time: 2.3 seconds"
        ],
        environmental: {
          co2Saved: "0.75 kg CO2",
          energySaved: "1.2 kWh",
          waterSaved: "0.8 liters"
        }
      };
      
      setAnalysisResult(mockResults);
      setIsAnalyzing(false);
    }, 2000);
  };

  const features = [
    {
      icon: Camera,
      title: "Computer Vision",
      description: "Advanced neural networks analyze visual characteristics with 99% accuracy"
    },
    {
      icon: Brain,
      title: "Material Intelligence",
      description: "AI identifies material composition, contamination levels, and processing requirements"
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Instant analysis and sorting decisions in under 0.3 seconds"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecasts waste patterns and optimizes collection routes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-primary rounded-2xl animate-glow">
              <Brain className="h-12 w-12 text-background" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">NeuroBin AI</span>
            <br />Waste Analysis System
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience our cutting-edge AI waste classification system. Upload an image to see how our 
            computer vision technology identifies materials and provides intelligent sorting recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* AI Demo Section */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Upload className="h-6 w-6 text-primary" />
                AI Waste Analyzer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors duration-300">
                <FileImage className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <div className="space-y-2">
                  <p className="text-muted-foreground">Upload a waste item image for AI analysis</p>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="max-w-xs mx-auto"
                  />
                </div>
              </div>

              {selectedFile && (
                <div className="space-y-4">
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <p className="text-sm text-muted-foreground">Selected file:</p>
                    <p className="font-medium">{selectedFile.name}</p>
                  </div>
                  
                  <Button 
                    onClick={analyzeWaste}
                    disabled={isAnalyzing}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-background mr-2"></div>
                        Analyzing with AI...
                      </>
                    ) : (
                      <>
                        <Brain className="mr-2 h-4 w-4" />
                        Analyze Waste Item
                      </>
                    )}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Analysis Results */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <BarChart3 className="h-6 w-6 text-accent" />
                Analysis Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!analysisResult ? (
                <div className="text-center py-12">
                  <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Upload and analyze an image to see AI results</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{analysisResult.material}</h3>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {analysisResult.confidence}% confidence
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-muted/20 rounded-lg">
                      <p className="text-sm text-muted-foreground">Category</p>
                      <p className="font-medium text-primary">{analysisResult.category}</p>
                    </div>
                    <div className="p-3 bg-muted/20 rounded-lg">
                      <p className="text-sm text-muted-foreground">Stream</p>
                      <p className="font-medium">{analysisResult.stream}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Material Properties</h4>
                    <div className="space-y-2">
                      {Object.entries(analysisResult.properties).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm">
                          <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                          <span>{value as string}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Processing Recommendations</h4>
                    <ul className="space-y-1">
                      {analysisResult.recommendations.map((rec: string, idx: number) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-primary/10 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Environmental Impact</h4>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="text-center">
                        <p className="font-medium">{analysisResult.environmental.co2Saved}</p>
                        <p className="text-muted-foreground">CO₂ Saved</p>
                      </div>
                      <div className="text-center">
                        <p className="font-medium">{analysisResult.environmental.energySaved}</p>
                        <p className="text-muted-foreground">Energy Saved</p>
                      </div>
                      <div className="text-center">
                        <p className="font-medium">{analysisResult.environmental.waterSaved}</p>
                        <p className="text-muted-foreground">Water Saved</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">AI System Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 text-center hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mt-20">
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-center">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.2%</div>
                  <div className="text-sm text-muted-foreground">Classification Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">0.3s</div>
                  <div className="text-sm text-muted-foreground">Processing Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-ai-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Material Types Recognized</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default NeuroBinAI;