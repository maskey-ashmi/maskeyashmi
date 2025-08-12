import React, { useEffect, useState } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Download, Menu, X, Eye, Code, Palette, Users } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 100 ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-bold text-gray-800">
              Ashmi <span className="text-blue-600">Maskey</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-blue-600 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-blue-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">Contact</button>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-6 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-600 p-1 mb-6 animate-pulse">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Ashmi Maskey"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Ashmi</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              UI/UX Designer passionate about creating intuitive and beautiful digital experiences that solve real-world problems
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
            </div>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-blue-600 transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate UI/UX Designer with a keen eye for detail and a love for creating user-centered designs. With experience in both digital and print design, I specialize in transforming complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My approach combines user research, strategic thinking, and creative design to deliver exceptional digital experiences. I believe that great design is not just about how something looks, but how it works and feels for the user.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800">Location</h3>
                  <p className="text-gray-600 flex items-center gap-2"><MapPin size={16} /> Kathmandu, Nepal</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800">Experience</h3>
                  <p className="text-gray-600">3+ Years</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600 flex items-center gap-2"><Mail size={16} /> ashmi.maskey@email.com</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600 flex items-center gap-2"><Phone size={16} /> +977 98XXXXXXXX</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center group hover:shadow-lg transition-all duration-300">
                <Eye className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-800 mb-2">User Research</h3>
                <p className="text-sm text-gray-600">Understanding user needs and behaviors</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center group hover:shadow-lg transition-all duration-300">
                <Palette className="w-12 h-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-800 mb-2">Visual Design</h3>
                <p className="text-sm text-gray-600">Creating beautiful and functional interfaces</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center group hover:shadow-lg transition-all duration-300">
                <Code className="w-12 h-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-800 mb-2">Prototyping</h3>
                <p className="text-sm text-gray-600">Bringing ideas to life with interactive prototypes</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl text-center group hover:shadow-lg transition-all duration-300">
                <Users className="w-12 h-12 text-orange-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-800 mb-2">Collaboration</h3>
                <p className="text-sm text-gray-600">Working closely with teams and stakeholders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Design Tools */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Design Tools</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Figma</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Adobe XD</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Sketch</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Adobe Illustrator</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Technical Skills</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">HTML/CSS</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">JavaScript</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">React</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">WordPress</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Soft Skills</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">User Research</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Problem Solving</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Communication</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Team Collaboration</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="space-y-8">
            {/* Experience Item 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Senior UI/UX Designer</h3>
                  <p className="text-blue-600 font-semibold">TechCorp Solutions</p>
                </div>
                <span className="text-gray-500 font-medium">2022 - Present</span>
              </div>
              <p className="text-gray-600 mb-4">
                Led design initiatives for multiple web and mobile applications, conducting user research and creating intuitive user experiences. Collaborated with cross-functional teams to deliver pixel-perfect designs that improved user engagement by 40%.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">UI Design</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">UX Research</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Prototyping</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">User Testing</span>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">UI/UX Designer</h3>
                  <p className="text-blue-600 font-semibold">Digital Agency Nepal</p>
                </div>
                <span className="text-gray-500 font-medium">2020 - 2022</span>
              </div>
              <p className="text-gray-600 mb-4">
                Designed user interfaces for client websites and mobile applications. Worked closely with clients to understand their requirements and translate them into compelling visual designs that enhanced user satisfaction.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Web Design</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Mobile Design</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Client Relations</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Figma</span>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Junior Graphic Designer</h3>
                  <p className="text-blue-600 font-semibold">Creative Studio KTM</p>
                </div>
                <span className="text-gray-500 font-medium">2019 - 2020</span>
              </div>
              <p className="text-gray-600 mb-4">
                Started career focusing on print and digital graphics. Developed skills in brand identity design, marketing materials, and basic web design while learning the fundamentals of user-centered design principles.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Graphic Design</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Branding</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Print Design</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Adobe Suite</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-600 relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="E-commerce App"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">E-commerce Mobile App</h3>
                <p className="text-gray-600 mb-4">
                  Complete mobile app design for online shopping platform with intuitive navigation and seamless checkout experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">Mobile Design</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">UX Research</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">Figma</span>
                </div>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                  View Project <ExternalLink size={16} />
                </button>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-r from-green-400 to-blue-600 relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Dashboard Design"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Analytics Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  Data visualization dashboard design for business analytics with clear information hierarchy and interactive elements.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">Web Design</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">Data Viz</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">UI Design</span>
                </div>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                  View Project <ExternalLink size={16} />
                </button>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-600 relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Brand Identity"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Brand Identity Design</h3>
                <p className="text-gray-600 mb-4">
                  Complete brand identity package including logo design, color palette, typography, and brand guidelines for tech startup.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-sm">Branding</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-sm">Logo Design</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-sm">Illustrator</span>
                </div>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                  View Project <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Education & Certifications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Bachelor of Computer Science</h3>
              <p className="text-blue-600 font-semibold mb-2">Tribhuvan University</p>
              <p className="text-gray-600 mb-4">2016 - 2020</p>
              <p className="text-gray-600">
                Focused on human-computer interaction, software engineering, and design principles. Graduated with distinction.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-2">UX Design Certification</h3>
              <p className="text-blue-600 font-semibold mb-2">Google UX Design Program</p>
              <p className="text-gray-600 mb-4">2021</p>
              <p className="text-gray-600">
                Comprehensive program covering user research, wireframing, prototyping, and usability testing methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              I'm always interested in new opportunities and collaborations. Let's create something amazing together!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-blue-100">ashmi.maskey@email.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-blue-100">+977 98XXXXXXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-blue-100">Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white/40"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white/40"
                />
              </div>
              <div>
                <textarea 
                  rows={5}
                  placeholder="Your Message"
                  className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white/40 resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gray-400">
            © 2024 Ashmi Maskey. All rights reserved. Designed with ❤️ in Nepal
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;