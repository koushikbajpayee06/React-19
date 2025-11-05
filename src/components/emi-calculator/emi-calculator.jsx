import { useState } from "react"

export function EMICalculator(){
    const [amount, setAmount] = useState(100000);
    const [years, setYears] = useState(1);
    const [rate, setRate] = useState(10.45);
    const [emi,SetEMI] = useState(0);
    const [toggleResult, setToggleResult] = useState('d-none')

    function handleAmountChange(e){
        setAmount(e.target.value);
    }

    function handleYearChange(e){
        setYears(e.target.value);
    }
    function handleRateChange(e){
        setRate(e.target.value);
    }

    function handleCalculateClick(){
        var P = parseInt(amount);
        var N = parseInt(years)*12;
        var R = parseFloat(rate)/12/100;

        let EMI = P * R * (Math.pow(1+R,N))/(Math.pow(1+R,N)-1);
        SetEMI(EMI);
         setToggleResult('d-block')

    }
    return (
        <div className="container-fluid">
           <div className="p-4 border border-2 mt-4">
                <h2 className="text-center">Personal Loan Calculator</h2>
                <div className="row my-4">
                    <div className="col">
                        Amount you need &#8377; <input type="text" onChange={handleAmountChange} size="10"  value={amount}/>
                    </div>
                    <div className="col">
                        for <input type="text" size="2" value={years} onChange={handleYearChange}/> Years
                    </div>
                    <div className="col">
                        interest rate <input type="text" size="4"  value={rate} onChange={handleRateChange}/> %
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col">
                        <input type="range" onChange={handleAmountChange} value={amount}className="form-range" min="100000" max="1000000" step="10000"/>
                        <div>
                            <span>&#8377; 1,00,000/-</span>
                            <span className="float-end">&#8377; 10,00,000/-</span>
                        </div>
                    </div>
                    <div className="col">
                        <input type="range" onChange={handleYearChange} value={years} className="form-range" min="1" max="5" step="1"/>
                        <div>
                            <span>1 Year</span>
                            <span className="float-end">5 Year</span>
                        </div>
                    </div>
                    <div className="col">
                        <input type="range" onChange={handleRateChange} value={rate} className="form-range" min="10.45" max="18.75" step="0.01"/>
                        <div>
                            <span>10.45%</span>
                            <span className="float-end">18.75%</span>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col text-end">
                        <button onClick={handleCalculateClick} className="btn btn-primary">Calculate</button>
                    </div>
                </div>
                <div className={`row mt-5 ${toggleResult}`}>
                    <div className="col">
                        <div className="text-center">
                            Your EMI amount is <span className="fw-bold">{emi.toLocaleString('en-in',{style:"currency", currency:"INR",minimumFractionDigits:2, maximumFractionDigits:2})}</span> for next {years*12} months                        
                        </div>
                    </div>
                </div>
           </div>    
        </div>
    )
}