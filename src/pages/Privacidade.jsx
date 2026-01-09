import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="font-display font-black text-2xl md:text-3xl uppercase mb-4 border-b-4 border-black pb-2">
      {title}
    </h2>
    <div className="font-mono text-sm md:text-base leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

const Privacidade = () => {
  return (
    <div className="bg-white">
      {/* HEADER */}
      <div className="border-b-4 border-black bg-paper p-8 md:p-16">
        <Link to="/" className="inline-flex items-center gap-2 font-mono font-bold text-sm mb-6 hover:text-n8n-red transition-colors">
          <ArrowLeft size={16} strokeWidth={3} /> VOLTAR
        </Link>
        <h1 className="font-display font-black text-5xl md:text-7xl uppercase leading-none">
          Política de<br />
          <span className="bg-n8n-red text-white px-2">Privacidade</span>
        </h1>
        <p className="font-mono text-sm text-gray-600 mt-4">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
      </div>

      {/* CONTENT */}
      <div className="p-8 md:p-16 max-w-4xl">
        <div className="border-4 border-black bg-white p-6 md:p-10 shadow-hard">

          <Section title="1. Introdução">
            <p>
              A <strong>Pressa Digital</strong> está comprometida em proteger sua privacidade. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais quando você utiliza nosso site e serviços relacionados ao curso N8N Mastery.
            </p>
          </Section>

          <Section title="2. Informações Coletadas">
            <p>Podemos coletar as seguintes informações:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dados de identificação:</strong> nome, e-mail, telefone</li>
              <li><strong>Dados de pagamento:</strong> processados por plataformas seguras de terceiros</li>
              <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas</li>
              <li><strong>Dados de interação:</strong> progresso no curso, dúvidas enviadas</li>
            </ul>
          </Section>

          <Section title="3. Uso das Informações">
            <p>Utilizamos suas informações para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Processar sua compra e fornecer acesso ao curso</li>
              <li>Enviar comunicações sobre o curso e atualizações</li>
              <li>Fornecer suporte técnico e responder dúvidas</li>
              <li>Melhorar nossos serviços e conteúdos</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </Section>

          <Section title="4. Compartilhamento de Dados">
            <p>
              Não vendemos suas informações pessoais. Podemos compartilhar dados com:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Processadores de pagamento:</strong> para efetuar transações</li>
              <li><strong>Plataformas de hospedagem:</strong> para entrega do conteúdo</li>
              <li><strong>Autoridades legais:</strong> quando exigido por lei</li>
            </ul>
          </Section>

          <Section title="5. Cookies">
            <p>
              Utilizamos cookies para melhorar sua experiência de navegação. Cookies são pequenos arquivos armazenados em seu dispositivo que nos ajudam a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Manter você conectado à sua conta</li>
              <li>Lembrar suas preferências</li>
              <li>Analisar o tráfego do site</li>
            </ul>
            <p>Você pode desativar cookies nas configurações do seu navegador.</p>
          </Section>

          <Section title="6. Segurança">
            <p>
              Implementamos medidas técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia SSL, firewalls e controles de acesso.
            </p>
          </Section>

          <Section title="7. Seus Direitos">
            <p>Conforme a LGPD (Lei Geral de Proteção de Dados), você tem direito a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar consentimento a qualquer momento</li>
              <li>Solicitar portabilidade dos dados</li>
            </ul>
          </Section>

          <Section title="8. Retenção de Dados">
            <p>
              Mantemos suas informações pelo tempo necessário para cumprir as finalidades descritas nesta política, ou conforme exigido por lei. Dados de compra são mantidos por no mínimo 5 anos para fins fiscais.
            </p>
          </Section>

          <Section title="9. Alterações nesta Política">
            <p>
              Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças significativas por e-mail ou através de aviso em nosso site.
            </p>
          </Section>

          <Section title="10. Contato">
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
            </p>
            <div className="bg-paper border-2 border-black p-4 mt-4">
              <p><strong>Pressa Digital</strong></p>
              <p>E-mail: contato@pressadigital.com.br</p>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
};

export default Privacidade;
