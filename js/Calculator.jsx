import React from 'react';
import CButton from './CButton.jsx';

class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            result: 0,
            expression: ''
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.clearHandler = this.clearHandler.bind(this);
        this.evalThis = this.evalThis.bind(this);
    }

    changeHandler(value) {
        this.setState({
            expression: this.state.expression + value
        });
    }

    evalThis(){
        var result = eval(this.state.expression);
        this.setState({
            result: result,
            expression: result
        });
    }

    clearHandler(){
        var expr = (this.state.expression == this.state.result) ? "" : this.state.expression;
        this.setState({
            expression: (expr.substring(0, (expr.length - 1))),
            result: 0
        });
    }

    render() {

        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td colSpan="3"><p>{(this.state.expression == "")?this.state.result:this.state.expression}</p></td>
                        <td><CButton text="DEL" value="DEL" type="opt" onClick={this.clearHandler}></CButton></td>
                    </tr>
                    <tr>
                        <td><CButton text="7" value="7" type="arg" onClick={this.changeHandler}></CButton></td>
                        <td><CButton text="8" value="8" type="arg" onClick={this.changeHandler}></CButton></td>
                        <td><CButton text="9" value="9" type="arg" onClick={this.changeHandler}></CButton></td>
                        <td><CButton text="&#247;" value="/" type="opt" onClick={this.changeHandler}></CButton></td>
                        </tr>
                    <tr>
                        <td><CButton text="4" value="4" type="arg" onClick={this.changeHandler}></CButton></td>
                        <td><CButton text="5" value="5" type="arg" onClick={this.changeHandler}></CButton></td>
                        <td><CButton text="6" value="6" type="arg" onClick={this.changeHandler}></CButton></td>
                        <td><CButton text="&#215;" value="*" type="opt" onClick={this.changeHandler}></CButton></td>
                    </tr>
                    <tr>
                        <td><CButton text="1" value="1" type="arg" onClick={this.changeHandler}></CButton></td>
                        <td><CButton text="2" value="2" type="arg" onClick={this.changeHandler}></CButton></td>
                        <td><CButton text="3" value="3" type="arg" onClick={this.changeHandler}></CButton></td>
                        <td><CButton text="-" value="-" type="opt" onClick={this.changeHandler}></CButton></td>
                    </tr>
                    <tr>
                        <td><CButton text="." value="." type="arg" onClick={this.changeHandler}></CButton></td>
                        <td><CButton text="0" value="0" type="arg" onClick={this.changeHandler}></CButton></td>
                        <td><CButton text="=" value="=" type="opt" onClick={this.evalThis}></CButton></td>
                        <td><CButton text="+" value="+" type="opt" onClick={this.changeHandler}></CButton></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Calculator;
