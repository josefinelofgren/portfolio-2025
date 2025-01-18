"use client";

import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface Props {
    menuOpen: boolean;
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ menuOpen, setMenuOpen }: Props) => {
    return (
        <>
            <div
                id="menu"
                className={`absolute top-10 z-10 menu bg-menu text-white left-0 w-full transition-all duration-1000 ease-in-out
                ${menuOpen ? "h-full" : "h-0 translate-y-0"}`}
                style={{ transitionDelay: menuOpen ? "300ms" : "300ms" }}
            >
            </div>
            <div
                className={`absolute top-10 w-full h-full flex flex-col items-center justify-center text-white ${menuOpen ? "z-20" : "z-10"}`}
                style={{
                    transitionDelay: menuOpen ? "" : "1000ms",
                    zIndex: menuOpen ? "20" : "0",
                }}
            >
                <div className="relative overflow-hidden h-[5.5em] w-full flex justify-center" onClick={() => setMenuOpen(false)}>
                    <Link to="/">
                        <h2
                            className={`text-white text-center menu-item transition-all duration-700 ease-in-out
                    ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-[150%] opacity-0"}`}
                            style={{ transitionDelay: menuOpen ? "500ms" : "300ms" }}
                        >
                            Work
                        </h2>
                    </Link>
                </div>

                <div className="relative overflow-hidden h-[5.5em] w-full flex justify-center mt-12" onClick={() => setMenuOpen(false)}>
                    <Link to="/about">
                        <h2
                            className={`text-white text-center menu-item transition-all duration-700 ease-in-out
                    ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-[150%] opacity-0"}`}
                            style={{ transitionDelay: menuOpen ? "800ms" : "100ms" }}
                        >
                            About
                        </h2>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Menu;