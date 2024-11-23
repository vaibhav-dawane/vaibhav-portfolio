import React, { useEffect, useState } from 'react';

function Navbar({about, home, contact, education, project}) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme)
        if (localTheme === "dark") {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]) 

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0) // if scrolled
            {
                setSticky(true)
            }
            else
            {
                setSticky(false)
            }
        }
        // if user scrolls, call the function
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScrollToAbout = (id) => (e) => {
        e.preventDefault();
        
        const navSection = document.getElementById(id);
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        window.scrollTo({
            top: navSection.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
        e.target.blur(); // Remove focus from the clicked link
    }    

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div>
            <div id='navbar' className={`navbar flex justify-around bg-zinc-100 dark:bg-purple-500 fixed left-0 right-0 top-0 z-50
                ${sticky ? "sticky-navbar shadow-md bg-zinc-300 dark:bg-purple-600 duration-300 transition-all ease-in-out" : ""}
                `}>
                <div className="navbar-start">
                    <a className="btn btn-ghost text-2xl font-bold">Vaibhav Dawane</a>
                </div>

                <div className="mr-20">
                    <div className='flex'>
                        <ul className="menu menu-horizontal flex-nowrap px-1 font-semibold">
                            <li><a href="" onClick={handleScrollToAbout(home)}>Home</a></li>
                            <li><a href="" onClick={handleScrollToAbout(about)}>About</a></li>
                            <li><a href="" onClick={handleScrollToAbout(project)}>Project</a></li>
                            <li><a href="" onClick={handleScrollToAbout(education)}>Education</a></li>
                            <li><a href="" onClick={handleScrollToAbout(contact)}>Contact</a></li>
                        </ul>
                    </div>
            
                    <div className='ml-10 p-2 rounded-md'>
                        <label className="flex cursor-pointer gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                            </svg>
                            <input type="checkbox" className="toggle theme-controller" checked={theme === "dark"} onChange={toggleTheme} />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar
