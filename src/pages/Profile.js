import React from "react";
import Footer from "../components/footer";
import { useCurrentUser } from "../UserContext";
import Solver_Profile from "../components/solver_profile";
import Publisher_Profile from "../components/publisher_profile";

export default function Profile() {
    const { currentUser, setCurrentUser } = useCurrentUser();
    return (
        <>
            <div>
                {currentUser == 'solver' && <ul>
                    <Solver_Profile></Solver_Profile>
                </ul>}
                {currentUser == 'publisher' && <ul>
                    <Publisher_Profile></Publisher_Profile>
                </ul>}
            </div>
            <Footer></Footer>
        </>
    );
}