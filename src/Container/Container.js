import React, { Component } from "react";
import Card from "./Card"
import "./Container.css"
import Result from "./Result";
class Container extends Component {
    state = {
        result: [
            { value: 0 }
        ]
    }
    displayList = "";
    displayChanger = (num) => {
        if (this.displayList.length < 16) {
            this.displayList += num;
        }

        this.setState({ result: [{ value: this.displayList }] })
    }
    render() {
        return (
            <div className="Container"><Result value={this.state.result[0].value} />
                <Card num="7" click={(num) => this.displayChanger(num)} />
                <Card num="8" click={(num) => this.displayChanger(num)} />
                <Card num="9" click={(num) => this.displayChanger(num)} />
                <Card num="÷" click={(num) => this.displayChanger(num)} />
                <Card num="4" click={(num) => this.displayChanger(num)} />
                <Card num="5" click={(num) => this.displayChanger(num)} />
                <Card num="6" click={(num) => this.displayChanger(num)} />
                <Card num="x" click={(num) => this.displayChanger(num)} />
                <Card num="1" click={(num) => this.displayChanger(num)} />
                <Card num="2" click={(num) => this.displayChanger(num)} />
                <Card num="3" click={(num) => this.displayChanger(num)} />
                <Card num="-" click={(num) => this.displayChanger(num)} />
                <Card num="=" /><Card num="0" click={(num) => this.displayChanger(num)} />
                <Card num="." click={(num) => this.displayChanger(num)} />
                <Card num="+" click={(num) => this.displayChanger(num)} />
            </div>
        )
    }
}

export default Container;