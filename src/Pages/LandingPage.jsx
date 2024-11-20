import Navbar from "../Fragment/Navbar";

const LandingPage = () => {
    return (
        <div className="min-h-screen">
            <Navbar></Navbar>
            <div className="h-full w-full fixed flex justify-center items-center">
                <div className="black-glass h-[60%] w-full mx-20 rounded-xl flex justify-center items-center">
                    <h1 className="text-6xl font-bold font-crimson text-center">COMING SOON</h1>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;