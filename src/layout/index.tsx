import { PropsWithChildren, useEffect } from "react";
import classes from "./layout.module.scss";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

export default function Default({ children }: PropsWithChildren) {
    return (
        <div className={`${classes.default__wrapper}`}>
            <Header />
            <div className={`${classes.children__wrapper} row `}>{children}</div>
            <Footer />
        </div>
    );
}
