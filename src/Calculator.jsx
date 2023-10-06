import React, {useState} from "react";
import './calculator.css'

function Calculator(){
    const [value, setValue] = useState('');
    
    return(
        <>
            <div className="main">
                <h1>Calculate me!</h1>
                <div className="container">
                    <input type="text" disabled value={value} onChange={(e) => setValue(e.target.value)}/>
                    <div className="row">
                        <button className="button" onClick={e => setValue('')}>AC</button>
                        <button className="button" onClick={e => setValue (r => r.slice(0, r.length - 1))}>CE</button>
                        <button className="button" onClick={e => setValue(r => `${r}00`)}>00</button>
                        <button className="button" onClick={e => setValue (r => `${r}*`)}>*</button>
                    </div>
                    <div className="row">
                        <button className="button" onClick={e => setValue(r => `${r}7`)}>7</button>
                        <button className="button" onClick={e => setValue (r => `${r}8`)}>8</button>
                        <button className="button" onClick={e => setValue (r => `${r}9`)}>9</button>
                        <button className="button" onClick={e => setValue (r => `${r}/`)}>/</button>
                    </div>
                    <div className="row">
                        <button className="button" onClick={e => setValue (r => `${r}4`)}>4</button>
                        <button className="button" onClick={e => setValue (r => `${r}5`)}>5</button>
                        <button className="button" onClick={e => setValue (r => `${r}6`)}>6</button>
                        <button className="button" onClick={e => setValue (r => `${r}+`)}>+</button>
                    </div>
                    <div className="row">
                        <button className="button" onClick={e => setValue (r => `${r}1`)}>1</button>
                        <button className="button" onClick={e => setValue (r => `${r}2`)}>2</button>
                        <button className="button" onClick={e => setValue (r => `${r}3`)}>3</button>
                        <button className="button" onClick={e => setValue (r => `${r}-`)}>-</button>
                    </div>
                    <div className="row">
                        <button className="button" onClick={e => setValue (r => `${r}0`)}>0</button>
                        <button className="button" onClick={e => setValue (r => `${r}.`)}>.</button>
                        <button className="button" onClick={e => setValue (r => `${r}%`)}>%</button>
                        <button className="button" onClick={e => setValue (r => eval(r))}>=</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator