'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 bg-gray-900" id="about">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white mb-8"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            I&apos;m a passionate Full-Stack Developer with expertise in
            building scalable web applications and automation systems. I hold a
            Bachelor of Computer Applications (BCA) degree from Kuvempu
            University, where I developed a strong foundation in programming and
            problem-solving.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            My journey into coding began with my brother, who introduced me to
            the world of programming. What started as curiosity soon turned into
            a passion. During college, I began selling projects to fellow
            students, which not only honed my skills but also gave me a taste of
            entrepreneurship. After graduation, I started my career with an
            organization where I worked on impactful projects and continued to
            grow as a developer.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            During my final year of college, I took a bold step and started
            building SqebueBooks, a cloud accounting system. Despite lacking
            knowledge and financial support, I pursued this dream passionately.
            However, I eventually joined a company and had to drop the project,
            feeling like I lost a part of myself. But I&apos;m determined to
            return to this dream soon.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            My First Attempt at Building
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            In my final year of college, I started working on SqebueBooks, a
            cloud-based accounting system. It was my first serious attempt at
            building a full product — done without any guidance, funding, or
            experience. Though I eventually paused the project after joining my
            first company, it gave me a strong foundation in backend
            architecture and product thinking early in my journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-2 mt-4"
          >
            Other interests:
            <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
              Email Domain Strategies
            </span>
            <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
              Cricket
            </span>
            <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm">
              Entrepreneurship
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
