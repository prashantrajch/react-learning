import { useEffect } from "react";

export default function useOutsideClick(ref,handler){
    console.log(handler());
    useEffect(() =>{
        function listner(event){
            if(ref.current || ref.current.contains(event.target)){
                return;
            }
            else{
                handler(event);
            }
        }
        document.addEventListener('mousedown',listner);
        document.addEventListener('touchstart',listner);
        return () => {
            document.removeEventListener('mousedown',listner);
            document.removeEventListener('touchstart',listner);
        }
    },[handler,ref])
}