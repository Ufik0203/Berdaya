const Button = (props) => {
    const { type='button', children='...', cname} = props;
    return (
        <button type={type} className={`btn rounded-lg px-5 py-2 font-bold ${cname}`} >{children}</button>
    )
}

export default Button;