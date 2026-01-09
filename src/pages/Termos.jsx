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

const Termos = () => {
  return (
    <div className="bg-white">
      {/* HEADER */}
      <div className="border-b-4 border-black bg-paper p-8 md:p-16">
        <Link to="/" className="inline-flex items-center gap-2 font-mono font-bold text-sm mb-6 hover:text-n8n-red transition-colors">
          <ArrowLeft size={16} strokeWidth={3} /> VOLTAR
        </Link>
        <h1 className="font-display font-black text-5xl md:text-7xl uppercase leading-none">
          Termos de<br />
          <span className="bg-electric-cyan text-black px-2">Uso</span>
        </h1>
        <p className="font-mono text-sm text-gray-600 mt-4">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
      </div>

      {/* CONTENT */}
      <div className="p-8 md:p-16 max-w-4xl">
        <div className="border-4 border-black bg-white p-6 md:p-10 shadow-hard">

          <Section title="1. Aceitação dos Termos">
            <p>
              Ao acessar e utilizar o curso N8N Mastery oferecido pela <strong>Pressa Digital</strong>, você concorda em cumprir estes Termos de Uso. Se não concordar com qualquer parte destes termos, não utilize nossos serviços.
            </p>
          </Section>

          <Section title="2. Descrição do Serviço">
            <p>
              O N8N Mastery é um curso online de automação que inclui:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acesso a videoaulas gravadas</li>
              <li>Material complementar em formato digital</li>
              <li>Acesso à comunidade exclusiva no Discord</li>
              <li>Atualizações futuras do conteúdo</li>
            </ul>
          </Section>

          <Section title="3. Cadastro e Conta">
            <p>
              Para acessar o curso, você deve:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecer informações verdadeiras e atualizadas</li>
              <li>Manter a confidencialidade de sua senha</li>
              <li>Notificar imediatamente sobre uso não autorizado</li>
              <li>Ser responsável por todas as atividades em sua conta</li>
            </ul>
          </Section>

          <Section title="4. Licença de Uso">
            <p>
              Ao adquirir o curso, você recebe uma <strong>licença pessoal, intransferível e não-exclusiva</strong> para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Assistir às aulas para uso pessoal</li>
              <li>Baixar materiais complementares para estudo próprio</li>
              <li>Participar da comunidade de alunos</li>
            </ul>
            <div className="bg-n8n-red text-white p-4 mt-4 border-2 border-black">
              <p className="font-bold">PROIBIDO:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Compartilhar acesso com terceiros</li>
                <li>Copiar, reproduzir ou distribuir o conteúdo</li>
                <li>Gravar ou fazer download não autorizado das aulas</li>
                <li>Utilizar o conteúdo para fins comerciais</li>
              </ul>
            </div>
          </Section>

          <Section title="5. Propriedade Intelectual">
            <p>
              Todo o conteúdo do curso, incluindo mas não limitado a vídeos, textos, imagens, código-fonte, workflows e materiais didáticos, é de propriedade exclusiva da <strong>Pressa Digital</strong> e está protegido por leis de direitos autorais.
            </p>
          </Section>

          <Section title="6. Pagamento e Reembolso">
            <p><strong>Pagamento:</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>O acesso é liberado após confirmação do pagamento</li>
              <li>Preços podem ser alterados sem aviso prévio</li>
              <li>Pagamentos são processados por plataformas seguras de terceiros</li>
            </ul>
            <p className="mt-4"><strong>Garantia de 7 dias:</strong></p>
            <p>
              Oferecemos garantia incondicional de 7 dias corridos a partir da data de compra. Para solicitar reembolso, entre em contato por e-mail informando o motivo. O valor será devolvido integralmente.
            </p>
          </Section>

          <Section title="7. Acesso Vitalício">
            <p>
              O acesso ao curso é vitalício, significando que você terá acesso enquanto o curso estiver disponível em nossa plataforma. Nos comprometemos a manter o acesso por no mínimo 5 anos após a compra.
            </p>
          </Section>

          <Section title="8. Suporte">
            <p>
              O suporte é oferecido exclusivamente através da comunidade Discord e por e-mail. O tempo de resposta pode variar de acordo com a demanda. Não oferecemos suporte por telefone ou chat ao vivo.
            </p>
          </Section>

          <Section title="9. Conduta do Usuário">
            <p>Ao utilizar nossos serviços, você concorda em:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Não violar direitos de terceiros</li>
              <li>Não enviar conteúdo ofensivo ou ilegal na comunidade</li>
              <li>Não tentar acessar sistemas sem autorização</li>
              <li>Respeitar outros membros da comunidade</li>
            </ul>
            <p className="mt-4">
              O descumprimento pode resultar em suspensão ou cancelamento do acesso sem reembolso.
            </p>
          </Section>

          <Section title="10. Limitação de Responsabilidade">
            <p>
              A Pressa Digital não garante resultados específicos com o uso do curso. O sucesso depende do esforço e dedicação individual do aluno. Não nos responsabilizamos por:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Perdas ou danos indiretos</li>
              <li>Interrupções temporárias no serviço</li>
              <li>Ações de terceiros</li>
              <li>Uso indevido das informações aprendidas</li>
            </ul>
          </Section>

          <Section title="11. Modificações">
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações significativas serão comunicadas por e-mail. O uso continuado após modificações constitui aceitação dos novos termos.
            </p>
          </Section>

          <Section title="12. Legislação Aplicável">
            <p>
              Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será resolvida no foro da comarca de domicílio da Pressa Digital.
            </p>
          </Section>

          <Section title="13. Contato">
            <p>
              Para dúvidas sobre estes termos:
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

export default Termos;
