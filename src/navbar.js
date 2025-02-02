import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <header className="headd">
            <label className="eleven" > ELEVEN </label>
            <nav>
                <ul>
                    <li> <Link to="/courses"> COURSES </Link> </li>
                    <li> <Link to="/coursetypes"> COURSE TYPES</Link> </li>
                    <li> <Link to="/courseofferings"> COURSE OFFERINGS </Link> </li>
                    <li><Link to="/register"> REGISTER FOR A COURSE </Link></li>
                </ul>

            </nav>,

        </header>
    );
};

export default Navbar;

{/* <nav class="navbar rounded-box shadow">
    <div class="w-full md:flex md:items-center md:gap-2">
        <div class="flex items-center justify-between">
            <div class="navbar-start items-center justify-between max-md:w-full">
                <a href="#" aria-label="Homepage Link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.6745 16.9224L12.6233 10.378C12.2167 9.85117 11.4185 9.8611 11.0251 10.3979L6.45728 16.631C6.26893 16.888 5.96935 17.0398 5.65069 17.0398H3.79114C2.9635 17.0398 2.49412 16.0919 2.99583 15.4336L11.0224 4.90319C11.4206 4.38084 12.2056 4.37762 12.608 4.89668L20.9829 15.6987C21.4923 16.3558 21.024 17.3114 20.1926 17.3114H18.4661C18.1562 17.3114 17.8638 17.1677 17.6745 16.9224ZM12.5866 15.5924L14.8956 18.3593C15.439 19.0105 14.976 20 14.1278 20H9.74075C8.9164 20 8.4461 19.0586 8.94116 18.3994L11.0192 15.6325C11.4065 15.1169 12.1734 15.0972 12.5866 15.5924Z"
                        fill="oklch(var(--p))"
                    /></svg>
                </a>
                <div class="md:hidden">
                    <button type="button" class="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square" data-collapse="#logo-navbar-collapse" aria-controls="logo-navbar-collapse" aria-label="Toggle navigation" >
                        <span class="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                        <span class="icon-[tabler--x] collapse-open:block hidden size-4"></span>
                    </button>
                </div>
            </div>
        </div>
        <div id="logo-navbar-collapse" class="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full" >
            <ul class="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
            </ul>
        </div>
    </div>
</nav> */}

