import Image from "next/image";

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">SOBRE A MARCA</h1>

      <Image
        src="/imagens/shiba/about2.webp"
        alt="about"
        width={700}
        height={500}
        className="h-[300px] md:h-[400px]  w-full object-cover"
        priority
      />

      <p className="text-sm mb-6 mt-4">
        Uma marca inspirada em cabras & desenhada para pilotos. Mas não só.
        Cabra Offroad é para todos os que têm uma alma livre e vivem com paixão.
        Uma marca para homens, mas que não se esqueceu das mulheres.
      </p>

      <h2 className="text-2xl font-bold mb-2">
        CABRA OFFROAD CRIADA POR UMA MULHER
      </h2>
      <p className="mb-6 text-sm">
        Com uma ousadia destemida e um espírito empreendedor, a Tamára é a mente
        por trás da marca CABRA. Desde o seu início, enfrentou um desafio na
        escolha do nome, confrontando-se com a conotação depreciativa que muitas
        vezes é associada a termos femininos. No entanto, coragem e convicção
        prevaleceram, e este nome audacioso foi abraçado com confiança!
        Designer, criadora de conteúdo, influencer, empreendedora, curiosa e
        mecânica nos tempos livres, a Tamára criou esta marca com o objetivo de
        unir homens e mulheres que partilham uma única paixão: a sensação de
        liberdade e adrenalina ao andar de mota de mato e viver aventuras
        offroad. A Tamára está disponível para trabalhos que incluam marketing
        de marcas/produtos, condução de motos no ecrã, escrita, criação e
        produção de conteúdos colaborativos no que respeita a eventos, campanhas
        e tudo o que esteja relacionado com o marketing na indústria do
        motociclismo e não só. Obrigado pela visita!
      </p>
    </div>
  );
};

export default AboutPage;
