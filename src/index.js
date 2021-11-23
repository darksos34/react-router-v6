import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from "./App";
import Expenses from "./nav/expenses";
import Invoices from "./nav/invoices";
import Invoice from "./nav/invoice";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="uitgaven" element={<Expenses />} />
                <Route path="medewerkers" element={<Invoices />}>
                    <Route
                        index
                        element={
                            <main style={{ padding: "1rem", }}>
                                <p>Selecteer een medewerker</p>
                            </main>
                        }
                    />
                    <Route path=":invoiceId" element={<Invoice />} />
                </Route>
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>Er is hier niets!</p>
                        </main>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);