import './hero.css'
export default function Hero(){
    return(
        <main className="hero">
            <div className="left">
                <h1>Your Feet Deserve the best</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="btns">
                    <button className='btn'>Shop Now</button>
                    <button className='btn'>Category</button>
                </div>
                <div className="shop">
                    <p>Also Available on</p>
                    <div className="icons">
                        <img src="/Images/flipkart.png" alt="" />
                        <img src="/Images/amazon.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="right">
                <img src="/Images/shoe_image.png" alt="" />
            </div>
        </main>
    )
}