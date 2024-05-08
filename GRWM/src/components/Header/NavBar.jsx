import logo from "../../assets/logo.svg";
function NavBar() {
    return (
        <div className="absolute z-10 w-full flex flex-col items-center justify-center bg-white bg-opacity-60 py-4">
            <img src={logo} width={230} className="mt-3"/>
        </div>
    )
}

export default NavBar;