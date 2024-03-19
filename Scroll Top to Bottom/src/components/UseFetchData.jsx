import { useEffect, useState } from "react";

export default function UseFetchData(url){
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);

    async function fetchByapi(){
        try{
            setLoading(true);
            const response = await fetch(url);
            const result = await response.json();
            if(result){
                setData(result);
                setLoading(false);
            }
        }catch(err){
            setLoading(true);
            console.log(`Data is occrued fix this ${err}`);
        }
    }

    useEffect(() => {
        fetchByapi()
    },[url])

    return {data,loading};
}