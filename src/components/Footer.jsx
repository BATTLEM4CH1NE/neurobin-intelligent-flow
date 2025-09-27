import { Link } from "react-router-dom";
import { Brain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Brain className="h-6 w-6 text-background" />
              </div>
              <span className="font-bold text-xl text-foreground">NeuroBin</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Revolutionizing waste management through artificial intelligence and advanced technology solutions. 
              Creating a sustainable future with intelligent resource optimization.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h3 className="font-semibold mb-4">Technology</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/neurobin-ai" className="text-muted-foreground hover:text-foreground transition-colors">
                  NeuroBin AI
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground">Computer Vision</span>
              </li>
              <li>
                <span className="text-muted-foreground">IoT Sensors</span>
              </li>
              <li>
                <span className="text-muted-foreground">Predictive Analytics</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm">
            © 2025 NeuroBin. All rights reserved.
          </div>
          <div className="text-muted-foreground text-sm mt-4 sm:mt-0">
            Powered by Artificial Intelligence & Sustainability
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;