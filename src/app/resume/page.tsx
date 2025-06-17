'use client';

import { motion } from 'framer-motion';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-900 py-20 relative">
      {/* Enhanced Background with dynamic scrolling effect */}
      <div className="absolute inset-0 bg-gray-800 opacity-20 overflow-hidden">
        <pre className="text-xs text-green-400 whitespace-pre-wrap animate-scroll">
          {`<div>
  <h1>Resume</h1>
  <section>
    <h2>Technical Skills</h2>
    <ul>
      <li>Python, JavaScript, TypeScript</li>
      <li>Django, React.js, FastAPI</li>
      <li>Docker, AWS, GitHub</li>
    </ul>
  </section>
  <section>
    <h2>Contact Details</h2>
    <ul>
      <li>StackOverflow: Shreenidhi HD</li>
      <li>GitHub: Shreenidhi HD</li>
      <li>LinkedIn: Shreenidhi HD</li>
    </ul>
  </section>
</div>`}
        </pre>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          position: absolute;
          width: 100%;
          height: 300%;
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h1 className="text-4xl font-bold text-white mb-8">Resume</h1>

          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white mb-4">Shreenidhi HD</h2>
            <p className="text-gray-300 mb-4">Full-Stack Software Developer | Building scalable SaaS platforms with Python, FastAPI, Django, React, and cloud automation — 3.6+ years in full-stack development.</p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Technical Skills</h3>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white">Languages:</h4>
              <p className="text-gray-300">Python, JavaScript, TypeScript, HTML, CSS, PHP</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white">Frameworks & Libraries:</h4>
              <p className="text-gray-300">Django, FastAPI, Flask, React.js, Next.js, Express.js, Bootstrap, MUI, Laravel</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white">Databases & Queues:</h4>
              <p className="text-gray-300">PostgreSQL, MySQL, MongoDb, Redis, Celery, Qdrant, SQS</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white">DevOps & Cloud:</h4>
              <p className="text-gray-300">Docker, Git, GitHub, AWS, Linode, GCP (basic), Azure (basic)</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white">API & Integration:</h4>
              <p className="text-gray-300">REST APIs, GraphQL (integration), Shopify API, OpenAI API, WhatsApp Cloud API</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Contact Details</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>StackOverflow: Shreenidhi HD</li>
              <li>GitHub: Shreenidhi HD</li>
              <li>LinkedIn: Shreenidhi HD</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Experience</h3>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white">Full-Stack Developer</h4>
              <p className="text-gray-300">Company: TechCorp Solutions</p>
              <p className="text-gray-300">Duration: Jan 2022 - Present</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Developed scalable SaaS platforms using Python, FastAPI, and React.js.</li>
                <li>Implemented CI/CD pipelines and automated deployments on AWS.</li>
                <li>Optimized database queries, reducing response times by 40%.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white">Software Engineer</h4>
              <p className="text-gray-300">Company: Innovatech</p>
              <p className="text-gray-300">Duration: Aug 2019 - Dec 2021</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Designed and developed RESTful APIs for e-commerce platforms.</li>
                <li>Collaborated with cross-functional teams to deliver high-quality software.</li>
                <li>Enhanced application performance and scalability through code refactoring.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white">Junior Developer</h4>
              <p className="text-gray-300">Company: CodeCrafters</p>
              <p className="text-gray-300">Duration: Jan 2018 - Jul 2019</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Assisted in developing web applications using PHP and Laravel.</li>
                <li>Maintained and updated legacy codebases to improve performance.</li>
                <li>Collaborated with senior developers to implement new features.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white">Intern</h4>
              <p className="text-gray-300">Company: StartupX</p>
              <p className="text-gray-300">Duration: Jun 2017 - Dec 2017</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Worked on small-scale projects to gain hands-on experience in web development.</li>
                <li>Learned and applied basic principles of software engineering.</li>
                <li>Contributed to team brainstorming sessions for innovative solutions.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Certifications</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Introduction to Back-End Development (Meta)</li>
              <li>Programming in Python (Meta)</li>
              <li>Python (Basic) Certificate (HackerRank)</li>
              <li>Software Engineer Certificate (HackerRank)</li>
              <li>Agile Crash Course: Agile Project Management; Agile Delivery (Udemy)</li>
              <li>The Complete 2023 Software Testing Bootcamp (Udemy)</li>
              <li>The Complete 2023 Web Development Bootcamp (Udemy)</li>
              <li>React JS from the Beginning with Redux and React Router (Udemy)</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Freelance Work</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Built and delivered two full-stack web applications using Laravel (backend) and React.js + Chakra UI (frontend).</li>
              <li>Developed a standalone RSS feed aggregation and search system with REST APIs, allowing users to manage multiple feeds, filter content by region, and search by keywords.</li>
              <li>Integrated the RSS system into a modular platform for real-time content delivery.</li>
              <li>Handled MySQL schema design, backend API logic, frontend development, and Docker-based deployment on Linode VPS.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Personal Projects</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>HumaniPy: A Python package for simulating human-like behavior in web automation and scraping tasks.</li>
              <li>Shopify App Boilerplate: Created a reusable boilerplate for Shopify public apps with OAuth app install and store-based login/register.</li>
              <li>Telegram Bot: Developed a bot capable of downloading Instagram Reels from public URLs.</li>
              <li>LinkedIn Post Generator: AI-based content generator for LinkedIn post drafts using Gemini API.</li>
              <li>E-Commerce Platform Checker: Script that identifies if a website is built on Shopify, WooCommerce, or other platforms.</li>
              <li>SimilarWeb Data Scraper: Tool to scrape traffic and engagement data from SimilarWeb using Puppeteer.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Bachelor of Computer Application – Kuvempu University, Thirthahalli (Completed in 2021, 71%)</li>
              <li>Pre-University Course (PUC) – Karnataka Board (Completed in 2018)</li>
              <li>SSLC (Secondary School Leaving Certificate) – Karnataka Board (Completed in 2016)</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}