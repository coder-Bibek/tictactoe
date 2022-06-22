import PropTypes from "prop-types";

export default function Button({title, isLoading, onClick}) {
    return (
        <button disabled={isLoading} onClick={onClick}>{title}</button>
    )
}

Button.defaultProps = {
    title:"Submit",
    isLoading: false,
    onClick:() => {},
}

Button.propTypes = {
    title: PropTypes.string,
    isLoading: PropTypes.bool, 
    onClick: PropTypes.func
}
