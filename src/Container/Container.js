import React, { Component } from "react";
import Card from "./Card"
import Operator from "./Operator"
import "./Container.css"
import Result from "./Result";
class Container extends Component {
    state = {
        result: [
            { value: 0 }]
    }

    displayList = "";
    reg1 = /[0-9]/;
    reg2 = /[÷x+-]/;
    reg3 = /[[÷x+-][0-9.]/;
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

    clear = () => {
        this.displayList = "";
        this.operatorCounter = 0;
        this.pointCounter = 1;
        this.setState({ result: [{ value: 0 }] })
    }

    delete = () => {
        if (this.displayList.length > 0) {
            if (this.displayList[this.displayList.length - 1] === ".") {
                this.pointCounter -= 1
            } else if (this.operatorList.includes(this.displayList[this.displayList.length - 1])) {
                this.operatorCounter -= 1
            }
            this.displayList = this.displayList.substring(0, this.displayList.length - 1)
            if (this.displayList.length > 0) {
                this.setState({ result: [{ value: this.displayList }] })
            } else {
                this.setState({ result: [{ value: 0 }] })
            }
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
            if (Number.isInteger(answer)) {
                this.pointCounter = 1
            } else {
                this.pointCounter = 2
            }
            this.displayList = '' + answer
            this.operatorCounter = 0
            this.setState({ result: [{ value: answer }] })
        }

    }
    
   specialOperator = (type) => {
	var run = true
	var num = Number(this.displayList)
   	for (var i=0; i<this.displayList.length; i++){
	    if (this.operatorList.includes(this.displayList[i])){
		    run = false
                    break;
	    }
        }
	if (run === true){
	    if (type === "square"){
		num = Math.pow(num, 2)
	    } else if (type === "square-root"){
		num =  Math.sqrt(num) 
	    }
	this.displayList = num.toString()
	} 
	this.setState({ result: [{ value: this.displayList}] })
   }
    render() {
        return (
            <div className="Container">
                <Result value={this.state.result[0].value} click={(num) => this.operator()} />
                <Card num="&#8730;x" click={() => this.specialOperator("square-root")} />
                <Card num="x²" click={() => this.specialOperator("square")} />
                <Card num="C" click={() => this.clear()} />
                <Card num="÷" click={(num) => this.displayChanger(num)} />
                <Card num="7" click={(num) => this.displayChanger(num)} />
                <Card num="8" click={(num) => this.displayChanger(num)} />
                <Card num="9" click={(num) => this.displayChanger(num)} />
                <Card num="x" click={(num) => this.displayChanger(num)} />
                <Card num="4" click={(num) => this.displayChanger(num)} />
                <Card num="5" click={(num) => this.displayChanger(num)} />
                <Card num="6" click={(num) => this.displayChanger(num)} />
                <Card num="-" click={(num) => this.displayChanger(num)} />
                <Card num="1" click={(num) => this.displayChanger(num)} />
                <Card num="2" click={(num) => this.displayChanger(num)} />
                <Card num="3" click={(num) => this.displayChanger(num)} />
                <Card num="+" click={(num) => this.displayChanger(num)} />
                <Card num="0" click={(num) => this.displayChanger(num)} />
                <Card num="." click={(num) => this.displayChanger(num)} />
                <Card num={<img src="delete.png" className="img1"></img>} click={() => this.delete()} />
                <Operator num="=" click={() => this.operator()} />
            </div>
        )
    }
}

export default Container;
