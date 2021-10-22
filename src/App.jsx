import React from 'react';
import Cards from "./Cards";
import Sdata from './Sdata';


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
const App = () => (
  <>
  <h1 className='heading'>List of Top 6 Netflix Series in 2020</h1>
   {Sdata.map((val, index) => {
     console.log(index);
     return(
      <Cards
      key={val.id}
      imgsrc={val.imgsrc}
   title={val.title}
   sname={val.sname}
   link={val.link}
      />

     );
   })
   }
   {/* <Cards 
   imgsrc={Sdata[1].imgsrc}
   title={Sdata[1].title}
   sname={Sdata[1].sname}
   link={Sdata[1].links}
     imgsrc="https://static1.colliderimages.com/wordpress/wp-content/uploads/2020/11/Best-tv-shows-Netflix-V3.jpg"
     title="Extra curricular Series"
     sname="A Netflix Original Series"
     link="https://www.netflix.com/in/title/80990668?source=35" 
   /> */}

{/* <Cards 
   imgsrc={Sdata[2].imgsrc}
   title={Sdata[2].title}
   sname={Sdata[2].sname}
   link={Sdata[2].links}


     imgsrc="https://static1.colliderimages.com/wordpress/wp-content/uploads/2020/11/Best-tv-shows-Netflix-V3.jpg"
     title="Stranger Thing"
     sname="A Netflix Original Series"
     link="https://www.netflix.com/in/title/80990668?source=35" 
   /> */}
   </>
 
);
export default App;