import React from 'react';

class CButton extends React.Component {
    handleButtonClickB(){
        alert('B');
    }


    render() {

        return (
            <button onClick={this.handleButtonClickB}>{this.props.text}</button>
        )
    }
}

export default CButton;