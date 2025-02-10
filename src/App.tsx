import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Github, Linkedin, Mail, MapPin, ExternalLink, Code2, Database, Server, Layout, Brain, LineChart, Box, Terminal, Cpu, Cloud, Pocket, Wrench, BarChart, Layers, Laptop, Globe, Phone, Award as Certificate } from 'lucide-react';
import Typewriter from 'typewriter-effect';

function Section({ children, className = '', id = '' }: { children: React.ReactNode; className?: string; id?: string }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`min-h-screen py-12 ${className}`}
      id={id}
    >
      {children}
    </motion.section>
  );
}

function SkillIcon({ icon: Icon, label, delay }: { icon: any; label: string; delay: number }) {
  return (
    <div 
      className="skill-icon-wrapper" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="skill-icon">
        <Icon size={32} />
      </div>
      <span className="text-sm text-[#8b949e] mt-2">{label}</span>
    </div>
  );
}

function TypedHeading({ text }: { text: string }) {
  return (
    <h2 className="text-3xl font-bold mb-8 text-white border-b border-[#30363d] pb-3">
      <Typewriter
        options={{
          strings: [text],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 50,
          pauseFor: 2000,
        }}
      />
    </h2>
  );
}

function ProjectCard({ title, description, technologies, github = "#", demo = "" }) {
  return (
    <motion.div 
      className="github-section hover:border-[#58a6ff]/30"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
        <Github size={20} className="text-[#58a6ff]" />
        {title}
      </h3>
      <p className="mb-4 text-[#8b949e]">{description}</p>
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-[#58a6ff] mb-2">Technologies</h4>
        <p className="text-[#8b949e]">{technologies}</p>
      </div>
      <div className="flex gap-4">
        <a href={github} target="_blank" rel="noopener noreferrer" className="github-link flex items-center gap-1">
          <Github size={16} /> Code
        </a>
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="github-link flex items-center gap-1">
            <ExternalLink size={16} /> Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

function CertificationCard({ provider, title, grade = null }) {
  return (
    <motion.div 
      className="certification-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h4 className="text-white font-semibold">{title}</h4>
      {grade && <p className="text-[#58a6ff] text-sm">Grade Achieved: {grade}</p>}
    </motion.div>
  );
}

function CertificationGroup({ provider, icon: Icon, certifications }) {
  return (
    <motion.div 
      className="github-section"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
        <Icon className="text-[#58a6ff]" />
        {provider}
      </h3>
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <CertificationCard 
            key={index}
            title={cert.title}
            grade={cert.grade}
          />
        ))}
      </div>
    </motion.div>
  );
}

function App() {
  return (
    <div className="bg-gradient-to-b from-[#0a192f] to-[#0d1117]">
      {/* Hero Section */}
      <Section className="flex items-center justify-center" id="home">
        <div className="container mx-auto px-4 text-center">
          <div className="text-5xl font-bold mb-8 text-white">
            <Typewriter
              options={{
                strings: ['Welcome to My Portfolio!'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 50,
                pauseFor: 2000,
              }}
            />
          </div>
          <div className="text-xl text-[#8b949e] max-w-3xl mx-auto">
            I'm Amit, an aspiring Software Developer, Machine Learning Engineer and Data Scientist with a passion for solving complex problems using data, artificial intelligence, and innovative technologies.
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <a href="https://github.com/AmitSingh2903" className="github-button">
              <Github size={20} /> GitHub
            </a>
            <a href="https://drive.google.com/file/d/11es4jVuVkGXxyZ7aZGk0rMF5QM3fSURL/view" download className="github-button bg-[#1f6feb] hover:bg-[#388bfd]">
              <Download size={20} /> Resume
            </a>
            <a href="linkedin.com/in/amitsingh2903" className="github-button bg-[#1f6feb] hover:bg-[#388bfd]">
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section className="container mx-auto px-4" id="skills">
        <TypedHeading text="Skills" />
        <div className="grid gap-6">
          <div className="github-section">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
              <Code2 className="text-[#58a6ff]" /> Programming Languages
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
              <SkillIcon icon={Terminal} label="Python" delay={0.1} />
              <SkillIcon icon={Code2} label="C++" delay={0.2} />
              <SkillIcon icon={Database} label="SQL" delay={0.3} />
              <SkillIcon icon={BarChart} label="R" delay={0.4} />
              <SkillIcon icon={Layout} label="JavaScript" delay={0.5} />
            </div>
          </div>

          <div className="github-section">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
              <Globe className="text-[#58a6ff]" /> Web Development
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
              <SkillIcon icon={Layout} label="React.js" delay={0.6} />
              <SkillIcon icon={Server} label="Node.js" delay={0.7} />
              <SkillIcon icon={Server} label="Express.js" delay={0.8} />
              <SkillIcon icon={Layout} label="Next.js" delay={0.9} />
              <SkillIcon icon={Layout} label="Tailwind" delay={1.0} />
            </div>
          </div>

          <div className="github-section">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
              <Brain className="text-[#58a6ff]" /> Data Science Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <SkillIcon icon={Box} label="NumPy" delay={1.1} />
              <SkillIcon icon={LineChart} label="Pandas" delay={1.2} />
              <SkillIcon icon={BarChart} label="Matplotlib" delay={1.3} />
              <SkillIcon icon={LineChart} label="Power BI" delay={1.4} />
            </div>
          </div>

          <div className="github-section">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
              <Brain className="text-[#58a6ff]" /> AI/ML Frameworks
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <SkillIcon icon={Brain} label="TensorFlow" delay={1.5} />
              <SkillIcon icon={Brain} label="PyTorch" delay={1.6} />
              <SkillIcon icon={Server} label="Flask" delay={1.7} />
            </div>
          </div>

          <div className="github-section">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
              <Cloud className="text-[#58a6ff]" /> Cloud Platforms
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <SkillIcon icon={Cloud} label="Google Cloud" delay={1.8} />
              <SkillIcon icon={Cloud} label="AWS" delay={1.9} />
              <SkillIcon icon={Cloud} label="Azure" delay={2.0} />
            </div>
          </div>

          <div className="github-section">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
              <Wrench className="text-[#58a6ff]" /> DevOps Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <SkillIcon icon={Pocket} label="Docker" delay={2.1} />
              <SkillIcon icon={Layers} label="Kubernetes" delay={2.2} />
              <SkillIcon icon={Github} label="CI/CD" delay={2.3} />
            </div>
          </div>

          <div className="github-section">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
              <Database className="text-[#58a6ff]" /> Big Data & Others
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <SkillIcon icon={Database} label="Apache Kafka" delay={2.4} />
              <SkillIcon icon={Database} label="Hadoop" delay={2.5} />
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section className="container mx-auto px-4" id="experience">
        <TypedHeading text="Work Experience" />
        <div className="space-y-8">
          {/* Remote Work - Most Recent */}
          <div className="github-section transform hover:scale-[1.02] transition-all">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
              <Laptop className="text-[#58a6ff]" /> Current Position
            </h3>
            <div className="experience-card">
              <h4 className="text-white font-semibold text-lg">AI Software Engineer</h4>
              <p className="text-[#58a6ff]">Outlier AI • Remote</p>
              <p className="text-sm text-[#8b949e] mb-3">September 2024 - Present</p>
              <ul className="list-disc list-inside text-[#8b949e] space-y-2 ml-4">
                <li>Leading LLM fine-tuning initiatives and prompt engineering for Scale AI's advanced language models</li>
                <li>Developing and optimizing training data pipelines for multiple AI projects including extension_v2_tool-log and maintenance_insect</li>
                <li>Implementing sophisticated prompt generation systems and response validation frameworks</li>
                <li>Collaborating with cross-functional teams to enhance model performance and data quality</li>
              </ul>
            </div>
          </div>

          {/* Virtual Experience Programs */}
          <div className="github-section transform hover:scale-[1.02] transition-all">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
              <Globe className="text-[#58a6ff]" /> Virtual Experience Programs
            </h3>
            <div className="space-y-8">
              {/* BCG GenAI */}
              <div className="experience-card">
                <h4 className="text-white font-semibold text-lg">GenAI Intern</h4>
                <p className="text-[#58a6ff]">Boston Consulting Group (BCG)</p>
                <p className="text-sm text-[#8b949e] mb-3">October 2024</p>
                <ul className="list-disc list-inside text-[#8b949e] space-y-2 ml-4">
                  <li>Developed an AI-powered financial analysis chatbot for processing SEC filings</li>
                  <li>Implemented NLP techniques for financial data extraction and analysis</li>
                  <li>Created user-friendly interfaces for financial insights presentation</li>
                </ul>
              </div>

              {/* Goldman Sachs */}
              <div className="experience-card">
                <h4 className="text-white font-semibold text-lg">Software Engineering Virtual Program</h4>
                <p className="text-[#58a6ff]">Goldman Sachs</p>
                <p className="text-sm text-[#8b949e] mb-3">September 2024</p>
                <ul className="list-disc list-inside text-[#8b949e] space-y-2 ml-4">
                  <li>Analyzed password security systems using advanced cracking techniques</li>
                  <li>Recommended security improvements for enterprise authentication</li>
                  <li>Documented implementation strategies for modern cryptographic standards</li>
                </ul>
              </div>

              {/* British Airways */}
              <div className="experience-card">
                <h4 className="text-white font-semibold text-lg">Data Science Virtual Experience</h4>
                <p className="text-[#58a6ff]">British Airways</p>
                <p className="text-sm text-[#8b949e] mb-3">August 2024</p>
                <ul className="list-disc list-inside text-[#8b949e] space-y-2 ml-4">
                  <li>Created predictive models for customer behavior analysis</li>
                  <li>Developed web scraping solutions for customer review analysis</li>
                  <li>Generated actionable insights for customer experience improvement</li>
                </ul>
              </div>

              {/* KPMG */}
              <div className="experience-card">
                <h4 className="text-white font-semibold text-lg">Data Analytics Virtual Internship</h4>
                <p className="text-[#58a6ff]">KPMG Australia</p>
                <p className="text-sm text-[#8b949e] mb-3">August 2022</p>
                <ul className="list-disc list-inside text-[#8b949e] space-y-2 ml-4">
                  <li>Built customer segmentation models using advanced analytics</li>
                  <li>Designed interactive dashboards for data visualization</li>
                  <li>Implemented comprehensive data quality frameworks</li>
                </ul>
              </div>

              {/* AWS */}
              <div className="experience-card">
                <h4 className="text-white font-semibold text-lg">Solutions Architecture Virtual Program</h4>
                <p className="text-[#58a6ff]">Amazon Web Services</p>
                <p className="text-sm text-[#8b949e] mb-3">May 2022</p>
                <ul className="list-disc list-inside text-[#8b949e] space-y-2 ml-4">
                  <li>Designed scalable cloud solutions using AWS services</li>
                  <li>Developed cost optimization strategies</li>
                  <li>Created detailed technical documentation</li>
                </ul>
              </div>

              {/* Accenture */}
              <div className="experience-card">
                <h4 className="text-white font-semibold text-lg">Data Analytics Virtual Experience</h4>
                <p className="text-[#58a6ff]">Accenture North America</p>
                <p className="text-sm text-[#8b949e] mb-3">May 2022</p>
                <ul className="list-disc list-inside text-[#8b949e] space-y-2 ml-4">
                  <li>Analyzed social media content performance metrics</li>
                  <li>Created automated data processing pipelines</li>
                  <li>Developed strategic insights presentations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section className="container mx-auto px-4" id="projects">
        <TypedHeading text="Projects" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* AI & Machine Learning Projects */}
          <ProjectCard
            title="InstanceFuse"
            description="Advanced object segmentation system using deep learning techniques for precise object detection and boundary identification in complex images."
            technologies="Python, PyTorch, OpenCV, TensorFlow"
            github="https://github.com/AmitSingh2903/InstanceFuse"
          />
          <ProjectCard
            title="AnimateAI"
            description="Full-stack application leveraging DALL·E API for AI image generation. Features user galleries, prompt management, and image editing capabilities."
            technologies="React, Node.js, DALL·E API, MongoDB"
            github="https://github.com/AmitSingh2903/Animate-AI"
            demo="https://animate-ai-gamma.vercel.app/"
          />
          <ProjectCard
            title="Autodrive AI"
            description="Autonomous driving project focusing on real-time object detection, path planning, and decision making using deep learning models."
            technologies="Python, TensorFlow, Computer Vision, ROS"
            github="https://github.com/AmitSingh2903/AutoDrive-AI"
          />
          <ProjectCard
            title="CovidXNet"
            description="Deep learning system for COVID-19 detection from X-ray images, achieving high accuracy in early diagnosis support."
            technologies="Python, Deep Learning, Medical Imaging, CNN"
            github="https://github.com/AmitSingh2903/CovidXNet"
          />
          <ProjectCard
            title="Fish Species Prediction"
            description="CNN-based classification system for identifying fish species from images, with high accuracy across multiple species."
            technologies="Python, TensorFlow, CNN, Data Augmentation"
            github="https://github.com/AmitSingh2903/Fish-Species-Prediction-CNN"
          />
          <ProjectCard
            title="Stars and Galaxies Prediction"
            description="Machine learning project for astronomical classification, focusing on exoplanet detection and celestial object identification."
            technologies="Python, Scikit-learn, Keras, Astronomical Data"
            github="https://github.com/AmitSingh2903/Stars-and-Galaxies-Prediction"
          />

          {/* Data Science & Analytics Projects */}
          <ProjectCard
            title="ETL Data Engineering"
            description="Robust ETL system for processing online transactions, featuring real-time data processing and automated error handling."
            technologies="Python, Apache Airflow, SQL, AWS"
            github="https://github.com/AmitSingh2903/ETL-Data-Engineering"
          />
          <ProjectCard
            title="Alexa Reviews Analysis"
            description="Sentiment analysis system for Amazon Alexa reviews achieving 94% accuracy using hybrid ML approach."
            technologies="Python, NLP, Scikit-learn, NLTK"
            github="https://github.com/AmitSingh2903/Alexa-Reviews-Sentiment-Analysis"
          />
          <ProjectCard
            title="EDA Air Pollutant Emission"
            description="Analysis of coronal plasma temperature distribution using CNN, processing complex astronomical data."
            technologies="Python, Deep Learning, Scientific Computing"
            github="https://github.com/AmitSingh2903/EDA-Air-Pollutant-Emission"
          />
          <ProjectCard
            title="Spotify 2022 Analysis"
            description="Comprehensive analysis of Spotify's 2022 dataset including clustering, trend analysis, and interactive visualizations."
            technologies="Python, Pandas, Scikit-learn, Plotly"
            github="https://github.com/AmitSingh2903/Spotify"
          />
          <ProjectCard
            title="Hunting Exoplanets"
            description="ML-based system for monitoring and forecasting wildfire-related weather events using satellite data."
            technologies="Python, ML, Satellite Data Processing"
            github="https://github.com/AmitSingh2903/Hunting-Exoplanets"
          />

          {/* Web Development Projects */}
          <ProjectCard
            title="Google Drive Clone"
            description="Full-stack application replicating core Google Drive features including file upload, sharing, and real-time collaboration."
            technologies="React, Firebase, Cloud Storage, Node.js"
            github="https://github.com/AmitSingh2903/Google-Drive-Clone"
          />
          <ProjectCard
            title="Apple.in Clone"
            description="Pixel-perfect recreation of Apple's Indian website with full responsiveness and animations."
            technologies="React, Supabase, Tailwind CSS, Framer Motion"
            github="https://github.com/AmitSingh2903/Apple.in-Clone"
          />
          <ProjectCard
            title="PDF Co-Viewer"
            description="Synchronized PDF viewer application with admin controls for collaborative presentation sessions."
            technologies="React, WebSocket, Node.js, PDF.js"
            github="https://github.com/AmitSingh2903/PDF-Co-Viewer"
          />
        </div>
      </Section>

      {/* Education Section */}
      <Section className="container mx-auto px-4 py-8" id="education">
        <TypedHeading text="Education" />
        <div className="github-section">
          <div className="flex items-start gap-4">
            <MapPin className="flex-shrink-0 mt-1 text-[#58a6ff]" />
            <div>
              <h3 className="text-xl font-semibold text-white">Vellore Institute of Technology</h3>
              <p className="text-[#58a6ff] font-medium">Integrated M-Tech in CSE (Data Science)</p>
              <p className="text-[#8b949e]">9th Semester • CGPA: 8.01/10</p>
              <div className="mt-4 space-y-2 text-[#8b949e]">
                <p>• Specializing in Data Science and Artificial Intelligence</p>
                <p>• Key coursework: Machine Learning, Deep Learning, Big Data Analytics, Cloud Computing</p>
                <p>• Research focus on ML applications in real-world problem-solving</p>
                <p>• Participated in multiple hackathons and coding competitions</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Certifications Section */}
      <Section className="container mx-auto px-4" id="certifications">
        <TypedHeading text="Certifications" />
        <div className="space-y-6">
          <CertificationGroup
            provider="Google Certifications"
            icon={Cloud}
            certifications={[
              { title: "Google Professional Data Analyst Certificate" },
              { title: "Google Cloud Certified - Cloud Digital Leader" },
              { title: "Foundations: Data, Data, Everywhere", grade: "88.40%" },
              { title: "Ask Questions to Make Data-Driven Decisions", grade: "91.62%" },
              { title: "Prepare Data for Exploration", grade: "94.15%" },
              { title: "Process Data from Dirty to Clean", grade: "86.23%" },
              { title: "Analyze Data to Answer Questions", grade: "86.62%" },
              { title: "Share Data Through the Art of Visualization", grade: "88.34%" },
              { title: "Google Data Analytics Capstone: Complete a Case Study", grade: "100%" },
              { title: "Data Analysis with R Programming", grade: "91.61%" },
            ]}
          />

          <CertificationGroup
            provider="IBM Certifications"
            icon={Server}
            certifications={[
              { title: "Developing AI Applications with Python and Flask", grade: "90%" },
              { title: "Introduction to Artificial Intelligence (AI)", grade: "89.72%" },
              { title: "Building AI Powered Chatbots Without Programming", grade: "91.55%" },
              { title: "Python for Data Science, AI & Development", grade: "83.03%" },
            ]}
          />

          <CertificationGroup
            provider="Johns Hopkins University Certifications"
            icon={Brain}
            certifications={[
              { title: "The Data Scientist's Toolbox", grade: "100%" },
              { title: "Getting and Cleaning Data", grade: "97%" },
              { title: "Exploratory Data Analysis", grade: "98%" },
              { title: "R Programming", grade: "89.50%" },
            ]}
          />

          <CertificationGroup
            provider="Other Notable Certifications"
            icon={Certificate}
            certifications={[
              { title: "Applied Machine Learning in Python - University of Michigan", grade: "Successfully completed" },
              { title: "Machine Learning Specialization - Stanford University", grade: "Successfully completed" },
              { title: "Structuring Machine Learning Projects - DeepLearning.AI", grade: "91.83%" },
              { title: "Business Analysis & Process Management - Coursera Project Network", grade: "83.33%" },
            ]}
          />
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="container mx-auto px-4" id="contact">
        <TypedHeading text="Get In Touch" />
        <div className="github-section max-w-md mx-auto text-center">
          <a
            href="https://drive.google.com/file/d/11es4jVuVkGXxyZ7aZGk0rMF5QM3fSURL/view"
            download
            className="github-button mb-8 w-full justify-center"
          >
            <Download size={20} />
            Download Resume
          </a>
          <div className="grid gap-4">
            <a href="mailto:amitsingh290302@gmail.com" className="github-link flex items-center justify-center gap-2 text-lg">
              <Mail /> amitsingh290302@gmail.com
            </a>
            <a href="tel:+917999071123" className="github-link flex items-center justify-center gap-2 text-lg">
              <Phone /> +91 7999071123
            </a>
            <a href="https://www.linkedin.com/in/amitsingh2903/" className="github-link flex items-center justify-center gap-2 text-lg">
              <Linkedin /> LinkedIn Profile
            </a>
            <a href="https://github.com/AmitSingh2903" className="github-link flex items-center justify-center gap-2 text-lg">
              <Github /> GitHub Profile
            </a>
          </div>
        </div>
      </Section>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0a192f]/80 backdrop-blur-sm border-b border-[#30363d] z-50">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-1 py-4">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;