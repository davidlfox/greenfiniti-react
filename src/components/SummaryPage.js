function SummaryPage() {
    return (
        <div className="phone-screen py-3 bggreen page-summary-container">
            <div className="container" id="page-summary">
                <div className="row align-items-center g-2 white">
                    <div className="col">
                        <div className="icon-circle black go-back-listing">
                            <i className="fa-solid fa-arrow-left-long fa-xs"></i>
                        </div>
                    </div>
                    <div className="col text-center">
                        <strong>Summary</strong>
                    </div>
                    <div className="col text-end">
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
                <div className="row summary-container">
                    <div className="container px-3">
                        <div className="row py-2">
                            <div className="col pb-2">ORDER CONFIRMED</div>
                            <hr />
                            <div className="col">Items in your order:</div>
                        </div>
                        <div className="row summary-row align-items-center">
                            <div className="col-4">
                                <img src="img/09.png" alt="frappuccino" />
                            </div>
                            <div className="col-8">
                                Double Espresso
                                <br />
                                <strong>Total: $4.12</strong>
                            </div>
                        </div>
                        <div className="row mt-3 carbon-summary">
                            <div className="col-7">
                                <strong>Total Carbon Impact:</strong>
                            </div>
                            <div className="col-5 text-end">
                                <strong>
                                    409 kg CO<sub>2</sub>
                                </strong>
                            </div>
                            <div className="col-7">Production & Handling:</div>
                            <div className="col-5 text-end">
                                394 kg CO<sub>2</sub>
                            </div>
                            <div className="col-7">Final Delivery:</div>
                            <div className="col-5 text-end">
                                15 kg CO<sub>2</sub>
                            </div>
                            <div className="col-7">Carbon Savings:</div>
                            <div className="col-5 text-end">
                                110 kg CO<sub>2</sub>
                            </div>
                        </div>
                        <div className="row mt-3 shipment-address">
                            <div className="col-12">
                                <strong>Shipment Address:</strong>
                            </div>
                            <div className="col-12 text-end shipment-address">
                                7861 Kendrick Ct
                                <br />
                                Manassas, VA 20112-4600
                            </div>
                        </div>
                        <div className="row mt-3 payment-details">
                            <div className="col-12">
                                <strong>Payment Details:</strong>
                                <br />
                                **** **** **** 1234
                                <br />
                                <br />
                                <div className="text-center">
                                    Thank you for your order!
                                </div>
                            </div>
                        </div>
                        <div className="row placeorder pt-3 mb-5">
                            <button className="btn btn-success btn-lg btn-block continue">
                                <span>Continue Shopping</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SummaryPage;
