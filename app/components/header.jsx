export default function Header() { 
    return (
        <header>
            <div className="h-8 bg-lightBlue" ></div>
            <nav className="bg-deepBlue flex lg:gap-96 md:gap-40 justify-center items-center p-4">
                <div>
                    <img className=""  src="/logo.svg" alt="logo" />
                </div>
                <div>
                    <h1 className="text-sky-100 text-xl ">LOG-OUT</h1>
                </div>
            </nav>
        </header>

    )
}