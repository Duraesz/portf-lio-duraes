'use client';
import { useEffect, useState } from 'react';

const lines = [
  "CRIANDO",
  " PRODUTOS",
  "  QUE UNEM",
  "   TECNOLOGIAS",
  "    A NECESSIDADES.",
];
const fullText = lines.join('\n');

function FakeTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  const terminalLines = [
    { text: '$ whoami', isCommand: true },
    { text: '> pablo.duraes', isCommand: false },
    { text: '$ location', isCommand: true },
    { text: '> são paulo, br', isCommand: false },
    { text: '$ status', isCommand: true },
    { text: '> available for hire ✓', isCommand: false },
    { text: '$ skills --top', isCommand: true },
    { text: '> react, react-native, next, node,', isCommand: false },
    { text: '$ experience', isCommand: true },
    { text: '> web & mobile dev', isCommand: false },
    { text: '$ contact', isCommand: true },
    { text: '> pablosantosduraes6@gmail.com', isCommand: false },
  ];

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setVisibleLines(current);
      if (current >= terminalLines.length) clearInterval(interval);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    // sm:flex = aparece no PC | flex sm:hidden não, usamos flex em ambos mas mudamos tamanho
    <div className="flex flex-col w-full sm:w-96 sm:mr-10 border border-purple-900 bg-black bg-opacity-60 font-mono mt-6 sm:mt-0">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-purple-900">
        <span className="w-2 h-2 rounded-full bg-red-600" />
        <span className="w-2 h-2 rounded-full bg-yellow-600" />
        <span className="w-2 h-2 rounded-full bg-green-600" />
        <span className="ml-2 text-[10px] text-purple-700 tracking-widest">terminal — pablo@duraes</span>
      </div>
      <div className="flex flex-col gap-1 p-4 text-[11px] tracking-wider min-h-48">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <span key={i} className={line.isCommand ? 'text-purple-400' : 'text-gray-400'}>
            {line.text}
          </span>
        ))}
        {visibleLines < terminalLines.length && (
          <span className="animate-pulse text-purple-400">█</span>
        )}
      </div>
    </div>
  );
}

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    setDisplayed('');
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [text]);
  return (
    <span className="whitespace-pre">
      {displayed}
      <span className="animate-pulse text-purple-400">█</span>
    </span>
  );
}

function GlitchText({ text }: { text: string }) {
  const [glitching, setGlitching] = useState(false);
  useEffect(() => {
    const loop = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 150);
    }, 3000);
    return () => clearInterval(loop);
  }, []);
  return (
    <span className={`transition-all duration-75 ${glitching ? 'text-purple-400 tracking-widest skew-x-2' : ''}`}>
      {text}
    </span>
  );
}

function ScanLine() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden opacity-[0.03]">
      <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.8) 2px, rgba(255,255,255,0.8) 4px)' }} />
    </div>
  );
}

function NoiseOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px' }} />
  );
}

const navLinks = [
  { label: 'CONTATO', href: 'https://wa.me/5511944488221' },
  { label: 'GMAIL', href: 'mailto:pablosantosduraes6@gmail.com' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/pablo-dur%C3%A3es-781421320/' },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <ScanLine />
      <NoiseOverlay />

      <div className="fixed left-6 top-0 bottom-0 w-px bg-purple-800 opacity-40 z-30 hidden sm:block" />
      <div className="fixed right-6 top-0 bottom-0 w-px bg-purple-800 opacity-20 z-30 hidden sm:block" />
      <div className="fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-8 opacity-20 text-[10px] text-purple-400 select-none z-30 hidden sm:flex">
        {['01', '02', '03', '04', '05', '06', '07'].map((n) => (
          <span key={n}>{n}</span>
        ))}
      </div>

      <div
        className="flex flex-col min-h-screen px-4 sm:px-10 text-white relative"
        style={{ background: 'linear-gradient(135deg, #000000 40%, #1a0030 70%, #2d0060 100%)' }}
      >
        <div
          className="flex items-center justify-between w-full mt-6 sm:mt-8 pb-4 border-b border-purple-900 sm:grid sm:grid-cols-3"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(-16px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
        >
          <h1 className="text-xs sm:text-sm font-light tracking-[0.2em] sm:tracking-[0.3em] text-purple-300">
            PABLO DURÃES.
          </h1>

          <div className="hidden sm:flex justify-center">
            <h1 className="text-sm font-light tracking-[0.3em]">
              <GlitchText text="DEVELOPER" />
            </h1>
          </div>

          {/* Nav — no mobile só ícones/abreviações */}
          <nav className="flex justify-end">
            <ul className="flex flex-row gap-3 sm:gap-6 text-[10px] sm:text-xs tracking-widest">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="relative group text-gray-400 hover:text-white transition-colors duration-200">
                    {/* Mobile: só primeira palavra. Desktop: label completo */}
                    <span className="sm:hidden">{label === 'LINKEDIN' ? 'LI' : label === 'GMAIL' ? 'GM' : 'CT'}</span>
                    <span className="hidden sm:inline">{label}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-400 group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-6 sm:mt-10 ml-1" style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.8s ease 0.4s' }}>
          <span className="text-[10px] text-purple-500 tracking-[0.3em] sm:tracking-[0.4em]">// BIO_INIT.exe</span>
        </div>

        <div
          className="flex flex-col sm:flex-row flex-1 items-center sm:items-center ml-1 gap-4 sm:gap-8 py-6 sm:py-0"
          style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.8s ease 0.6s' }}
        >
          <div className="flex-1 w-full">
            <p className="text-2xl sm:text-4xl leading-9 sm:leading-10 tracking-widest text-gray-200 font-mono">
              <TypewriterText text={fullText} />
            </p>
          </div>

          <FakeTerminal />
        </div>

        <div
          className="flex justify-between items-center py-4 border-t border-purple-900 text-[10px] text-purple-700 tracking-widest"
          style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.8s ease 1s' }}
        >
          <span className="hidden sm:inline">SYS://PORTFOLIO_v1.0</span>
          <span className="sm:hidden">SYS://v1.0</span>
          <span className="animate-pulse">● ONLINE</span>
          <span>2026</span>
        </div>
      </div>

      <div
        className="flex flex-col min-h-screen px-4 sm:px-10 text-white font-mono relative py-16 sm:py-20"
        style={{ background: 'linear-gradient(410deg, #000000 40%, #1a0030 70%, #2d0060 100%)' }}
      >
        <span className="text-[10px] text-purple-500 tracking-[0.4em] mb-6 sm:mb-10">// PROJECTS_INIT.exe</span>
        <h1 className="text-purple-500 tracking-[0.4em] text-[13px] sm:text-[15px] mx-auto mb-6">PRINCIPAIS PROJETOS</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-4xl mx-auto mb-40">
          <div className="border border-purple-900 p-4 sm:p-6 hover:border-purple-500 transition-colors duration-300 group">
            <span className="text-[10px] text-purple-500 tracking-widest">01_</span>
            <h2 className="text-sm tracking-widest mt-2 mb-3 group-hover:text-purple-300 transition-colors">NICE APP</h2>
            <p className="text-xs text-gray-500 leading-6 tracking-wider text-justify">APLICATIVO MOBILE EM REACT NATIVE FOCADO EM PSICOTERAPIA CORPORATIVA, QUE PERMITE ÀS EMPRESAS ACOMPANHAR O BEM-ESTAR PSICOLÓGICO DOS COLABORADORES POR MEIO DE TESTES E ESCALAS.</p>
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
              {['REACT NATIVE', 'TYPESCRIPT', 'STRIPE', 'TRPC'].map(t => (
                <span key={t} className="text-[10px] text-purple-700 border border-purple-900 px-2 py-1">{t}</span>
              ))}
            </div>
            <a href="https://www.linkedin.com/posts/pablo-dur%C3%A3es-781421320_programaaexao-projeto-reactnative-ugcPost-7434066766345134080-incI" target="_blank" rel="noopener noreferrer" className="block mt-4 text-[10px] text-gray-600 hover:text-purple-400 tracking-widest transition-colors">
              VER PROJETO →
            </a>
          </div>

          <div className="border border-purple-900 p-4 sm:p-6 hover:border-purple-500 transition-colors duration-300 group">
            <span className="text-[10px] text-purple-500 tracking-widest">02_</span>
            <h2 className="text-sm tracking-widest mt-2 mb-3 group-hover:text-purple-300 transition-colors">QUICK TAG</h2>
            <p className="text-xs text-gray-500 leading-6 tracking-wider text-justify">SOLUÇÃO INTELIGENTE PARA CRIAÇÃO/GESTÃO DE ETIQUETAS E INFORMAÇÕES DE PRODUTOS, QUE AUTOMATIZA PROCESSOS, REDUZ ERROS E AUMENTA A EFICIÊNCIA OPERACIONAL.</p>
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
              {['REACT', 'NEXT', 'TYPESCRIPT', 'CLERK'].map(t => (
                <span key={t} className="text-[10px] text-purple-700 border border-purple-900 px-2 py-1">{t}</span>
              ))}
            </div>
            <a href="https://www.quicktag.com.br/" target="_blank" rel="noopener noreferrer" className="block mt-4 text-[10px] text-gray-600 hover:text-purple-400 tracking-widest transition-colors">
              VER PROJETO →
            </a>
          </div>
        </div>

        <div className="flex justify-between items-center py-4 border-t border-purple-900 text-[10px] text-purple-700 tracking-widest mt-8" // Reduzi o mt-16 para mt-8
          style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.8s ease 1s' }}>
          <span className="hidden sm:inline">SYS://PORTFOLIO_v1.0</span>
          <span className="sm:hidden">SYS://v1.0</span>
          <span className="animate-pulse">● ONLINE</span>
          <span>2026</span>
        </div>
      </div>

      <div
        className="flex flex-col px-4 sm:px-10 text-white font-mono relative py-10"
        style={{ background: 'linear-gradient(135deg, #000000 40%, #1a0030 70%, #2d0060 100%)' }}
      >
        <span className="text-[10px] text-purple-500 tracking-[0.4em] mb-6 sm:mb-10 -mt-12 sm:-mt-12">// SKILLS_INIT.exe</span>
        <h1 className="text-purple-500 tracking-[0.4em] text-[13px] sm:text-[15px] mx-auto mb-6">SKILLS</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto mb-20">
          {['REACT', 'REACT-NATIVE', 'NEXT.JS', 'NODE', 'TYPESCRIPT', 'JAVASCRIPT', 'POSTGRES', 'MONGODB', 'GIT', 'TAILWIND', 'STRIPE', 'CLERK', 'TRPC', 'AGENTES IA', 'TANSTACK QUERY', 'UX UI',].map((skill) => (
            <div key={skill} className="border border-purple-900 px-3 sm:px-4 py-3 text-[10px] sm:text-[12px] tracking-widest text-gray-400 hover:border-purple-500 hover:text-purple-300 transition-all duration-200 text-center sm:text-left">
              {skill}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center py-4 border-t border-purple-900 text-[10px] text-purple-700 tracking-widest sm:mt-20" style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.8s ease 1s' }}>
          <span className="hidden sm:inline">SYS://PORTFOLIO_v1.0</span>
          <span className="sm:hidden">SYS://v1.0</span>
          <span className="animate-pulse">● ONLINE</span>
          <span>2026</span>
        </div>

        <div className=" items-center justify-center">
          <p className="text-center text-[15px] text-purple-500 tracking-[0.4em] opacity-30 animate-pulse ">
            01000100 01010101 01010010 01000001 01000101 01010011
          </p>
        </div>

        {/* <div className="text-center">
          <h1 className="text-2xl sm:text-4xl tracking-widest text-white mb-3">COMO POSSO</h1>
          <h1 className="text-2xl sm:text-4xl tracking-widest text-purple-400">TE AJUDAR?</h1>
          <p className="text-[10px] text-gray-600 tracking-widest mt-4">
            ABERTO A PROJETOS, FREELAS E OPORTUNIDADES.
          </p>
        </div> */}

      </div>

    </>
  );
}