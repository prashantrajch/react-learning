import { useRef } from "react"
import UseFetchData from "./UseFetchData"

export default function ScrollTopAndBottom(){
    const{data,loading} = UseFetchData('https://dummyjson.com/products?limit=100&skip=0&select=title,price')

    function handledScrollTop(){
       window.scroll({
        top: 0,
        behavior: 'smooth'
       }) 
    }

    const bottomRef = useRef(null)

    function handledScrollBottom(){
        bottomRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return <div>
        <h1>Scroll to Top and Bottom Features</h1>
        <h2>This is the top section</h2>

        <button onClick={handledScrollBottom}>Scroll to Bottom</button>
        {
            loading ? <p>Loading the data...Please wait sometime</p> :
            data &&  data.products.map((item) => <p key={item.id}>{item.title} </p>)
        }
        <button onClick={handledScrollTop}>Scroll to Top</button>
        <h2 ref={bottomRef}>This is the bottom section</h2>
    </div>
}