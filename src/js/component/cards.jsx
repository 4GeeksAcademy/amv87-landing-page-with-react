import React from "react"
import cardImage from "../../img/cardimage.png"

const myCard = {
    width: "18rem"
}

const Card = () => {
	return (
            <div className="col py-5">
                <div className="card" style={myCard}>
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