import React from "react";
import "./Calculator.scss";


class Calculator extends React.Component {

    state = {
        number1: '',
        number2: '',
        result: ''
    }

    sum = () => {
        const exp = this.state.number1 + ' + ' + this.state.number2 + ' = ';
        this.setState({
            result: exp + (parseInt(this.state.number1) + parseInt(this.state.number2)).toString()
        })
    }

    subtract = () => {
        const exp = this.state.number1 + ' - ' + this.state.number2 + ' = ';
        this.setState({
            result: exp + (parseInt(this.state.number1) - parseInt(this.state.number2)).toString()
        })
    }

    multiply = () => {
        const exp = this.state.number1 + ' * ' + this.state.number2 + ' = ';
        this.setState({
            result: exp + (parseInt(this.state.number1) * parseInt(this.state.number2)).toString()
        })
    }

    divide = () => {
        const exp = this.state.number1 + ' / ' + this.state.number2 + ' = ';
        this.setState({
            result: exp + (parseInt(this.state.number1) / parseInt(this.state.number2)).toString()
        })
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    render() {

        const number1 = this.state.number1
        const number2 = this.state.number2

        return (

            <div className="calc">

                <section className="row">

                    <section className="calc">

                        <label htmlFor="number1">Number 1:</label>
                        <input type='text' name='number1' value={number1} onChange={this.handleChange}></input>

                    </section>

                    <section className="calc">

                        <label htmlFor="number2">Number 2:</label>
                        <input type='text' name='number2' value={number2} onChange={this.handleChange}></input>

                    </section>

                    <section className="calc">

                        <label htmlFor="result">Result</label>
                        <input name='result' defaultValue={this.state.result}></input>

                    </section>
                </section>

                <section className="btn">

                    <button onClick={this.sum}>Add</button>

                    <button onClick={this.subtract}>Subtract</button>

                    <button onClick={this.multiply}>Multiply</button>

                    <button onClick={this.divide}>Divide</button>

                </section>

            </div>

        )



    }
}

export default Calculator