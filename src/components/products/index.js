import React from 'react';
import IMG from "../../images_tp/kd14.jpg"


export const Products = () => {
    return (
        <>
            <h1 className="title">Productos</h1>
            <div className="products">
                <div className="product">
                    <a href="#">
                        <div className="product_img">
                            <img src={IMG} alt="shoes"></img>
                        </div>
                    </a>
                    <div className="product__footer">
                        <h1>Title</h1>
                        <p> Categoria </p>
                        <p className="price">$320</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">
                            Añadir al carrito
                        </button>
                        <div>
                            <a href="#" className="btn"> Vista</a>
                        </div>
                    </div>
                </div>

                <div className="product">
                    <a href="#">
                        <div className="product_img">
                            <img src={IMG} alt="shoes"></img>
                        </div>
                    </a>
                    <div className="product__footer">
                        <h1>Title</h1>
                        <p> Categoria </p>
                        <p className="price">$320</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">
                            Añadir al carrito
                        </button>
                        <div>
                            <a href="#" className="btn"> Vista</a>
                        </div>
                    </div>
                </div>

                <div className="product">
                    <a href="#">
                        <div className="product_img">
                            <img src={IMG} alt="shoes"></img>
                        </div>
                    </a>
                    <div className="product__footer">
                        <h1>Title</h1>
                        <p> Categoria </p>
                        <p className="price">$320</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">
                            Añadir al carrito
                        </button>
                        <div>
                            <a href="#" className="btn"> Vista</a>
                        </div>
                    </div>
                </div>

                <div className="product">
                    <a href="#">
                        <div className="product_img">
                            <img src={IMG} alt="shoes"></img>
                        </div>
                    </a>
                    <div className="product__footer">
                        <h1>Title</h1>
                        <p> Categoria </p>
                        <p className="price">$320</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">
                            Añadir al carrito
                        </button>
                        <div>
                            <a href="#" className="btn"> Vista</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
