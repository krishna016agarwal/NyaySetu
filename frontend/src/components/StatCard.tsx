import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center p-6 bg-gradient-to-br from-white/10 to-transparent rounded-lg backdrop-blur-sm"
    >
      <motion.dd 
        className="text-5xl font-extrabold text-white"
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.4, delay: delay + 0.2 }}
      >
        {value}
      </motion.dd>
      <motion.dt 
        className="mt-2 text-lg font-medium text-primary-200"
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.4, delay: delay + 0.4 }}
      >
        {label}
      </motion.dt>
    </motion.div>
  );
};

export default StatCard;