'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                    About Me
                </h1>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm shadow-xl mb-8"
                >
                    <h2 className="text-3xl font-semibold mb-4 text-purple-400">Who I Am</h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        I`m a passionate developer and tech enthusiast who loves creating meaningful digital experiences. 
                        With expertise in modern web technologies, I focus on building responsive and user-friendly applications 
                        that solve real-world problems.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm shadow-xl mb-8"
                >
                    <h2 className="text-3xl font-semibold mb-4 text-purple-400">My Journey</h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        My journey in tech started with a curiosity about how things work on the web. 
                        Over the years, I`ve worked with various technologies and frameworks, always staying 
                        updated with the latest industry trends and best practices.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-semibold mb-6 text-purple-400">Connect With Me</h2>
                    <div className="flex justify-center space-x-6">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-purple-400 transition-colors"
                        >
                            <FaGithub className="text-3xl" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://twitter.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-purple-400 transition-colors"
                        >
                            <FaTwitter className="text-3xl" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-purple-400 transition-colors"
                        >
                            <FaLinkedin className="text-3xl" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href="mailto:your@email.com"
                            className="text-gray-300 hover:text-purple-400 transition-colors"
                        >
                            <MdEmail className="text-3xl" />
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default AboutPage