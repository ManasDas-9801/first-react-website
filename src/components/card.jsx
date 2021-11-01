import React,{useState} from "react";



const Card = (props) => {
    const [counter,setCounter] = useState(0);
    return(
           <>
                <div className={"card" + props.card}>
                    <div className="card-header">{props.heading}</div>
                    <div className="card-body">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iure quis voluptate vel tempore, illo sequi error alias maxime, officia aperiam corporis quibusdam culpa consequuntur vero ipsam voluptatibus est temporibus!</p>
                    </div>
                    <div className="card-header d-flex mx-auto">
                    <button className="btn btn-warning m-3 px-3" onClick={()=>{setCounter(counter-1)}} disabled={(counter<= 0 )?"disabled":""}>-</button>
                    
                        <span className="my-4">
                          {counter}
                        </span>
                        <button className="btn btn-success m-3 px-3" onClick={()=>{setCounter(counter+1)}}>+</button>
                    </div>
                </div>
           </>
    )
}

export default Card;