import Navbar from "../Fragment/Navbar";

const LandingPage = () => {
    return (
        <div className="min-h-screen">
            <Navbar></Navbar>
            <div className="h-full w-full fixed flex justify-center items-center">
                <div className="min-h-[50rem] w-full md:mx-20 rounded-xl flex justify-center items-center mb-36">
                    <img src="./images/roadmap.png" alt="" className="md:h-[50rem] h-[20rem] w-[32rem] md:w-full md:mx-20 rounded-xl bg-cover bg-center bg-no-repeat" />
                </div>
            </div>
        </div>
    )
}

export default LandingPage;