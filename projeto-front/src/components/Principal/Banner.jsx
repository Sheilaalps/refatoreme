import './Banner.css';

import videoBg from '../../assets/Background.mp4';

function Banner() {
  return (
    <section className="hero-banner">
      {/* 1. O vídeo é o fundo */}
      <video autoPlay muted loop playsInline className="video-bg">
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* 2. O overlay ajuda a ler o texto (opcional, mas recomendado) */}
      <div className="overlay"></div>

      {/* 3. O conteúdo que fica NA FRENTE */}
      <div className="banner-content">
        <h2>Soluções Inovadoras em TI</h2>
        <p>Transformando ideias em arquiteturas escaláveis e interfaces modernas.</p>
        <button id="cta-btn">Saiba Mais</button>
      </div>
    </section>
  );
}

export default Banner;