const ContentCel = (props) => {
    const { children } = props;
    return (
        <div className="text-white rounded-2xl h-[70%] absolute w-[100%] bottom-0">
            {children}
        </div>
    )
}

// const ContentCelHead = (props) => {
//     const { images } = props;
//     return (
//         <div className="absolute -translate-y-[80%] grid justify-center items-center min-w-[90%]">
//             <img src={images} alt="" className="h-64 w-64" />
//         </div>
//     )
// }

const ContentCelBody = (props) => {
    const { title, description } = props;
    return (
        <div className="absolute min-h-[85%] bottom-5">
            <div>
                <h2 className="ml-5 text-6xl font-crimson font-semibold mb-5">{title}</h2>
            </div>
            <div className="text-xl">
                {description}
            </div>
        </div>
    )
}

// ContentCel.ContentCelHead = ContentCelHead;
ContentCel.ContentCelBody = ContentCelBody;

export default ContentCel;