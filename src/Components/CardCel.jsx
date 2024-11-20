const CardCel = (props) => {
    const { children } = props
    return (
        <div className="max-w-[16rem] h-max rounded-xl border border-white select-none hover:cursor-pointer mt-5">
            {children}
        </div>
    )
}

const HeaderCard = (props) => {
    const { image, title, topic } = props
    return (
        <div className="relative">
            <div className="w-full h-full absolute bg-black rounded-xl bg-opacity-15"></div>
            <img src={image} alt="" className="bg-cover bg-center bg-no-repeat rounded-xl h-60" />
            <div className="absolute bottom-10 text-white font-bold text-2xl ml-5 w-full">
                <p className="text-sm my-5 text-yellow-300">{topic}</p>
                <h3 className="font-crimson text-wrap">{title}</h3>
            </div>
        </div>
    )
}

const FootCard = (props) => {
    const { children } = props
    return (
        <div>
            <h3 className="font-crimson">{children}</h3>
        </div>
    )
}

CardCel.HeaderCard = HeaderCard;
CardCel.FooterCard = FootCard;

export default CardCel;