import React, { Component } from "react";
import Card from "./Card"
import Operator from "./Operator"
import "./Container.css"
import Result from "./Result";
class Container extends Component {
    state = {
        result: [
            { value: 0 }
        ]
    }
    displayList = "";
    reg1 = /[0-9]/;
    reg2 = /[÷x+-]/;
    reg3 = /[[÷x+-][0-9]/;
    operatorList = ["÷", "x", "+", "-"]
    operatorCounter = 0;
    pointCounter = 1;
    displayChanger = (num) => {
        if (this.displayList.length < 30) {
            if (this.reg1.test(num)) {
                if ((this.displayList.length < 1 &&
                    num === "0") || (num === "0" &&
                        (this.reg2.test(this.displayList[this.displayList.length - 1])))) {
                    this.displayList = this.displayList;
                }
                else {
                    this.displayList += num;
                }
            } else if (this.operatorCounter < 1 && this.displayList.length > 0 && this.reg2.test(num) &&
                !(this.reg2.test(this.displayList[this.displayList.length - 1]))) {
                this.displayList += num;
                this.operatorCounter += 1;
            } else if (num === "." && (this.pointCounter - this.operatorCounter === 1 ||
                this.operatorCounter - this.pointCounter === 1)) {
                this.displayList += num;
                this.pointCounter += 1;
            }

        }

        if (this.displayList.length > 0) {
            this.setState({ result: [{ value: this.displayList }] })
        }


    }

    operator = () => {


        for (var i = 0; i < this.displayList.length; i++) {
            if (this.displayList[i] === this.operatorList[0]) {
                var num = this.displayList.split("÷");
                var answer = num[0] / num[1]
            } else if (this.displayList[i] === this.operatorList[1]) {
                var num = this.displayList.split("x");
                var answer = num[0] * num[1]
            } else if (this.displayList[i] === this.operatorList[2]) {
                var num = this.displayList.split("+");
                var answer = (num[0] * 1) + (num[1] * 1)
            } else if (this.displayList[i] === this.operatorList[3]) {
                var num = this.displayList.split("-");
                var answer = (num[0] * 1) - (num[1] * 1)
            }

        }
        if (this.reg3.test(this.displayList)) {
            this.setState({ result: [{ value: answer }] })
        }

    }
    render() {
        return (
            <div className="Container">
                <Result value={this.state.result[0].value} click={(num) => this.operator()} />
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
                <Operator num="=" click={() => this.operator()} />
                <Card num="0" click={(num) => this.displayChanger(num)} />
                <Card num="." click={(num) => this.displayChanger(num)} />
                <Card num="+" click={(num) => this.displayChanger(num)} />
            </div>
        )
    }
}

export default Container;