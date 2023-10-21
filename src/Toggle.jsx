import { useEffect } from "react";
import { useState } from "react";
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';


function Toggle() {
    const [theme, setTheme] = useState(null);
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    useEffect(() => {
        if (window.matchMedia("prefer-color-scheme: dark").matches) {
            setTheme('dark');
        } else {
            setTheme('light')
        }
    }, []);

    const handleSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <div > 
            <button onClick={handleSwitch} className="btn btn-xs font-bold text-base">{theme === "dark" ? <FaMoon/> : <BsSunFill/>}</button>
        </div>
    )
}

export default Toggle;