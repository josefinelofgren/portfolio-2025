import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface Props {
    menuOpen: boolean;
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ menuOpen, setMenuOpen }: Props) => {

    return (
        <header
            id="header"
            className={`header relative z-20 p-6 md:p-12 lg:p-24 lg:pb-12 lg:pt-12 flex justify-between items-center ${menuOpen ? "bg-menu" : ""}`}
            style={{
                transition: 'background-color 300ms ease-out',
                transitionDelay: menuOpen ? '0ms' : '1300ms',
            }}
        >
            <p className={`transition-all duration-300 ease-out ${menuOpen ? "text-white" : ""}`}
                style={{ transitionDelay: menuOpen ? '0ms' : '1300ms' }}>
                Josefine Löfgren
            </p>
            <button
                className="md:hidden flex flex-col justify-center items-center"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${menuOpen ?
                        'rotate-45 translate-y-1 bg-white' : '-translate-y-0.5'
                    }`} style={{ transitionDelay: menuOpen ? '0ms' : '1300ms' }}>
                </span>
                <span className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${menuOpen ?
                        'opacity-0' : 'opacity-100'
                    }`} style={{ transitionDelay: menuOpen ? '0ms' : '1300ms' }}>
                </span>
                <span className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${menuOpen ?
                        '-rotate-45 -translate-y-1 bg-white' : 'translate-y-0.5'
                    }`} style={{ transitionDelay: menuOpen ? '0ms' : '1300ms' }}>
                </span>
            </button>
            <ul
                className={"md:flex gap-8 hidden"}
            >
                <li><p><Link to="/">Work</Link></p></li>
                <li><p><Link to="/about">About</Link></p></li>
            </ul>
        </header>
    );
};

export default Header;