import UseLocalStorage from "./UseLocalStorage";
import './theme.css'

export default function LightDarkMode() {
    const[theme,setTheme] = UseLocalStorage('theme', 'dark');

    console.log(theme);

    function handleTheme(){
        setTheme(theme === 'Light' ? 'Dark': "Light")
    }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World</p>
        <button onClick={handleTheme}>{theme === "Light"? "Dark" : "Light"} Mode</button>
      </div>
    </div>
  );
}
