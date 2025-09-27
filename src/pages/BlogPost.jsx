import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import aiSorting from "@/assets/ai-sorting.jpg";
import smartCollection from "@/assets/smart-collection.jpg";
import analyticsDashboard from "@/assets/analytics-dashboard.jpg";

const BlogPost = () => {
  const { id } = useParams();
  
  // This would typically come from a CMS or API
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Waste Management: Computer Vision Revolution",
      content: `
        <h2>Introduction</h2>
        <p>The waste management industry is experiencing a technological revolution. Traditional manual sorting methods, which achieve only 60-70% accuracy rates, are being rapidly replaced by AI-powered systems that can reach up to 99% accuracy. This transformation isn't just about technology—it's about creating sustainable solutions for our planet's future.</p>

        <h2>The Technology Behind the Revolution</h2>
        <p>Modern AI waste sorting systems rely on sophisticated computer vision algorithms, particularly Convolutional Neural Networks (CNNs), to analyze and classify waste materials in real-time. These systems can distinguish between different types of plastics, identify contamination levels, and even detect materials that are invisible to the human eye.</p>

        <h3>Key Technologies:</h3>
        <ul>
          <li><strong>Hyperspectral Imaging:</strong> Identifies material composition at the molecular level</li>
          <li><strong>Near-Infrared (NIR) Spectroscopy:</strong> Differentiates between plastic types</li>
          <li><strong>Machine Learning Algorithms:</strong> Continuously improve accuracy through data analysis</li>
          <li><strong>Robotic Automation:</strong> High-speed sorting at 2-4x human capability</li>
        </ul>

        <h2>Real-World Impact</h2>
        <p>Facilities implementing AI sorting systems report dramatic improvements in efficiency and profitability. A recent study showed that AI-powered facilities process 40% more material while reducing contamination rates by 85%. This translates to higher-quality recyclables and increased revenue streams.</p>

        <h2>Environmental Benefits</h2>
        <p>The environmental impact of AI waste sorting extends far beyond the facility walls. Improved sorting accuracy means more materials are successfully recycled, reducing the demand for virgin resources and decreasing landfill waste. Some facilities report diverting an additional 25-30% of materials from landfills.</p>

        <h2>Looking Ahead</h2>
        <p>As AI technology continues to evolve, we can expect even more sophisticated applications. Future systems may incorporate predictive analytics to optimize collection routes, integrate with smart city infrastructure, and provide real-time feedback to waste generators about their disposal habits.</p>

        <h2>Conclusion</h2>
        <p>The integration of AI in waste management represents more than just an efficiency improvement—it's a fundamental shift toward intelligent, sustainable resource management. As we face increasing environmental challenges, these technologies will play a crucial role in creating a circular economy and reducing our planetary footprint.</p>
      `,
      image: aiSorting,
      author: "Dr. Sarah Chen",
      date: "2025-01-15",
      category: "AI Technology",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Smart Collection Routes: How IoT Sensors Reduce Carbon Footprint by 30%",
      content: `
        <h2>The Challenge of Urban Waste Collection</h2>
        <p>Urban waste collection faces numerous challenges: unpredictable fill rates, traffic congestion, fuel costs, and environmental concerns. Traditional collection routes often operate on fixed schedules, leading to inefficiencies where trucks collect half-empty bins while others overflow between scheduled pickups.</p>

        <h2>IoT Sensors: The Game Changer</h2>
        <p>Internet of Things (IoT) sensors installed in waste containers provide real-time data on fill levels, temperature, and even waste composition. These smart sensors communicate wirelessly with central management systems, creating a comprehensive view of waste generation patterns across entire cities.</p>

        <h3>Sensor Capabilities:</h3>
        <ul>
          <li><strong>Ultrasonic Fill-Level Detection:</strong> Precise measurement of container capacity</li>
          <li><strong>Weight Sensors:</strong> Monitor load distribution and prevent overloading</li>
          <li><strong>Temperature Monitoring:</strong> Essential for organic waste management</li>
          <li><strong>Tilt Sensors:</strong> Detect container tampering or damage</li>
        </ul>

        <h2>AI-Powered Route Optimization</h2>
        <p>The real magic happens when IoT data meets artificial intelligence. Advanced algorithms analyze fill patterns, traffic data, fuel costs, and vehicle capacity to generate optimal collection routes. These systems adapt in real-time to changing conditions, weather patterns, and special events.</p>

        <h2>Environmental Impact</h2>
        <p>The environmental benefits are substantial. Cities implementing smart collection systems report:</p>
        <ul>
          <li>30% reduction in fuel consumption</li>
          <li>25% decrease in vehicle emissions</li>
          <li>40% reduction in unnecessary collection trips</li>
          <li>Improved air quality in urban areas</li>
        </ul>

        <h2>Case Study: Barcelona's Smart City Initiative</h2>
        <p>Barcelona's implementation of smart waste management has become a global model. The city installed over 20,000 smart bins equipped with sensors, resulting in a 25% reduction in collection costs and a 20% improvement in recycling rates. The system processes over 1.4 million data points daily to optimize operations.</p>

        <h2>Economic Benefits</h2>
        <p>Beyond environmental advantages, smart collection systems provide significant economic benefits. Reduced fuel costs, optimized labor allocation, and decreased vehicle maintenance create substantial savings. Many cities see ROI within 18-24 months of implementation.</p>

        <h2>Future Developments</h2>
        <p>The next generation of smart collection systems will integrate with autonomous vehicles, predictive analytics for waste generation forecasting, and citizen mobile apps for real-time reporting. These advances will further optimize efficiency while engaging communities in sustainable practices.</p>
      `,
      image: smartCollection,
      author: "Michael Rodriguez",
      date: "2025-01-10", 
      category: "IoT Solutions",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Data-Driven Insights: Transforming Waste Analytics for Zero-Waste Goals",
      content: `
        <h2>The Power of Waste Data</h2>
        <p>In the age of big data, waste management is becoming increasingly sophisticated. Every piece of waste generates data points that, when properly analyzed, reveal patterns, inefficiencies, and opportunities for improvement. Organizations pursuing zero-waste goals are discovering that data analytics is their most powerful tool.</p>

        <h2>Comprehensive Stream Analysis</h2>
        <p>Modern waste management systems track six distinct waste streams, each with unique characteristics and requirements:</p>

        <h3>Stream Categories:</h3>
        <ul>
          <li><strong>Biodegradable (Stream 1):</strong> Organic materials for composting</li>
          <li><strong>Recyclable (Stream 2):</strong> Materials that can be reprocessed</li>
          <li><strong>Non-Recyclable (Stream 3):</strong> Materials requiring specialized disposal</li>
          <li><strong>Hazardous (Stream 4):</strong> Materials requiring special handling</li>
          <li><strong>Biomedical (Stream 5):</strong> Medical waste requiring sterilization</li>
          <li><strong>E-Waste (Stream 6):</strong> Electronic components for recovery</li>
        </ul>

        <h2>Advanced Analytics Applications</h2>
        <p>AI-powered analytics platforms process millions of data points to provide actionable insights. These systems identify trends, predict future waste generation, and recommend optimization strategies tailored to specific organizational needs.</p>

        <h3>Key Analytics Capabilities:</h3>
        <ul>
          <li><strong>Trend Analysis:</strong> Seasonal patterns and growth projections</li>
          <li><strong>Contamination Tracking:</strong> Source identification for quality improvement</li>
          <li><strong>Efficiency Metrics:</strong> Processing speed and accuracy measurements</li>
          <li><strong>Cost Analysis:</strong> Financial impact of different waste strategies</li>
        </ul>

        <h2>Real-Time Dashboard Management</h2>
        <p>Modern waste management facilities operate sophisticated control centers with real-time dashboards displaying key performance indicators. These dashboards enable immediate response to issues, trend identification, and strategic decision-making based on current data.</p>

        <h2>Predictive Analytics for Proactive Management</h2>
        <p>Advanced systems use historical data and machine learning algorithms to predict future waste generation patterns. This enables proactive resource allocation, equipment maintenance scheduling, and strategic planning for seasonal variations.</p>

        <h2>Achieving Zero-Waste Objectives</h2>
        <p>Organizations using comprehensive waste analytics report significant progress toward zero-waste goals. Data-driven strategies enable precise targeting of improvement areas, measurement of progress, and identification of circular economy opportunities.</p>

        <h3>Success Metrics:</h3>
        <ul>
          <li>90%+ waste diversion from landfills</li>
          <li>50% reduction in waste generation</li>
          <li>40% improvement in recycling rates</li>
          <li>25% cost reduction through optimization</li>
        </ul>

        <h2>Integration with Sustainability Reporting</h2>
        <p>Comprehensive waste analytics support sustainability reporting requirements, providing accurate data for ESG (Environmental, Social, Governance) reporting, carbon footprint calculations, and regulatory compliance documentation.</p>

        <h2>Future of Waste Analytics</h2>
        <p>The future of waste analytics will incorporate artificial intelligence, blockchain for supply chain transparency, and integration with broader sustainability management systems. These advances will enable even more precise optimization and support global sustainability objectives.</p>
      `,
      image: analyticsDashboard,
      author: "Dr. Emma Thompson",
      date: "2025-01-05",
      category: "Analytics",
      readTime: "9 min read", 
    },
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || '1'));

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">{post.title}</h1>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative overflow-hidden rounded-2xl mb-12">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 sm:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-primary [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:first:mt-0
                       [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:mt-8 [&>h3]:mb-4
                       [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:mb-6
                       [&>ul]:text-muted-foreground [&>ul]:mb-6 [&>ul]:space-y-2
                       [&>li]:leading-relaxed
                       [&_strong]:text-foreground [&_strong]:font-semibold"
          />
        </article>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Enjoyed this article? Explore more insights on intelligent waste management.
            </p>
            <Button asChild className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <Link to="/blog">
                Read More Articles
              </Link>
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BlogPost;