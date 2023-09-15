function DetailPage() {
    return (
        <div className="phone-screen page-detail-container">
            <div className="container" id="page-detail">
                <div className="row hero">
                    <div className="col py-3">
                        <div className="icon-circle icon-circle-detail white go-back-listing">
                            <i className="fa-solid fa-arrow-left-long fa-xs"></i>
                        </div>
                    </div>
                    <div className="col text-center py-3">
                        <strong className="white">Details</strong>
                    </div>
                    <div className="col text-end py-3 white">
                        <i className="fa-regular fa-bookmark"></i>
                    </div>
                </div>
                <div className="row detail-main">
                    <div className="col-7 py-4 px-4">
                        <strong>Double Espresso</strong>
                    </div>
                    <div className="col coins">
                        <div className="coin-circle">3</div>
                        <div className="text-end py-4 text">
                            Green Coins&nbsp;&nbsp;&nbsp;
                        </div>
                    </div>
                </div>
                <div className="row bgwhite">
                    <div className="col px-4 choose">Choose Your Size</div>
                </div>
                <div className="row sizes bgwhite">
                    <div className="col px-4">
                        <span className="badge rounded-pill text-bg-success">
                            Small
                        </span>
                    </div>
                    <div className="col">
                        <small>Medium</small>
                    </div>
                    <div className="col">
                        <small>Large</small>
                    </div>
                    <div className="col-4">
                        <small>Xtra Large</small>
                    </div>
                </div>
                <div className="row price bgwhite">
                    <div className="col px-4 pt-4">
                        <h3>$3.45</h3>
                        &nbsp;&nbsp;<sup>+TAX</sup>
                    </div>
                </div>
                <div className="row footprint bgwhite">
                    <div className="col px-4">
                        <strong>Carbon footprint</strong>&nbsp;&nbsp;
                        <i className="fa-solid fa-circle-info"></i>
                    </div>
                </div>
                <div className="row px-4 pt-3 meters bgwhite">
                    <div className="col-6">Your selection</div>
                    <div className="col-6">
                        <span className="badge rounded-pill text-bg-warning meter your">
                            0.07
                        </span>
                    </div>
                    <div className="col-6 py-2">Industry avg.</div>
                    <div className="col-6 py-2">
                        <span className="badge rounded-pill text-bg-warning meter industry">
                            0.28
                        </span>
                    </div>
                    <div className="col meter message">
                        Your selection produces 0.21 kg of carbon emissions
                        avoided compared to the industry average. Your reward is
                        3 green coins.
                    </div>
                </div>
                <div className="row placeorder bgwhite">
                    <div className="col px-4">
                        <button className="btn btn-success btn-lg btn-block go-to-checkout">
                            <span>PLACE ORDER</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;$4.12
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPage;
