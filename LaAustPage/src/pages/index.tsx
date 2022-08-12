import Header from '../components/Header'
import imgThinFont from '../assets/imgThinFont.svg'
import Button from '../components/Button'
import './style.scss'
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="firstSection mainContainer">
          <div className="containerMain">
            <h1>
              Vamos criar para você uma
              <br /> marca única e memorável
            </h1>
            <img
              src={imgThinFont}
              alt="Perfeita para os seus clientes ideais"
            />
            <Button text="Quero Criar Minha Marca!" />
          </div>
        </section>
      </main>
    </>
  )
}
