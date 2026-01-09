import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen max-w-[1600px] mx-auto border-x-4 border-black bg-grid-pattern">
      {/* NAV */}
      <nav className="flex justify-between items-center border-b-4 border-black bg-white sticky top-0 z-50">
        <Link to="/" className="p-4 md:px-8 font-display font-black text-2xl tracking-tighter bg-black text-white h-full flex items-center hover:bg-n8n-red transition-colors cursor-pointer">
          N8N_MASTERY<span className="text-electric-cyan">.</span>
        </Link>
        <div className="hidden md:flex h-full">
          <a href="/#programa" className="px-8 py-5 font-mono font-bold hover:bg-neon-yellow border-l-4 border-black h-full flex items-center">PROGRAMA</a>
          <a href="/#faq" className="px-8 py-5 font-mono font-bold hover:bg-electric-cyan border-l-4 border-black h-full flex items-center">FAQ</a>
          <a href="/#buy" className="px-8 py-5 font-mono font-bold bg-n8n-red text-white hover:bg-black border-l-4 border-black h-full flex items-center">GARANTIR VAGA</a>
        </div>
        <button className="md:hidden p-4 border-l-4 border-black bg-neon-yellow active:bg-black active:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} strokeWidth={3} /> : <div className="font-black font-mono">MENU</div>}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden border-b-4 border-black bg-neon-yellow fixed w-full z-40 left-0">
          <a href="/#programa" className="block p-6 font-black font-display text-2xl border-b-4 border-black hover:bg-white" onClick={() => setIsMenuOpen(false)}>PROGRAMA</a>
          <a href="/#faq" className="block p-6 font-black font-display text-2xl border-b-4 border-black hover:bg-white" onClick={() => setIsMenuOpen(false)}>FAQ</a>
          <a href="/#buy" className="block p-6 font-black font-display text-2xl bg-n8n-red text-white" onClick={() => setIsMenuOpen(false)}>COMPRAR</a>
        </div>
      )}

      {/* CONTENT */}
      {children}

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Layout;
