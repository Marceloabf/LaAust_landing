import Header from '../components/Header'
import imgThinFont from '../assets/imgThinFont.svg'
import Button from '../components/Button'
import imgWomanCellAlone from '../assets/imgMulherCelular.svg'
import imgWebDesign from '../assets/imgTipografia.svg'
import img2girlsTalking from '../assets/womensCoffee.svg'
import imgTimelessBrands from '../assets/marcasAtemporais.svg'
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
        <section className="howCanIHelpYou mainContainer">
          <h3>
            como podemos te ajudar
            <br />
            <span>Nossos serviços</span>
          </h3>
          <div className="helpSectionContainer">
            <img
              src={imgWomanCellAlone}
              alt="Mulher trabalhando com o celular e o notebook"
            />
            <div className="helpSectionContainerText">
              <img src={imgWebDesign} alt="Web design magnético" />
              <p>
                <span>
                  Pra você que quer estabeleer uma aparência profissional e
                  elevar o nível do seu negócio! <br />
                </span>
                Vamos criar para o seu cliente uma experiência on-line
                personalizada e de luxo, com uma estratégia incrível que seja
                impossível dele dizer não ao seu produto!
              </p>
              <Button text="Criar o Site dos Sonhos!" />
            </div>
          </div>
        </section>
        <section className="timelessBrands">
          <div className="timelessBrandText">
            <img src={imgTimelessBrands} alt="Marcas atemporais" />
            <p>
              <span>
                Um processo Pra você que quer criar uma marca forte e
                proposital, perfeita para se comunicar com os seus clientes.
              </span>
              Um processo 1:1 onde além de criar um visual incrível, vamos
              desenvolver uma estratégia de marca que encante seus clientes
              ideais.
            </p>
            <Button text="criar marca ideal" />
          </div>
        </section>
      </main>
    </>
  )
}
