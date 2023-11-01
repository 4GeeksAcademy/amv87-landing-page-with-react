import React from "react"
import cardImage from "../../img/cardimage.png"

const Card = () => {
	return (
            <div className="col py-5 d-flex justify-content-center">
                <div className="card" style={{width: "18rem"}}>
                    <img src={cardImage} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni ea labore provident reiciendis dolor.</p>
                        <a href="#" className="btn btn-primary">Find out more!</a>
                    </div>
                </div>
            </div>
	);
};

export default Card;