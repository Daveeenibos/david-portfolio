import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-neon-blue/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            READY TO COLLABORATE?
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Currently available for freelance projects and open to full-time opportunities.
            Let's build the future together.
        </p>

        <a
            href="mailto:daudputnarubun@gmail.com" 
            className="inline-block px-10 py-5 bg-transparent border border-neon-blue text-neon-blue font-mono font-bold text-lg uppercase tracking-widest hover:bg-neon-blue hover:text-black hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all duration-300 transform hover:scale-105"
        >
            Initialize Handshake
        </a>

        <div className="mt-16 flex justify-center space-x-8">
            <a href="https://wa.me/6281311401736" className="text-gray-500 hover:text-white transition-colors">WHATSAPP</a>
            <a href="https://github.com/Daveeenibos" className="text-gray-500 hover:text-white transition-colors">GITHUB</a>
            <a href="https://www.linkedin.com/in/david-jehuda-b84576287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-500 hover:text-white transition-colors">LINKEDIN</a>
            <a href="https://www.instagram.com/davidptnrbn_?igsh=cmlsamEwcjc4bGF4" className="text-gray-500 hover:text-white transition-colors">INSTAGRAM</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;