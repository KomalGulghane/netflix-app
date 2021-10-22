import React from 'react';
import ReactDOM from 'react-dom';
import Cards from "./Cards";
import "./index.css";
import Sdata from './Sdata';
import App from './App';


// function ncard(val){
//    console.log(val);
//    return (
//     <Cards 
//     imgsrc={Sdata[0].imgsrc}
//     title={Sdata[0].title}
//     sname={Sdata[0].sname}
//     link={Sdata[0].links}
//     />
//    );
// }
ReactDOM.render(<App />,document.getElementById('root')
);