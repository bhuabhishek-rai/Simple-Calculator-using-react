
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
 function App() {

  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);
  const [num3,setNum3] = useState(0);
  const [Add, setAdd] = useState(0);
  const [currentValue , setCurrentValue] = useState(0);

  const calcSum =(e) =>{
    e.preventDefault(); //after submit not refresh
    if(num1===0 || num2===0 || num3===0 )
      {
        alert("please enter all value");
      }
      else{
        let tot = parseInt(num1);
        let Add =(parseInt(num1)*parseInt(num2)*parseInt(num3))/100;
        console.log("ADD=" +Add);
        console.log("typeof" + typeof(Add));
        
        setAdd(parseInt(Add));
        tot += parseInt(Add);
        console.log("tot is::"+ tot);
        setCurrentValue(parseInt(tot));


      }


  }
  const handleClick = (e) =>{
    setAdd(0);
    window.location.reload();
    /*  this is also work
    setNum1(0);
    setNum2(0);
    setNum3(0);
    */


  }

  return (
    <div className="App12">
    <div className="App">

       <div className='container'>
        <div className='heading_text'>
          <h1 className='heading_one'>Simple Interest Calculator</h1>
          <p className= "heading_two">!!Calculate simple interest easily!!</p>
        </div>
        <div className='total_amount_card'>
          <div className='card_text '>
          <h3 className='total_amount_heading'> Interset is!! {Add}₹</h3>
          <p className='total_amount_para'>Total Current Value = {currentValue}₹</p>
          </div>
        </div>
        <form onSubmit={calcSum}>
 
 <div className='input_area'>
     <div className='input_field'>
     <TextField type="number" value={num1 || ""} onChange={(e) => setNum1(e.target.value)} id="outlined-basic" label="₹ Principal amount" variant="outlined" />
     </div>
     <div className='input_field'>
     <TextField type="number" value={num2 || ""} onChange={(e) => setNum2(e.target.value)} id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" />
     </div>
     <div className='input_field'>
     <TextField  type="number" value={num3 || ""} onChange={(e) => setNum3(e.target.value)} id="outlined-basic" label="Time period ( Yr )" variant="outlined" />
     </div>
 </div>
 <div className='button_collection'>
   <Stack spacing={2} direction="row">       
   <Button type='submit' className='btn_one' style={{backgroundColor: 'black'}} variant="contained">Calculate</Button>
   <Button className='btn_two'  onClick={handleClick}  style={{backgroundColor: '#D6FF58'}} variant="outlined">Reset</Button>
   </Stack>
 </div>
 </form>
      </div> 
      </div>
      </div>
     );
     
}

export default App;
