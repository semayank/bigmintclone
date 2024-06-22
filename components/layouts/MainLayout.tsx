"use client";

import Header from "./includes/Header";
import Footer from "./includes/Footer";

type MainLayoutType={
    children:React.ReactNode
}

export default function MainLayout({ children }:MainLayoutType) {
    return (<>
        <Header/>
        {children}
        <Footer />
    </>)

}