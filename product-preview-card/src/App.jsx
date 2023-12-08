import './App.css'
import iconCart from '../images/icon-cart.svg'
import imageProductDesktop from '../images/image-product-desktop.jpg'
import imageProductMobile from '../images/image-product-mobile.jpg'

function App() {

  return (
    <>
      <div className="mainContainer">
        <div className="leftSide">
          <img src={imageProductDesktop} alt="" />
        </div>
        <div className="rightSide">
          <div className='firstSection'>
            <p>P E R F U M E</p>
          </div>
          <div className='secondSection'>
            <h1>
              Gabrielle Essence Eau De Parfum
            </h1>
          </div>
          <div className='thirdSection'>
            <p>A floral, solar and voluptuous interpretation composed by Oliver Polge Perfumer-Creator for the House of CHANEL</p>
          </div>
          <div className='fourthSection'>
            <div className='leftSideSection'>
              <h2>$149.99</h2>
            </div>
            <div className='rightSideSection'>
              <p>$169.99</p>
            </div>
          </div>
          <div className='fifthSection'>
            <button>
              <span className='icon'>
                <img src={iconCart} alt="Cart" />
              </span>
              <span className='cartText'>
                Add To Cart
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/aiyangar">Gustavo A. Cárdenas</a>.
      </div>
    </>
  )
}

export default App
