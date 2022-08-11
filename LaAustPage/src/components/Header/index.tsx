import logoHeader from '../../assets/logoHeader.svg'
import menuBurguer from '../../assets/navBarButtonMenu.svg'
import './style.scss'
export default function Header() {
  return (
    <header>
      <img className="logo" src={logoHeader} alt="Logo da empresa" />
      <button className="buttonMenu">
        <p>MENU</p>
        <img src={menuBurguer} alt="Ícone do menu" />
      </button>
    </header>
  )
}
