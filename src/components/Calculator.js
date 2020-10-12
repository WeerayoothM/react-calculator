import React, { useState } from 'react'
import { Typography, Button, Col, Divider, Input, List, Row } from "antd";

function Calculator() {
    const [result, setResult] = useState(0)
    const [numDisplay, setNumDisplay] = useState("")

    const doSomething = (value) => {
        // console.log(isNaN(+value))
        let newResult = result;
        let newNumDisplay = numDisplay;
        if (!isNaN(+value)) {
            newNumDisplay += value
        }
        setNumDisplay(newNumDisplay)
    }

    const buttonStyle = { margin: '1px', width: '70px' }

    return (
        <>
            <Row justify='center'>
                <div className='display'>
                    <h1 style={{ color: '#944317' }}>{numDisplay}</h1>
                </div>
            </Row>
            <Row justify='center'>
                <Col>
                    <Row justify="center">
                        <Col ><Button onClick={() => doSomething('AC')} style={buttonStyle} type="primary" size="middle">AC</Button></Col>
                        <Col ><Button onClick={() => doSomething('+/-')} style={buttonStyle} type="primary" size="middle">{'+/-'}</Button></Col>
                        <Col ><Button onClick={() => doSomething('%')} style={buttonStyle} type="primary" size="middle">%</Button></Col>
                        <Col ><Button onClick={() => doSomething('/')} style={buttonStyle} type="primary" size="middle">{'/'}</Button></Col>
                    </Row>
                    <Row justify="center">
                        <Col ><Button onClick={() => doSomething('7')} style={buttonStyle} type="primary" size="middle">7</Button></Col>
                        <Col ><Button onClick={() => doSomething('8')} style={buttonStyle} type="primary" size="middle">8</Button></Col>
                        <Col ><Button onClick={() => doSomething('9')} style={buttonStyle} type="primary" size="middle">9</Button></Col>
                        <Col ><Button onClick={() => doSomething('*')} style={buttonStyle} type="primary" size="middle">{'x'}</Button></Col>
                    </Row>
                    <Row justify="center">
                        <Col ><Button onClick={() => doSomething('4')} style={buttonStyle} type="primary" size="middle">4</Button></Col>
                        <Col ><Button onClick={() => doSomething('5')} style={buttonStyle} type="primary" size="middle">5</Button></Col>
                        <Col ><Button onClick={() => doSomething('6')} style={buttonStyle} type="primary" size="middle">6</Button></Col>
                        <Col ><Button onClick={() => doSomething('-')} style={buttonStyle} type="primary" size="middle">{'-'}</Button></Col>
                    </Row>
                    <Row justify="center">
                        <Col ><Button onClick={() => doSomething('1')} style={buttonStyle} type="primary" size="middle">1</Button></Col>
                        <Col ><Button onClick={() => doSomething('2')} style={buttonStyle} type="primary" size="middle">2</Button></Col>
                        <Col ><Button onClick={() => doSomething('3')} style={buttonStyle} type="primary" size="middle">3</Button></Col>
                        <Col ><Button onClick={() => doSomething('+')} style={buttonStyle} type="primary" size="middle">{'+'}</Button></Col>
                    </Row>
                    <Row justify="center" style={{ width: "100%" }}>
                        <Col ><Button onClick={() => doSomething('0')} style={{ margin: '1px', width: '142px' }} type="primary" size="middle">0</Button></Col>
                        <Col ><Button onClick={() => doSomething('.')} style={buttonStyle} type="primary" size="middle">.</Button></Col>
                        <Col ><Button onClick={() => doSomething('=')} style={buttonStyle} type="primary" size="middle">{'='}</Button></Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Calculator
