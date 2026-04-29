'use client';

import { useEffect, useState, } from 'react';
import Image from 'next/image';
import pablo from './assets/image/pb.jpg';

const lines = [
  "CRIANDO",
  " PRODUTOS",
  "  QUE UNEM",
  "   TECNOLOGIAS",
  "    A NECESSIDADES",
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
    { text: '> react, next, node, rn', isCommand: false },
    { text: '$ experience', isCommand: true },
    { text: '> web & mobile dev', isCommand: false },
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
    <div className="hidden sm:flex flex-col w-96 mr-10 border border-purple-900 bg-black bg-opacity-60 font-mono">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-purple-900">
        <span className="w-2 h-2 rounded-full bg-red-600" />
        <span className="w-2 h-2 rounded-full bg-yellow-600" />
        <span className="w-2 h-2 rounded-full bg-green-600" />
        <span className="ml-2 text-[10px] text-purple-700 tracking-widest">terminal — pablo@duraes</span>
      </div>

      <div className="flex flex-col gap-1 p-4 text-[11px] tracking-wider min-h-48">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <span
            key={i}
            className={line.isCommand ? 'text-purple-400' : 'text-gray-400'}
          >
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
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.8) 2px, rgba(255,255,255,0.8) 4px)',
        }}
      />
    </div>
  );
}

function NoiseOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 opacity-[0.04]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px',
      }}
    />
  );
}

const navLinks = [
  { label: 'CONTATO', href: 'https://twitter.com/pabloduraes' },
  { label: 'GMAIL', href: 'mailto:seuemail@gmail.com' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/pablo-dur%C3%A3es-781421320/' },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <ScanLine />
      <NoiseOverlay />

      <div
        className="flex flex-col min-h-screen px-10 text-white relative"
        style={{ background: 'linear-gradient(135deg, #000000 40%, #1a0030 70%, #2d0060 100%)' }}
      >
        {/* Linhas decorativas laterais */}
        <div className="fixed left-6 top-0 bottom-0 w-px bg-purple-800 opacity-40" />
        <div className="fixed right-6 top-0 bottom-0 w-px bg-purple-800 opacity-20" />

        {/* Numeração estilo terminal */}
        <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-8 opacity-20 text-[10px] text-purple-400 select-none">
          {['01', '02', '03', '04', '05', '06', '07'].map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>

        {/* Header */}
        <div
          className="grid grid-cols-3 items-center w-full mt-8 pb-4 border-b border-purple-900"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(-16px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div className="flex justify-start">
            <h1 className="text-sm font-light tracking-[0.3em] text-purple-300">
              PABLO DURÃES.
            </h1>
          </div>

          <div className="flex justify-center">
            <h1 className="text-sm font-light tracking-[0.3em]">
              <GlitchText text="DEVELOPER" />
            </h1>
          </div>

          <nav className="flex justify-end">
            <ul className="flex flex-row gap-6 text-xs tracking-widest">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-400 group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Tag terminal */}
        <div
          className="mt-10 ml-1"
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.8s ease 0.4s',
          }}
        >
          <span className="text-[10px] text-purple-500 tracking-[0.4em]">// BIO_INIT.exe</span>
        </div>

        {/* Texto principal com imagem à direita */}
        <div
          className="flex flex-1 items-center ml-1 gap-8"
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.8s ease 0.6s',
          }}
        >
          <div className="flex-1">
            <p className="text-4xl leading-10 tracking-widest text-gray-200 ">
              <TypewriterText text={fullText} />
            </p>
          </div>

          <FakeTerminal />
        </div>


        <div
          className="flex justify-between items-center py-4 border-t border-purple-900 text-[10px] text-purple-700 tracking-widest"
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.8s ease 1s',
          }}
        >
          <span>SYS://PORTFOLIO_v1.0</span>
          <span className="animate-pulse">● ONLINE</span>
          <span>2026</span>
        </div>
      </div>
      
      <div
      className="flex flex-col min-h-screen px-10 text-white font-mono relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(410deg, #000000 40%, #1a0030 70%, #2d0060 100%)' }}
    >
      <div className="fixed left-6 top-0 bottom-0 w-px bg-purple-800 opacity-40" />
      <div className="fixed right-6 top-0 bottom-0 w-px bg-purple-800 opacity-20" />

      <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-8 opacity-20 text-[10px] text-purple-400 select-none">
          {['01', '02', '03', '04', '05', '06', '07'].map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>

      <span className="text-[10px] text-purple-500 tracking-[0.4em] mb-10">// PROJECTS_INIT.exe</span>

      <h1 className='text-purple-500 tracking-[0.4em] text-[15px] ml-auto mr-auto'>PRINCIPAIS PROJETOS</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mr-auto ml-auto">
        {/* Card de projeto */}
        <div className="border border-purple-900 p-6 hover:border-purple-500 transition-colors duration-300 group">
          <span className="text-[10px] text-purple-500 tracking-widest">01_</span>
          <h2 className="text-sm tracking-widest mt-2 mb-3 group-hover:text-purple-300 transition-colors">NICE APP</h2>
          <p className="text-xs text-gray-500 leading-6 tracking-wider text-justify">APLICATIVO MOBILE EM REACT NATIVE FOCADO EM PSICOTERAPIA CORPORATIVA, QUE PERMITE ÀS EMPRESAS ACOMPANHAR O BEM-ESTAR PSICOLÓGICO DOS COLABORADORES POR MEIO DE TESTES E ESCALAS.</p>
          <div className="flex gap-3 mt-4">
            <span className="text-[10px] text-purple-700 border border-purple-900 px-2 py-1">REACT NATIVE</span>
            <span className="text-[10px] text-purple-700 border border-purple-900 px-2 py-1">TYPESCRIPT</span>
            <span className="text-[10px] text-purple-700 border border-purple-900 px-2 py-1">STRIPE</span>
            <span className="text-[10px] text-purple-700 border border-purple-900 px-2 py-1">TRPC</span>
          </div>
          <a href="https://www.linkedin.com/posts/pablo-dur%C3%A3es-781421320_programaaexao-projeto-reactnative-ugcPost-7434066766345134080-incI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFE4XREBPVoyy5CnRwmLSqp3m5iJBTVfQuE" target="_blank"
                    rel="noopener noreferrer"  className="block mt-4 text-[10px] text-gray-600 hover:text-purple-400 tracking-widest transition-colors">
            VER PROJETO →
          </a>
        </div>
        <div className="border border-purple-900 p-6 hover:border-purple-500 transition-colors duration-300 group">
          <span className="text-[10px] text-purple-500 tracking-widest">02_</span>
          <h2 className="text-sm tracking-widest mt-2 mb-3 group-hover:text-purple-300 transition-colors">QUICK TAG</h2>
          <p className="text-xs text-gray-500 leading-6 tracking-wider text-justify">SOLUÇÃO INTELIGENTE PARA CRIAÇÃO/GESTÃO DE ETIQUETAS E INFORMAÇÕES DE PRODUTOS, QUE AUTOMATIZA PROCESSOS, REDUZ ERROS E AUMENTA A EFICIÊNCIA OPERACIONAL.</p>
          <div className="flex gap-3 mt-4">
            <span className="text-[10px] text-purple-700 border border-purple-900 px-2 py-1">REACT</span>
            <span className="text-[10px] text-purple-700 border border-purple-900 px-2 py-1">NEXT</span>
            <span className="text-[10px] text-purple-700 border border-purple-900 px-2 py-1">TYPESCRIPT</span>
            <span className="text-[10px] text-purple-700 border border-purple-900 px-2 py-1">CLERK</span>
          </div>
          <a href="https://www.quicktag.com.br/" target="_blank"
                    rel="noopener noreferrer" className="block mt-4 text-[10px] text-gray-600 hover:text-purple-400 tracking-widest transition-colors">
            VER PROJETO →
          </a>
        </div>
        {/* <div className="border border-purple-900 p-6 hover:border-purple-500 transition-colors duration-300 group">
          <span className="text-[10px] text-purple-500 tracking-widest">03_</span>
          <h2 className="text-sm tracking-widest mt-2 mb-3 group-hover:text-purple-300 transition-colors">NOME DO PROJETO</h2>
          <p className="text-xs text-gray-500 leading-6 tracking-wider">Descrição curta do projeto aqui.</p>
          <div className="flex gap-3 mt-4">
            <span className="text-[10px] text-purple-700 border border-purple-900 px-2 py-1">REACT</span>
            <span className="text-[10px] text-purple-700 border border-purple-900 px-2 py-1">NODE</span>
          </div>
          <a href="#" className="block mt-4 text-[10px] text-gray-600 hover:text-purple-400 tracking-widest transition-colors">
            VER PROJETO →
          </a>
        </div>
        <div className="border border-purple-900 p-6 hover:border-purple-500 transition-colors duration-300 group">
          <span className="text-[10px] text-purple-500 tracking-widest">04_</span>
          <h2 className="text-sm tracking-widest mt-2 mb-3 group-hover:text-purple-300 transition-colors">NOME DO PROJETO</h2>
          <p className="text-xs text-gray-500 leading-6 tracking-wider">Descrição curta do projeto aqui.</p>
          <div className="flex gap-3 mt-4">
            <span className="text-[10px] text-purple-700 border border-purple-900 px-2 py-1">REACT</span>
            <span className="text-[10px] text-purple-700 border border-purple-900 px-2 py-1">NODE</span>
          </div>
          <a href="#" className="block mt-4 text-[10px] text-gray-600 hover:text-purple-400 tracking-widest transition-colors">
            VER PROJETO →
          </a>
        </div> */}
       

      </div>
      <div
          className="flex justify-between items-center py-4 border-t border-purple-900 text-[10px] text-purple-700 tracking-widest mt-20"
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.8s ease 1s',
          }}
        >
          <span>SYS://PORTFOLIO_v1.0</span>
          <span className="animate-pulse">● ONLINE</span>
          <span>2026</span>
        </div>
    </div>

    <div
      className="flex flex-col min-h-screen px-10 text-white font-mono relative py-20"
      style={{ background: 'linear-gradient(135deg, #000000 40%, #1a0030 70%, #2d0060 100%)' }}
    >

      <div className="fixed left-6 top-0 bottom-0 w-px bg-purple-800 opacity-40" />
      <div className="fixed right-6 top-0 bottom-0 w-px bg-purple-800 opacity-20" />

      <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-8 opacity-20 text-[10px] text-purple-400 select-none">
          {['01', '02', '03', '04', '05', '06', '07'].map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>
        
      <span className="text-[10px] text-purple-500 tracking-[0.4em] mb-10">// SKILLS_INIT.exe</span>

      <h1 className='text-purple-500 tracking-[0.4em] text-[15px] ml-auto mr-auto'>SKILLS</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl ml-auto mr-auto">
        {['REACT', 'REACT-NATIVE', 'REACT.JS', 'NEXT.JS', 'NODE', 'TYPESCRIPT', 'JAVASCRIPT', 'POSTGRES', 'GIT', 'TAILWIND', 'STRIPE', 'CLERK', 'TRPC', 'AGENTES IA', 'TANSTACK QUERY', 'UX UI'].map((skill) => (
          <div
            key={skill}
            className="border border-purple-900 px-4 py-3 text-[12px] tracking-widest text-gray-400 hover:border-purple-500 hover:text-purple-300 transition-all duration-200"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>

  </>
  );
}