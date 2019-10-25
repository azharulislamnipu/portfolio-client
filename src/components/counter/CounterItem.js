import React from 'react'
import CountUp from 'react-countup';
import { IoIosCode  } from "react-icons/io";
import {  FaAccessibleIcon} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee,faThumbsUp  } from '@fortawesome/free-solid-svg-icons'
const CounterItem = ({number,type,icon}) => {
  library.add(fab, faCheckSquare, faCoffee);
  return (

              <div className="col-lg-3 col-md-3 col-sm-12 text-center">
              
                <div className="growth-counter">
          
                <div className="counter-icon"><FaAccessibleIcon/></div>
               
                <h3 className="growth-counter-number-wrapper">
                <CountUp end={number}  duration={2.75} delay={1}/>
                </h3>
                <div className="growth-counter-title">  {type} </div>
              </div>
              </div>
 
  )
}
export default CounterItem;