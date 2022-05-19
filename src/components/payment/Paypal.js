import "./Paypal.css";
import React, {useState} from "react";
import ReactDOM from "react-dom"
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });


const Paypal = () => {
  const [amount, setAmount] = useState(0)
  const createOrder = (data, actions) => {

        return actions.order.create({
    
          purchase_units: [
    
            {
    
              amount: {
                value: amount,
    
              },
    
            },
    
          ],
    
        });
    
      }
    
      const onApprove = (data, actions) => {
        return actions.order.capture();
      }
      return (
        
          <div className="paypal-styling" style={{minHeight:"88vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", background:"#E3E3E3"}}>
        <div className="paypal-inner-styling" style={{border:"1px solid black", minHeight:"60vh",  padding:"2rem"}}>
      <div style={{marginBottom:"1rem"}}>
      <label>Enter Amount to Donate: </label>
       <input style={{ padding:"0.2rem 0rem"}} type="number" onChange={(e)=> setAmount(e.target.value)} />
      </div>
       <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
    
        onApprove={(data, actions) => onApprove(data, actions)}
    
       />
        </div>
        </div>
      );
    }

export default Paypal