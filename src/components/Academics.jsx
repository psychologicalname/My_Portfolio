import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiSolidQuoteLeft } from 'react-icons/bi';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { academics } from '../constants';

const AcademicCard = ({ index, degree, name, university, division, location }) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className='bg-black-200 px-8 py-10 rounded-3xl xs:w-[320px] w-full'
  >
    <BiSolidQuoteLeft className='text-white text-[32px]' />

    <div className='mt-12'>
      <p className='text-secondary tracking-wider text-[16px]'>
        {degree}
      </p>

      <p className='mt-1 text-white tracking-wide font-bold text-[24px]'>
        {name}
      </p>
    </div>

    <div className='mt-7'>
      <p className='text-white font-medium tracking-wider text-[16px]'>
        {university}
      </p>

      <p className='mt-1 text-white tracking-wider font-light text-[14px]'>
        {division}
      </p>

      <div className='mt-5 flex items-center justify-start gap-1 text-[14px] text-secondary'>
        <FaMapMarkerAlt />
        <p>{location}</p>
      </div>
    </div>

  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div
          variants={textVariant()}
        >
          <p className={styles.sectionSubText}>academic qualification</p>
          <h2 className={styles.sectionHeadText}>Academics.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {academics.map((academic, index) => (
          <AcademicCard
            key={academic.degree}
            index={index}
            {...academic}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, '')