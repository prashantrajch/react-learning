import {FaStar} from 'react-icons/fa';
import {useState} from 'react';
import './star.css'
export default function Star({noOfStars = 5}){
    //one method to create a array to given no by props
    const arr = Array.from(Array(noOfStars));

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0)

    function handleClick(currentIdx){
        setRating(currentIdx);
    }
    function handleEnter(currentIdx){
        setHover(currentIdx);

    }
    function handleLeave(currentIdx){
        setHover(rating)
    }


    return(
        <div className="star-rating">
            {
                arr.map((_,index) => {
                    // for accurate rating
                    index = index + 1; 

                    return <FaStar size={40}  className={(hover || rating) >= index ?  "active": "noActive"}
                    onClick={() => handleClick(index)}
                    onMouseEnter={() => handleEnter(index)}
                    onMouseLeave={() => handleLeave(index)}
                    style={{cursor: "pointer",margin: "0 5px"}}
                    />
                })
            }
        </div>
    )
}