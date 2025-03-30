import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative p-6 bg-gradient-to-br from-white to-primary-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-xl" />
      <div className="relative">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-primary-500 to-secondary-500 text-white transform transition-transform duration-300 hover:scale-110">
          {icon}
        </div>
        <h3 className="mt-6 text-lg font-semibold text-gray-900 bg-gradient-to-r from-primary-700 to-secondary-700 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="mt-2 text-base text-gray-600">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;