import useFetch from "./Fetch"

export default function UseFetchHookText(){
    const {data,error,pending} = useFetch('https://dummyjson.com/products?limit=100',{})

    return <div>
        <h1>Use Custom Fetch Hook</h1>
        {
            error ? <p>{error}</p> : null
        }
        {
            pending ? <p>Loading the Data......Please wait</p> : null
        }
        {
            data ? data.products.map((productItem) => <p key={productItem.id}>{productItem.title}</p>) : null
         }
        
    </div>
}