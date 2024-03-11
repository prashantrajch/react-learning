import { useEffect, useState } from "react";

export default function UseLocalStorage(key,defaultValue){
    
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