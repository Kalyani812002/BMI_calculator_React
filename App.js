import './App.css';
import './index.css'
import React, {useState} from 'react'
 
function App() {
 
  //  below is define a state 
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
 
  let calcBmi = (event) => {
    //prevent submitting to the server
    event.preventDefault()
 
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))
 
      // Logic for message
 
      if (bmi < 25) {
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }
 
 
  let reload = () => {
    window.location.reload()
  }
 
  return (
    <div className="app">
    <div className='container'>
      <h2 className='center'>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
 
        <div>
          <label>Weight (lbs)</label>   
          <input  type='text' placeholder='Enter a Wegiht value'
          value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
 
        <div>
          <label>Height (in)</label>
          <input type='text' placeholder='Enter a Height value' 
           value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
 
        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
      </form>
 
      <div className='center'>
        <h3>Your BMI is: {bmi}</h3>
        <p>{message}</p>
      </div>
    </div>
  </div>
  );
}
 
export default App;










/*   firstly build ui=user interface
    

 lbs ---full from in libra pondo  units count to weight (taraju)
 firstly write  a all html and then the create a state in key value pair all 4 state (value ,key)



 <div>
          <label>Height (in)</label>
          <input type='text' placeholder='Enter a Height value' 
           value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>


        work this above code is label for the  get a input from user and then
        input placeholder is a html thing
        value is  the height--- is state variable and is  
        put the value for height  and 
        onChange={(e) => setHeight(e.target.value) is work  user change the value call the funtion and set the user type value using setheight function

         same as weight





*/