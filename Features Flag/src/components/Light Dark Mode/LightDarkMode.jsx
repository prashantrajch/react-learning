import { useEffect, useState } from "react";
import './style.css'
function UseLocalStorage(key,defaultValue){
    
    const [value,setValue] = useState(() => {
        let currentValue;
        try{
            let data = JSON.parse(localStorage.getItem(key)) || String(defaultValue);
            currentValue = data;
        }
        catch(err){
            console.log(err);
            currentValue = defaultValue;
        }

        return currentValue;
    })

    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(value));
    },[value,setValue]);

    return [value,setValue];
}

export default function LightDarkMode() {
    const[theme,setTheme] = UseLocalStorage('theme', 'dark');

    function handleTheme(){
        setTheme(theme === 'Light' ? 'Dark': "Light")
    }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World</p>
        <button className="theme-btn" onClick={handleTheme}>{theme === "Light"? "Dark" : "Light"} Mode</button>
      </div>
    </div>
  );
}
