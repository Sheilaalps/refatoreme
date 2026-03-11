import './Header.css'
function Header() {
  return (
    <header>
      <nav>
        <h1>TechNova</h1>
        <ul className='Nav-menu'>
          <li><a href="#home">Início</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;