function CheckoutPage() {
    return (
        <div className="phone-screen py-3 bggreen page-checkout-container">
            <div className="container" id="page-checkout">
                <div className="row align-items-center g-2 white">
                    <div className="col">
                        <div className="icon-circle black go-back-details">
                            <i className="fa-solid fa-arrow-left-long fa-xs"></i>
                        </div>
                    </div>
                    <div className="col text-center">
                        <strong>Checkout</strong>
                    </div>
                    <div className="col text-end">
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
                <div className="row checkout-container">
                    <div className="container px-3">
                        <div className="row py-3">
                            <div className="col-4">TOTAL</div>
                            <div className="col-8 text-end">
                                <span className="badge rounded-pill text-bg-warning price">
                                    <strong>
                                        $4.12 | 0.21 kg CO<sub>2</sub>
                                    </strong>
                                </span>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-12 shipping-txt">
                                Shipping Details
                            </div>
                            <div className="col-7 mt-3 address">
                                7861 Kendrick Ct
                                <br />
                                Manassas, VA 20112-4600
                            </div>
                            <div className="col-4 pt-2 mt-3 carbon">
                                Carbon&nbsp;
                                <i className="fa-solid fa-circle-info"></i>
                                <br />
                                <span>
                                    0.02 kg CO<sub>2</sub>
                                </span>
                            </div>
                            <div className="col-12 mt-3 payment-txt">
                                Payment Details
                            </div>
                            <div className="col-12 mt-3 creditcard">
                                <div className="py-3">**** **** **** 1234</div>
                            </div>
                            <div className="col-12 mt-3 tandc-txt">
                                Terms & Conditions
                            </div>
                            <div className="col-10 accept">
                                Accept (<a href="#">Learn more</a>)
                            </div>
                            <div className="col-2">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        name=""
                                        id=""
                                        type="checkbox"
                                        value="checkedValue"
                                        aria-label="Text for screen reader"
                                        checked
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row placeorder mb-5">
                            <button className="btn btn-success btn-lg btn-block go-to-summary">
                                <span>Pay Now</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;
