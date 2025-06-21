import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Code, User, Briefcase, Mail, Github, Linkedin, Instagram, FileText, ArrowRight, ArrowDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!"
    });
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold gradient-text">SHAFANA N P</h1>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Services', 'Experience', 'Contact'].map(item => <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-gray-700 hover:text-primary transition-colors">
                  {item}
                </button>)}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden tech-grid">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 float-animation">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-primary to-accent p-1 pulse-glow">
                <img src="/lovable-uploads/36012dcd-ead9-4966-bd14-ffd0e0d20244.png" alt="SHAFANA N P" className="w-full h-full rounded-full object-cover" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl mb-6 gradient-text text-orange-500 font-bold">
              SHAFANA N P
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Tech Enthusiast | IEEE Volunteer | Future Innovator
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              B.Tech IT Student at GEC Palakkad, passionate about coding, community service, and creating impactful tech solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('about')} className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                Explore My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3">
                <FileText className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  I'm SHAFANA N P, currently pursuing B.Tech in Information Technology at GEC Palakkad (Graduating in 2028). 
                  I'm an enthusiastic IEEE and NSS volunteer, passionate about coding, event organization, and community-driven tech learning.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  My journey in technology started with curiosity and has evolved into a passion for creating meaningful solutions 
                  that bridge the gap between innovation and community impact.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm">
                    <Instagram className="mr-2 h-4 w-4" />
                    Instagram
                  </Button>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-2">Education Timeline</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">B.Tech IT - GEC Palakkad</span>
                        <Badge variant="secondary">2024-2028</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">IEEE Volunteer</span>
                        <Badge variant="secondary">2022-Present</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">NSS Volunteer</span>
                        <Badge variant="secondary">2022-Present</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Code className="mr-2 h-5 w-5" />
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {['Python', 'C Programming', 'HTML/CSS', 'JavaScript', 'Git/GitHub', 'Figma'].map(skill => <Badge key={skill} variant="secondary" className="justify-center py-2">
                        {skill}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <User className="mr-2 h-5 w-5" />
                    Creative & Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {['Public Speaking', 'Event Coordination', 'Canva Design', 'Team Leadership', 'Project Management', 'Communication'].map(skill => <Badge key={skill} variant="secondary" className="justify-center py-2">
                        {skill}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 gradient-text">Services I Offer</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[{
              title: "Web Development",
              description: "Responsive websites with HTML, CSS, and JavaScript",
              icon: Code
            }, {
              title: "Presentation Design",
              description: "Professional presentations using Canva",
              icon: FileText
            }, {
              title: "Poster Design",
              description: "Eye-catching posters and graphics using Figma",
              icon: User
            }].map((service, index) => <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 gradient-text">Experience & Involvement</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            </div>
            <div className="space-y-8">
              {[{
              title: "IEEE Volunteer",
              period: "2022 - Present",
              description: "Contributing to tech workshops, paper publications, and event organization. Actively involved in promoting technical education and innovation among students.",
              icon: Briefcase
            }, {
              title: "NSS Volunteer",
              period: "2022 - Present",
              description: "Organizing social awareness camps and public initiatives. Focused on community service and making a positive impact through technology and education.",
              icon: User
            }].map((exp, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <exp.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <Badge variant="secondary">{exp.period}</Badge>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 gradient-text">Let's Connect</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
              <p className="text-gray-600 mt-4">Ready to collaborate or have a question? I'd love to hear from you!</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-gray-600">shafananp@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="h-5 w-5 text-primary" />
                    <span className="text-gray-600">github.com/shafananp</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <span className="text-gray-600">linkedin.com/in/shafananp</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Instagram className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input placeholder="Your Name" value={formData.name} onChange={e => setFormData({
                      ...formData,
                      name: e.target.value
                    })} required />
                    </div>
                    <div>
                      <Input type="email" placeholder="Your Email" value={formData.email} onChange={e => setFormData({
                      ...formData,
                      email: e.target.value
                    })} required />
                    </div>
                    <div>
                      <Textarea placeholder="Your Message" rows={4} value={formData.message} onChange={e => setFormData({
                      ...formData,
                      message: e.target.value
                    })} required />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 SHAFANA N P. Designed with passion for technology and community.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;