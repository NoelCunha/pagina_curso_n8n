import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 md:p-12 border-t-4 border-black">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h4 className="font-display font-black text-3xl text-white mb-2">N8N_MASTERY<span className="text-n8n-red">.</span></h4>
          <p className="font-mono text-sm text-gray-500">
            Automação sem limites.
          </p>
        </div>
        <div className="flex gap-6 font-mono text-sm font-bold">
          <Link to="/termos" className="hover:text-n8n-red hover:underline decoration-4 underline-offset-4">TERMOS</Link>
          <Link to="/privacidade" className="hover:text-n8n-red hover:underline decoration-4 underline-offset-4">PRIVACIDADE</Link>
          <a href="#" className="hover:text-n8n-red hover:underline decoration-4 underline-offset-4">TWITTER</a>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t-2 border-gray-800 text-center font-mono text-xs text-gray-600">
        &copy; {new Date().getFullYear()} PRESSA DIGITAL. TODOS OS DIREITOS RESERVADOS.
      </div>
    </footer>
  );
};

export default Footer;
