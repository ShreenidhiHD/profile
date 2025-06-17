'use client';

import { FadeIn, ScaleOnHover, StaggeredFade } from './motion';
import TypeWriter from 'typewriter-effect';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const codeSnippets = [
  {
    language: 'python',
    code: `@app.post("/analyze")
async def analyze_data(data: Dict):
    result = await process_pipeline(
        data,
        use_cache=True
    )
    return {"success": True, "data": result}`
  },
  {
    language: 'typescript',
    code: `export async function getData() {
  const cache = await redis.get('key')
  if (!cache) {
    const data = await fetchAPI()
    await redis.set('key', data)
    return data
  }
  return cache
}`
  },
//   {
//     language: 'javascript',
//     code: `function calculateSum(arr) {
//   return arr.reduce((a, b) => a + b, 0);
// }
// console.log(calculateSum([1, 2, 3]));`
//   },
//   {
//     language: 'go',
//     code: `package main

// import "fmt"

// func main() {
//     fmt.Println("Hello, Go!")
// }`
//   },
//   {
//     language: 'rust',
//     code: `fn main() {
//     println!("Hello, Rust!");
// }`
//   }
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center p-4 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <StaggeredFade className="space-y-6 text-center lg:text-left">
            <FadeIn>
              <h1 className="text-6xl md:text-7xl font-bold gradient-text">
                Shreenidhi H D
              </h1>
            </FadeIn>
            
            <FadeIn>
              <div className="text-xl md:text-2xl text-gray-300 h-20">
                <TypeWriter
                  options={{
                    strings: [
                      "Backend Developer",
                      "Python • FastAPI • Django • AWS",
                      "Building scalable backend systems"
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </FadeIn>

            <ScaleOnHover>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full cursor-pointer hover:from-blue-600 hover:to-purple-700 transition-all"
              >
                Explore My Work
              </Link>
            </ScaleOnHover>
          </StaggeredFade>
        </div>

        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur rounded-lg p-6 shadow-xl"
          >
            {codeSnippets.map((snippet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                className="mb-4 last:mb-0"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">
                    {snippet.language === 'python' ? 'FastAPI Route' : snippet.language === 'typescript' ? 'TypeScript Cache' : snippet.language === 'javascript' ? 'JavaScript Utility' : snippet.language === 'go' ? 'Go Program' : 'Rust Program'}
                  </span>
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <pre className="rounded bg-gray-900/50 p-4">
                  <code className="text-sm text-gray-300 font-mono">
                    {snippet.code}
                  </code>
                </pre>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
