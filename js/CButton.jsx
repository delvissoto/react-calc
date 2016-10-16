import React from 'react';

class CButton extends React.Component {

    constructor(props) {
        super(props);

        this.changeHandler = this.changeHandler.bind(this);
    };

    changeHandler(e) {
        if (typeof this.props.onClick === 'function') {
            this.props.onClick(this.props.value );
        }
    }


    render() {
        return (
            <button onClick={this.changeHandler}>{this.props.text}</button>
        )
    }
}

CButton.propTypes= {
    value:  React.PropTypes.string,
    onClick:   React.PropTypes.func
};

export default CButton;