import React from "react";

function Form(props) {
    return (
        <form className="space-y-4" {...props}>
            {props.children}
        </form>
    );
}

export default Form;
