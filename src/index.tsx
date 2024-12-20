import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import MainPage from "./components/page-components";
import { store } from "./store/store";
import "./styles/index.scss";
import "./styles/template.scss";
import Default from "./layout";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Default>
                <MainPage />
            </Default>
        </Provider>
    </React.StrictMode>,
);
