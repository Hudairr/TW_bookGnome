import React from 'react'
import NavBar from "../components/NavBar";
import AllBooks from '../components/AllBooks'
import Footer from "../components/footer";
function All() {
    return (
        <>
            <NavBar />
            <div className="min-h-screen">
                <AllBooks />
            </div>
            <Footer />
        </>
    );
}

export default All
