import moon from '../../img/moon.png'
import sun from '../../img/sun.png'
import './index.css'

const Header = ({theme, setTheme}) => {

  const changeTheme = () => {

    document.body.style.transition = '0.5s';

    if(theme) {

      setTheme(false);
      document.body.style.backgroundColor = 'white';
      return
    } 
      setTheme(true);
      document.body.style.backgroundColor = '#1f2d36';
  }

  return (
    <>
      <header className={theme ? 'header-dark' : 'header-light'}>

        <span className={theme ? 'header-text header-text-dark' : 'header-text header-text-light'}>Where in the World?</span>

        <div className='header-container'>
          <button className={theme ? 'button-dark buttonThemes' : 'button-light buttonThemes'} onClick={changeTheme}>

            <img 
              src={theme ? sun : moon} 
              alt='moon'
              className={theme ? 'sun' : 'moon'} />

            <span>{theme ? 'Light Theme' : 'Dark Theme'}</span>
          </button>
        </div>

      </header>
    </>
  )
}

export default Header;