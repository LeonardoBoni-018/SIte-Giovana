import SectionHeader from '../components/SectionHeader';

export default function About() {
  return (
    <section className="space-y-12">
      <SectionHeader title="Sobre Frames by Gi" subtitle="Minha história" />

      <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr] lg:items-start">
        <div className="space-y-6 rounded-[40px] border border-white/70 bg-white/90 p-10 card-shadow">
          <p className="text-sm leading-7 text-[#5c4232]">
            O Frames by Gi nasceu da paixão por transformar momentos em narrativas visuais. Como story maker, trabalho com cada cliente para criar conteúdos que ressoam com a estética e com a emoção do momento.
          </p>
          <p className="text-sm leading-7 text-[#5c4232]">
            A ideia começou quando percebi o poder de uma boa sequência de stories: ela aproxima, inspira e cria memória. Hoje, ajudo marcas e casais a contarem suas histórias com elegância e sofisticação.
          </p>
          <p className="text-sm leading-7 text-[#5c4232]">
            Minha linguagem visual investe em tons suaves, tipografia clássica e elementos orgânicos que conversam com a paleta da marca. Cada trabalho é pensado para causar impacto e gerar conexão.
          </p>
        </div>

        <div className="space-y-4 rounded-[40px] bg-sand p-10">
          <div className="rounded-3xl bg-white/80 p-6 text-[#5c4232] shadow-sm">
            <h3 className="font-semibold text-mocha">Especialidades</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7">
              <li>Identidade visual para stories</li>
              <li>Conteúdo de casamento</li>
              <li>Antes x Depois</li>
              <li>Programação de stories</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white/80 p-6 text-[#5c4232] shadow-sm">
            <h3 className="font-semibold text-mocha">Missão</h3>
            <p className="mt-3 text-sm leading-7">
              Criar narrativas visuais que valorizem a elegância do seu conteúdo e favoreçam a conexão com seu público.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
