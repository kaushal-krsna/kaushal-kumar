import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import ChipList from './ui/ChipList';

const MotionDiv = motion.div;
const MotionHeading = motion.h2;

const Projects = () => {
  return (
    <div className="pb-4">
      <MotionHeading
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </MotionHeading>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <MotionDiv
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
              />
            </MotionDiv>

            <MotionDiv
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={project.title}
                className="mb-4 inline-block font-semibold text-2xl hover:text-blue-200 transition-colors duration-300 cursor-pointer"
              >
                {project.title}
              </a>

              <ul className="mb-4 text-stone-400 list-disc list-inside space-y-1">
                {project.description.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>

              <ChipList items={project.technologies} />
            </MotionDiv>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
