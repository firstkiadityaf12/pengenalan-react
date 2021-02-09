import React from "react"

class Alert extends React.Component {
    render(){
        let bg = "alert alert-" + this.props.type
        let message = this.props.message
        return(
            <div className={bg}>
                {message}
            </div>
        )
    }
}

//export
export default Alert;
