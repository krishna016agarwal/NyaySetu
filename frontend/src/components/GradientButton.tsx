import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface GradientButtonProps {
  to: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const GradientButton: React.FC<GradientButtonProps> = ({ 
  to, 
  variant = 'primary', 
  children 
}) => {
  const gradientClasses = variant === 'primary'
    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white shadow-lg shadow-primary-500/25 hover:shadow-secondary-500/25'
    : 'bg-gradient-to-r from-white to-primary-50 hover:from-primary-50 hover:to-primary-100 text-primary-700 shadow-lg shadow-gray-200/50 hover:shadow-primary-200/50';

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="rounded-md overflow-hidden"
    >
      <Link
        to={to}
        className={`relative w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 transition-all duration-300 ${gradientClasses}`}
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      </Link>
    </motion.div>
  );
};

export default GradientButton;