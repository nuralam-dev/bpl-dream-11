import Logo from "../assets/logo.png"
export function Nav() {
    
    return (
        <>
        <nav className="bg-amber-100 p-2">
            <div className="container mx-auto flex justify-between">
                <img src={Logo} alt="" />
                <ul className="flex gap-4 items-center">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
            </div>
        </nav>
        
        </>
    )
}