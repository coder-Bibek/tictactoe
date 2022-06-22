import PropTypes from "prop-types";

export default function Button({title, isLoading}) {
    return (
        <button disabled={isLoading}>{title}</button>
    )
}

Button.defaultProps = {
    title:"Submit",
    isLoading: false,
}

Button.propTypes = {
    title: PropTypes.string,
    isLoading: PropTypes.bool 
}
