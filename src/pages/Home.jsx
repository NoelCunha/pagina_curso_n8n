import React, { useState } from 'react';
import { Terminal, Zap, Database, Code, ArrowRight, X, CheckSquare, AlertTriangle, Cpu, Play, Pause, ChevronDown, ChevronUp } from 'lucide-react';

// --- COMPONENTS ---

const Section = ({ children, className = "", id = "" }) => (
  <div id={id} className={`border-b-4 border-black p-6 md:p-12 relative ${className}`}>
    {children}
  </div>
);

const Button = ({ children, variant = 'primary', className = "" }) => {
  const baseStyle = "px-6 py-3 md:px-8 md:py-4 font-mono font-bold text-lg border-4 border-black transition-all duration-100 active:translate-x-[6px] active:translate-y-[6px] active:shadow-none uppercase tracking-wider flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-n8n-red text-white shadow-hard hover:bg-red-600 hover:shadow-hard-hover hover:translate-x-[4px] hover:translate-y-[4px]",
    secondary: "bg-white text-black shadow-hard hover:bg-gray-100 hover:shadow-hard-hover hover:translate-x-[4px] hover:translate-y-[4px]",
    cyan: "bg-electric-cyan text-black shadow-hard hover:bg-cyan-300 hover:shadow-hard-hover hover:translate-x-[4px] hover:translate-y-[4px]",
    black: "bg-black text-white shadow-hard hover:bg-gray-900 hover:shadow-hard-hover hover:translate-x-[4px] hover:translate-y-[4px]"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const NodeCard = ({ title, icon: Icon, type, children }) => {
  const colors = {
    trigger: "bg-neon-yellow",
    action: "bg-white",
    logic: "bg-electric-cyan"
  };

  return (
    <div className={`border-4 border-black ${colors[type] || 'bg-white'} p-0 shadow-hard hover:-translate-y-2 transition-transform duration-200 group`}>
      <div className="bg-black text-white p-2 flex justify-between items-center">
        <span className="font-mono text-xs uppercase tracking-widest">{type} NODE</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500 border border-white"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500 border border-white"></div>
          <div className="w-2 h-2 rounded-full bg-green-500 border border-white"></div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="border-2 border-black p-2 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Icon size={24} strokeWidth={2.5} />
          </div>
          <h3 className="font-display font-black text-xl uppercase leading-none">{title}</h3>
        </div>
        <p className="font-mono text-sm leading-relaxed font-bold text-gray-800">
          {children}
        </p>
      </div>
      <div className="border-t-4 border-black p-2 bg-gray-100 font-mono text-xs flex justify-between">
        <span>ID: {Math.floor(Math.random() * 9999)}</span>
        <span className="group-hover:text-n8n-red transition-colors">EDITAR -&gt;</span>
      </div>
    </div>
  );
};

const JsonBlock = () => (
  <div className="bg-[#1e1e1e] border-4 border-black p-4 md:p-6 shadow-hard text-xs md:text-sm font-mono overflow-x-auto text-gray-300">
    <div className="flex gap-2 mb-4 border-b border-gray-700 pb-2">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
      <span className="ml-2 text-gray-500">course_structure.json</span>
    </div>
    <pre>
{`{
  "course": {
    "name": "N8N_MASTERY",
    "difficulty": "HARDCORE",
    "modules": [
      {
        "id": 1,
        "title": "Fundamentos do Caos",
        "topics": ["JSON", "Binary Data", "Execution Flow"]
      },
      {
        "id": 2,
        "title": "Lógica Avançada",
        "topics": ["Merge Nodes", "Code Node (JS)", "Error Handling"]
      },
      {
        "id": 3,
        "title": "API Warfare",
        "topics": ["Auth Headers", "Pagination", "Rate Limiting"]
      }
    ],
    "outcome": "AUTOMATION_GOD"
  }
}`}
    </pre>
  </div>
);

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-4 border-black bg-white mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <button
        className="w-full p-4 md:p-6 flex justify-between items-center text-left font-display font-black text-lg md:text-xl uppercase hover:bg-neon-yellow transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        {isOpen ? <ChevronUp strokeWidth={3} /> : <ChevronDown strokeWidth={3} />}
      </button>
      {isOpen && (
        <div className="p-4 md:p-6 border-t-4 border-black font-mono bg-paper">
          {answer}
        </div>
      )}
    </div>
  );
};

// --- HOME PAGE ---

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <header className="grid lg:grid-cols-12 border-b-4 border-black min-h-[80vh]">
        {/* Left Content */}
        <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-n8n-red via-neon-yellow to-electric-cyan"></div>

          <div className="inline-flex items-center gap-2 border-2 border-black px-3 py-1 font-mono text-xs font-bold mb-6 w-max bg-paper shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            TURMA 03 ABERTA
          </div>

          <h1 className="font-display font-black text-6xl md:text-8xl leading-[0.85] mb-8 tracking-tighter uppercase">
            Domine a<br />
            <span className="text-stroke hover:text-n8n-red transition-colors duration-300 cursor-default">Máquina</span><br />
            de <span className="bg-n8n-red text-white px-2">Automação</span>
          </h1>

          <p className="font-mono text-lg md:text-xl mb-10 max-w-xl border-l-8 border-neon-yellow pl-6 leading-relaxed">
            O curso definitivo de n8n para quem cansou de arrastar caixinhas sem entender o código por trás. <span className="bg-black text-white px-1">Zero enrolação.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="black" className="w-full sm:w-auto">
              <Zap className="w-5 h-5" /> ACESSAR AGORA
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto">
              VER EMENTA JSON
            </Button>
          </div>
        </div>

        {/* Right Visuals - The "Workflow" */}
        <div className="lg:col-span-5 bg-paper border-t-4 lg:border-t-0 lg:border-l-4 border-black p-8 flex flex-col justify-center relative overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

          {/* Floating Elements */}
          <div className="relative z-10 flex flex-col gap-8 items-center">
            {/* Node 1 */}
            <div className="w-64 bg-white border-4 border-black p-4 shadow-hard rotate-[-2deg] z-20">
              <div className="flex items-center gap-2 mb-2 border-b-2 border-black pb-2">
                <div className="bg-neon-yellow p-1 border border-black"><Zap size={14}/></div>
                <span className="font-mono font-bold text-xs">WEBHOOK_TRIGGER</span>
              </div>
              <div className="font-mono text-[10px] text-gray-500 truncate">POST /api/v1/order</div>
            </div>

            {/* Connection Line */}
            <div className="h-12 w-4 bg-black relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-electric-cyan animate-pulse"></div>
            </div>

            {/* Node 2 */}
            <div className="w-64 bg-white border-4 border-black p-4 shadow-hard rotate-[1deg] z-20">
              <div className="flex items-center gap-2 mb-2 border-b-2 border-black pb-2">
                <div className="bg-n8n-red text-white p-1 border border-black"><Code size={14}/></div>
                <span className="font-mono font-bold text-xs">PROCESS_DATA</span>
              </div>
              <div className="font-mono text-[10px] bg-gray-100 p-1">return items.map(i =&gt; ...)</div>
            </div>

            {/* Connection Line */}
            <div className="h-12 w-4 bg-black relative overflow-hidden">
               <div className="absolute bottom-0 left-0 w-full h-1/2 bg-electric-cyan animate-pulse delay-75"></div>
            </div>

            {/* Node 3 */}
            <div className="w-64 bg-white border-4 border-black p-4 shadow-hard rotate-[-1deg] z-20">
              <div className="flex items-center gap-2 mb-2 border-b-2 border-black pb-2">
                <div className="bg-blue-600 text-white p-1 border border-black"><Database size={14}/></div>
                <span className="font-mono font-bold text-xs">INSERT_DB</span>
              </div>
              <div className="font-mono text-[10px] text-green-600 font-bold">SUCCESS: 200 OK</div>
            </div>
          </div>
        </div>
      </header>

      {/* MARQUEE BANNER */}
      <div className="border-b-4 border-black bg-neon-yellow text-black overflow-hidden py-4 whitespace-nowrap rotate-[-1deg] scale-[1.02] z-20 relative shadow-lg">
        <div className="inline-block animate-marquee font-display font-black text-2xl md:text-4xl">
          JAVASCRIPT FOR AUTOMATION /// API INTEGRATION /// WEBHOOKS /// ERROR HANDLING /// SELF-HOSTED /// DOCKER /// JAVASCRIPT FOR AUTOMATION /// API INTEGRATION /// WEBHOOKS ///
        </div>
      </div>

      {/* PROBLEM SECTION */}
      <Section className="bg-n8n-dark text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-n8n-red text-white px-4 py-2 font-mono font-bold border-2 border-white mb-6 shadow-[4px_4px_0px_0px_#fff]">
              <AlertTriangle className="inline mr-2" size={18}/>
              WARNING: CONTEÚDO TÉCNICO
            </div>
            <h2 className="font-display font-black text-4xl md:text-6xl mb-6 leading-none">
              CHEGA DE <span className="text-stroke-white">GAMBIARRA</span>.
            </h2>
            <p className="font-mono text-lg text-gray-300 mb-6">
              Você conecta o Zapier no Sheets, o Sheets no Trello, e reza para não quebrar. Isso não é engenharia, é sorte.
            </p>
            <p className="font-mono text-lg text-white font-bold border-l-4 border-electric-cyan pl-4">
              Neste curso, tratamos automação como desenvolvimento de software. Estruturado. Escalável. À prova de falhas.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-electric-cyan border-4 border-white opacity-20 rotate-3"></div>
            <JsonBlock />
          </div>
        </div>
      </Section>

      {/* MODULES GRID */}
      <Section className="bg-white" id="programa">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-black pb-6">
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase">
            O Sistema
          </h2>
          <span className="font-mono font-bold bg-black text-white px-3 py-1">v2.4 UPDATED</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NodeCard title="Core Concepts" icon={Cpu} type="trigger">
            Arquitetura de nós, estrutura de dados JSON vs Binário, e como o n8n realmente pensa. Instalação Docker vs Cloud.
          </NodeCard>

          <NodeCard title="Lógica JS" icon={Code} type="logic">
            Abandone os nós limitados. Aprenda a usar o Code Node para manipular arrays, objetos e regex como um programador sênior.
          </NodeCard>

          <NodeCard title="API Master" icon={Database} type="action">
            Autenticação OAuth2, Header Auth, Digest. Como ler documentações de API e implementar qualquer serviço no HTTP Request.
          </NodeCard>

          <NodeCard title="Error Handling" icon={AlertTriangle} type="logic">
            Seu fluxo VAI falhar. Aprenda a criar rotas de erro, retentativas automáticas e notificações de debug no Slack/Discord.
          </NodeCard>

          <NodeCard title="AI Agents" icon={Zap} type="action">
            Integração com OpenAI e LangChain. Criando assistentes que leem e-mails, analisam PDFs e tomam decisões.
          </NodeCard>

          <NodeCard title="Produção" icon={CheckSquare} type="trigger">
            Boas práticas de versionamento, backup de workflows, variáveis de ambiente e segurança.
          </NodeCard>
        </div>
      </Section>

      {/* FAQ SECTION */}
      <Section className="bg-paper" id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-4xl mb-8 text-center uppercase">Perguntas Frequentes</h2>
          <Accordion
            question="Preciso saber programar?"
            answer="Ajuda, mas não é obrigatório. O curso tem um módulo inteiro de 'JavaScript para n8n' onde ensino exatamente o que você precisa para manipular dados."
          />
          <Accordion
            question="Serve para a versão Cloud ou Self-Hosted?"
            answer="Ambas. O conceito é o mesmo. Ensino a subir sua própria instância no Docker para economizar, mas tudo se aplica à versão Cloud."
          />
          <Accordion
            question="Tenho suporte?"
            answer="Sim. Temos um Discord exclusivo onde eu e outros alunos avançados trocamos blueprints e resolvemos bugs."
          />
          <Accordion
            question="O acesso é vitalício?"
            answer="Sim. Comprou, é seu. Incluindo atualizações futuras da versão 2.0."
          />
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="bg-electric-cyan border-b-0" id="buy">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-white border-4 border-black p-8 md:p-16 shadow-hard-xl rotate-1 hover:rotate-0 transition-transform duration-300">
            <h2 className="font-display font-black text-5xl md:text-7xl mb-4 uppercase">
              R$ 497,00
            </h2>
            <p className="font-mono text-xl mb-8 text-gray-600">Pagamento único. Acesso imediato.</p>

            <div className="space-y-4 mb-8 text-left max-w-md mx-auto font-mono font-bold">
              <div className="flex items-center gap-2">
                <CheckSquare className="text-n8n-red" /> <span>40+ Aulas em 4K</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckSquare className="text-n8n-red" /> <span>Biblioteca de Blueprints</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckSquare className="text-n8n-red" /> <span>Comunidade Discord</span>
              </div>
            </div>

            <Button variant="primary" className="w-full text-xl py-6 animate-pulse-fast">
              QUERO AUTOMATIZAR TUDO
            </Button>

            <p className="mt-4 font-mono text-xs text-gray-500">Garantia de 7 dias ou seu dinheiro de volta.</p>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-black rounded-full mix-blend-overlay opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-n8n-red rounded-full mix-blend-multiply opacity-20"></div>
      </Section>
    </>
  );
};

export default Home;
