import moon from "../../img/moon.png";
import sun from "../../img/sun.png";
import "./index.css";

const Header = ({ isThemeDark, setIsThemeDark }) => {
  const changeTheme = () => {
    document.body.style.transition = "0.5s";

    if (isThemeDark) {
      setIsThemeDark(false);
      document.body.style.backgroundColor = "white";
      return;
    }
    setIsThemeDark(true);
    document.body.style.backgroundColor = "#1f2d36";
  };

  return (
    <>
      <header className={isThemeDark ? "header-dark" : "header-light"}>
        <span
          className={
            isThemeDark
              ? "header-text header-text-dark"
              : "header-text header-text-light"
          }
        >
          Where in the World?
        </span>

        <div className="header-container">
          <button
            className={
              isThemeDark
                ? "button-dark buttonThemes"
                : "button-light buttonThemes"
            }
            onClick={changeTheme}
          >
            <img
              src={isThemeDark ? sun : moon}
              alt="moon"
              className={isThemeDark ? "sun" : "moon"}
            />

            <span>{isThemeDark ? "Light Theme" : "Dark Theme"}</span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
