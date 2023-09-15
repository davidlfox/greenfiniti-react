import React from "react";
import products from "../data/products";
import { PageContext } from "../App";

function ListingPage() {
    const { page, setPage } = React.useContext(PageContext);

    return (
        <div className="phone-screen px-3 py-3 page-listing-container">
            <div className="container" id="page-listing">
                <div className="row align-items-center g-2">
                    <div className="col">
                        <div className="icon-circle">
                            <i className="fa-solid fa-arrow-left-long fa-xs"></i>
                        </div>
                    </div>
                    <div className="col text-center">
                        <strong>Products-test</strong>
                    </div>
                    <div className="col text-end">
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
                {products.map((product) => (
                    <div className="row row-product pt-2" key={product.id}>
                        <div className="col-4">
                            <img src={product.imgSrc} alt={product.name} />
                            <span className="badge rounded-pill text-bg-warning leaf">
                                <i className="fa-brands fa-envira fa-flip-horizontal"></i>
                                &nbsp;&nbsp;&nbsp;{product.leafCount}
                            </span>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <span className="title">
                                        {product.name}
                                    </span>
                                </div>
                            </div>
                            <div className="row">
                                <span className="subtext">
                                    {product.subtext}
                                </span>
                            </div>
                            <div className="row py-2">
                                <div className="col">
                                    <strong className="price">
                                        ${product.price}
                                    </strong>
                                </div>
                                <div className="col text-end">
                                    <span
                                        onClick={() => setPage("detail")}
                                        className="badge rounded-pill text-bg-success p-2 btn-buy"
                                    >
                                        &nbsp;
                                        <i className="fa-solid fa-bag-shopping"></i>
                                        &nbsp;Buy&nbsp;
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListingPage;
