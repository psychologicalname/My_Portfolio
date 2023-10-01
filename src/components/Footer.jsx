import { slideIn } from '../utils/motion';

import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdContactPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='sm:px-16 px-6 sm:pb-6 pb-4 max-w-7xl mx-auto relative z-0'>
            <motion.div
                variants={slideIn('up', 'spring', 0.2, 1)}
                className='flex flex-col sm:flex-row sm:justify-between items-center'
            >
                <div className='flex flex-col items-start gap-1 text-gray-200'>
                    <div className='flex justify-center items-center gap-2'>
                        <MdEmail className='text-md' />
                        <p className='font-light text-sm'>agrawal.pooja101@gmail.com</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <MdContactPhone className='text-md' />
                        <p className='font-light text-sm'>8384831458</p>
                    </div>
                </div>
                <div className='flex flex-col sm:items-end items-center gap-2'>
                    <div className='flex gap-2 text-xl text-gray-200 mt-4 mb-2 sm:mt-0 sm:mb-0'>
                        <Link
                            to='https://www.facebook.com/profile.php?id=100009945542529'
                            target="_blank"
                        >
                            <FaFacebook />
                        </Link>
                        <Link
                            to='https://www.instagram.com/poojaagrawal875/'
                            target="_blank"
                        >
                            <FaInstagram />
                        </Link>
                        <Link
                            to='https://www.linkedin.com/in/pooja-agrawal-155915110'
                            target="_blank"
                        >
                            <FaLinkedin />
                        </Link>
                    </div>
                    <p className='font-light text-xs text-secondary'>
                        Copyrigth &#9426; 2023. All rights reserved.
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default Footer
