import React from 'react';
import {months} from '../utility'
 const Order = ({order})=>{
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return(
        <div className="row">
            <div className="col s6 m3">
               <img src={"/photoOfCrop"+"/"+order.name+".jpg"} className="responsive-img"/>
            </div>
            <div className="col s6 m6">
                <p><b>Total Amount</b> {order.amount} Kg</p>
                <p><b>  Item Purchased At cost </b>{order.rate} Rs</p>
            </div>
        </div>

    )
}

export default Order;
