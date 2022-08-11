import Header from '../components/Header'
import imgThinFont from '../assets/imgFirstSection.svg'
import './style.scss'
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="firstSection mainContainer">
          <div className="containerMain">
            <h1>Vamos criar para você uma marca única e memorável</h1>
            <img
              src={imgThinFont}
              alt="Perfeita para os seus clientes ideais"
            />
          </div>
        </section>
      </main>
    </>
  )
}
