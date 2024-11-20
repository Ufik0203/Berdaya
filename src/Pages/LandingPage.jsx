import Navbar from "../Fragment/Navbar";

const LandingPage = () => {
    return (
        <div className="min-h-screen">
            <Navbar></Navbar>
            <div className="h-full w-full fixed flex justify-center items-center">
                <div className="bg-[url('./images/roadmap.png')] min-h-[50rem] w-full mx-20 rounded-xl flex justify-center items-center mb-36 bg-cover bg-center bg-no-repeat">
                </div>
            </div>
        </div>
    )
}

export default LandingPage;