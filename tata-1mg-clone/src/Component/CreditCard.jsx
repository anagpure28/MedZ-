
import React, { useState } from 'react';
import "./CreditCard.css"
export const CreditCard=() =>{

  const [cardNumber, setCardNumber] = useState('################');
  const [cardHolder, setCardHolder] = useState('full name');
  const [expMonth, setExpMonth] = useState('mm');
  const [expYear, setExpYear] = useState('yy');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  }

  const handleCardHolderChange = (event) => {
    setCardHolder(event.target.value);
  }

  const handleExpMonthChange = (event) => {
    setExpMonth(event.target.value);
  }

  const handleExpYearChange = (event) => {
    setExpYear(event.target.value);
  }

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  }

  const handleCvvMouseEnter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
  }

  const handleCvvMouseLeave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
  }

  return (
    <div className="container">
      <div className="card-container">
        <div className="front">
          <div className="image">
            <img src="image/chip.png" alt="" />
            <img src="image/visa.png" alt="" />
          </div>
          <div className="card-number-box">{cardNumber}</div>
          <div className="flexbox">
            <div className="box">
              <span>card holder</span>
              <div className="card-holder-name">{cardHolder}</div>
            </div>
            <div className="box">
              <span>expires</span>
              <div className="expiration">
                <span className="exp-month">{expMonth}</span>
                <span className="exp-year">{expYear}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="back">
          <div className="stripe"></div>
          <div className="box">
            <span>cvv</span>
            <div className="cvv-box">{cvv}</div>
            <img src="image/visa.png" alt="" />
          </div>
        </div>
      </div>
      <form>
        <div className="inputBox">
          <span>card number</span>
          <input type="text" maxLength="16" className="card-number-input" onChange={handleCardNumberChange} />
        </div>
        <div className="inputBox">
          <span>card holder</span>
          <input type="text" className="card-holder-input" onChange={handleCardHolderChange} />
        </div>
        <div className="flexbox">
          <div className="inputBox">
            <span>expiration mm</span>
            <select name="" id="" className="month-input" onChange={handleExpMonthChange}>
              <option value="month" selected disabled>month</option>
              
                   <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
            </div>
            <div className="inputBox">
                <span>expiration yy</span>
                <select name="" id="" className="year-input">
                    <option value="year" selected disabled>year</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                </select>
            </div>
            <div className="inputBox">
                <span>cvv</span>
                <input type="text" maxLength="4" className="cvv-input" />
            </div>
        </div>
        <input type="submit" value="submit" className="submit-btn" />
    </form>
</div>
);
  }
