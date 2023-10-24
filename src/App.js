import { TextField, colors } from '@mui/material';
import './App.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useState } from 'react';

function App() {

  //js code 

  const[Bmi, setBmi]= useState(0)
  const[Bmimeter,setBmimeter]= useState(NaN)
  const[Weight, setWeight]= useState(0)
  const[Height, setHeight]= useState(0)
  const[isWeight, setisWeight]= useState(true)
  const[isHeight, setisHeight]= useState(true)

  const Validate =(e)=>
  {
    const{name,value}=e.target

    if(!!value.match(/^[0-9]*.?[0-9]+$/))  // !! is given to convert into boolean value
    {
      //Weight

      if(name==="Weight"){
        setWeight(value)
        setisWeight(true)
      }

      //Height

      else if(name==="Height"){
        setHeight(value)
        setisHeight(true)
      }
    }
    else{
      if(name==="Weight"){
        setWeight(value)
        setisWeight(false)
      }
        if(name==="Height"){
        setHeight(value)
        setisHeight(false)
      }
    }
  }

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!Weight || !Height) {
      setBmimeter("Enter Valid Data");
    } else {
      const bmi = Weight / ((Height * Height) / 10000);
      setBmi(bmi);
  
      if (bmi < 18.6) {
        setBmimeter("Under Weight..!!");
      } else if (bmi >= 18.6 && bmi < 24.9) {
        setBmimeter("Normal");
      } else {
        setBmimeter("Over Weight..!!");
      }
    }
  };

 

  const handleReset=(e)=>{
    setBmi(0)
    setBmimeter(NaN)
    setWeight(0)
    setHeight(0)
    setisHeight(0)
    setisWeight(0)
  }





  return (
    <div style={{height:"100vh", backgroundColor:'lightgreen'}} className='d-flex justify-content-center align-items-center w-100'>


      <div  style={{width:'500px'}} className='bg-success p-5 rounded'>
        <h1 className='text-light'><b>BMI Calculator</b></h1>
        <p className='text-light'><b>Find your Body Mass Index</b></p>

      <form  onSubmit={handleCalculate}>
        <div style={{height:'350px'}} className='container flex-column bg-light d-flex justify-content-center align-items-center rounded'>
  
        <div className='mb-4 text-center'>
            <h1>{Bmi.toFixed(1)} <span className='fs-4'>kg/m<sup>2</sup> </span></h1>
            <h4 className={Bmimeter === 'Normal' ? 'green' : Bmimeter === 'Under Weight..!!' || Bmimeter === 'Over Weight..!!' ? 'red' : ''}>{Bmimeter}</h4>
           </div>
  
            <div className='mb-3'>
            <TextField name='Weight' id="standard-basic" value={Weight || ''} onChange={(e)=>Validate(e)} label="WEIGHT(kg)" variant="standard" />
            </div>
  
            <div className='mb-3'>
            <TextField name='Height' id="standard-basic" value={Height || ''} onChange={(e)=>Validate(e)} label="HEIGHT(cm)" variant="standard" />
            </div>
  
            <Stack direction="row" spacing={2}>
            <Button disabled={isWeight && isHeight?false:true} 
           type='onSubmit' color="success" className='mt-4 ' variant="contained">Calculate</Button>
            <Button className='mt-4' color="error" onClick={handleReset} variant="outlined">Reset </Button>
            </Stack>
            
        </div>
      </form>


      </div>
    
    </div>
  );
}

export default App;
