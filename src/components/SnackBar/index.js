import React, { Component } from 'react';

class SnackBar extends Component {

    componentDidMount(){
        setTimeout(() => {
            const toast = document.getElementById("toast")
            toast.classList.remove("mdl-snackbar--active");
        }, 3000);
    }

    render() {
        return (
            <div>
                <div id="toast" className="mdl-js-snackbar mdl-snackbar mdl-snackbar--active">
                    <div className="mdl-snackbar__text">{this.props.message}</div>
                    <button className="mdl-snackbar__action" type="button"></button>
                </div>
            </div>
        )
    }
}


export default SnackBar
