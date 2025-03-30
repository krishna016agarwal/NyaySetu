import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary-900 to-secondary-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 xl:col-span-1"
          >
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold text-white">NyaySetu</span>
            </div>
            <p className="text-gray-300 text-base">
              Making legal assistance affordable, accessible & AI-driven.
            </p>
            <div className="flex space-x-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-300"
              >
                <Mail className="h-5 w-5 mr-2" />
                <span>support@nyaysetu.com</span>
              </motion.div>
            </div>
          </motion.div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-sm font-semibold text-primary-400 tracking-wider uppercase">
                  Services
                </h3>
                <ul className="mt-4 space-y-4">
                  {[
                    { name: 'AI Legal Assistant', path: '/ai-bot' },
                    { name: 'Find a Lawyer', path: '/find-lawyer' },
                    { name: 'Document Analysis', path: '/document-analysis' },
                    { name: 'Case Prediction', path: '/case-prediction' },
                  ].map((item, index) => (
                    <motion.li
                      key={item.name}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={item.path}
                        className="text-base text-gray-300 hover:text-primary-400 transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 md:mt-0"
              >
                <h3 className="text-sm font-semibold text-primary-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {[
                    { name: 'About Us', path: '/about' },
                    { name: 'Contact', path: '/contact' },
                  ].map((item, index) => (
                    <motion.li
                      key={item.name}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={item.path}
                        className="text-base text-gray-300 hover:text-primary-400 transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 border-t border-gray-700 pt-8"
        >
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} NyaySetu. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;