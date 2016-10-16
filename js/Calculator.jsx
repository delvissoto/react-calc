import React from 'react';
import CButton from './CButton.jsx';

class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            result: 0
        }
    }

    render() {

        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td colSpan="3"><p>{this.state.result}</p></td>
                        <td><CButton text="DEL"></CButton></td>
                    </tr>
                    <tr>
                        <td><CButton text="7"></CButton></td>
                        <td><CButton text="8"></CButton></td>
                        <td><CButton text="9"></CButton></td>
                        <td><CButton text="&#247;"></CButton></td>
                        </tr>
                    <tr>
                        <td><CButton text="4"></CButton></td>
                        <td><CButton text="5"></CButton></td>
                        <td><CButton text="6"></CButton></td>
                        <td><CButton text="&#215;"></CButton></td>
                    </tr>
                    <tr>
                        <td><CButton text="1"></CButton></td>
                        <td><CButton text="2"></CButton></td>
                        <td><CButton text="3"></CButton></td>
                        <td><CButton text="-"></CButton></td>
                    </tr>
                    <tr>
                        <td><CButton text="."></CButton></td>
                        <td><CButton text="0"></CButton></td>
                        <td><CButton text="="></CButton></td>
                        <td><CButton text="+"></CButton></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Calculator;