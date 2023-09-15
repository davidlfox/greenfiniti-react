import React, { useState } from "react";
import "./App.css";
import ListingPage from "./components/ListingPage";
import DetailPage from "./components/DetailPage";
import CheckoutPage from "./components/CheckoutPage";
import SummaryPage from "./components/SummaryPage";
import "bootstrap/dist/css/bootstrap.min.css";
// Optionally, if you need Bootstrap's JavaScript features:
import "bootstrap/dist/js/bootstrap.bundle.min";

export const PageContext = React.createContext();

function App() {
    const [page, setPage] = useState("listing");

    return (
        <PageContext.Provider value={{ page, setPage }}>
            <div className="phone-frame">
                {page === "listing" && <ListingPage />}
                {page === "detail" && <DetailPage />}
                {page === "checkout" && <CheckoutPage />}
                {page === "summary" && <SummaryPage />}
            </div>
        </PageContext.Provider>
    );
}

export default App;
