import React from 'react'
import img from "./Capture.PNG";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "./Form.css";

const Form = () => {

    const options = [
  'Software Industry', 'Manufacturing Industry', 'Chemical Industry'
];


  return (
    <div>
        <div className='container'>
            <img src={img} alt="logo" />
            <h3>It’s a delight to have you onboard</h3>
            <p>Help us know you better.<br /> (This is how we optimize Wobot as per your business needs)</p>
            <label className='label-1'>Company Name</label>
            <input className="input1" type="text" placeholder="e.g. Example Inc" />
            <label className="label-2">Industry</label>
            <Dropdown className='myClassName' options={options}  placeholder="Select" />

            <label className='label-3'>Company Size</label>
            <div className="buttons">
            <button className='btn-1'>1-20</button>
            <button className='btn-2'>21-50</button>
            <button className='btn-3'>51-200</button>
            <button className='btn-4'>201-500</button>
            <button className='btn-5'>500+</button>
            
            </div>
            <button className='submit-btn' type="submit">Get Started</button>
        </div>
      
    </div>
  )
}

export default Form
