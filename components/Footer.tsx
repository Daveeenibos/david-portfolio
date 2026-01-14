import React from 'react';
import { APP_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-600">
            <p>&copy; {new Date().getFullYear()} {APP_NAME}. ALL SYSTEMS OPERATIONAL.</p>
        </div>
    </footer>
  );
};

export default Footer;