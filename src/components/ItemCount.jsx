import React, { useState } from "react";
import alta7 from "../assets/alta7.jpg"

function ItemCount() {
    let min = 0;
    let max = 100;

    const [isAdd, setAdd] = useState(min);

    function suma() {
        const newValue = isAdd +1;
        if (newValue<max) {
            setAdd(newValue);
        }
    }

    function resta() {
        const newValue = isAdd -1;
        if (newValue>min) {
            setAdd(newValue);
        }
    }

    function onAdd() {
        alert("Agregaste "+ isAdd + " articulos")
    }

    return (
        <>
        <div className="card col-md-2">
            <img src={alta7} alt="foto vestido"/>
            <div className="card-body">
                <h4 className="card-title">Vestido</h4>
                <p className="card-text text-secondary">Vestido Batik Monocromático.</p>
                <button className="btn btn-primary" onClick={resta}>
                Quitar
                </button>
                <span>{isAdd}</span>
                <button className="btn btn-primary" onClick={suma}>Agrega
                </button>
                <button className="btn btn-primary" onClick={onAdd}>Agrega a tu carrito</button>
            </div>
        </div> 
        </>
    )
}

export default ItemCount

