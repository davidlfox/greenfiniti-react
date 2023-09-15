import { useState } from "react";
import "./App.css";
import ListingPage from "./components/ListingPage";
import DetailPage from "./components/DetailPage";
import CheckoutPage from "./components/CheckoutPage";
import SummaryPage from "./components/SummaryPage";
import "bootstrap/dist/css/bootstrap.min.css";
// Optionally, if you need Bootstrap's JavaScript features:
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
    const [page, setPage] = useState("summary");

    return (
        <div className="phone-frame">
            {page === "listing" && <ListingPage />}
            {page === "detail" && <DetailPage />}
            {page === "checkout" && <CheckoutPage />}
            {page === "summary" && <SummaryPage />}
        </div>
    );
}

export default App;
