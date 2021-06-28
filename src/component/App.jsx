
import './App.css';
import Img2 from '../images/img-12.jfif';
import Img1 from '../images/img-2.jfif';
import Profile from '../images/profile-1.jpg';
import Three from '../images/more-horizontal.svg';
import Insta from '../images/instagram.svg';
import Twit from '../images/twitter.svg';
import Face from '../images/facebook.svg';
import {useState} from 'react';
function App() {
 
  const[classes,changeclass]=useState({
      hover : "box1",
      mainbox : "cold-lg-6 cold-sm-12 cold-md-12 col1n",
      hoverimg : "img",
      visi : "row invisi"
  });
  const[classes2,changeclass2]=useState({
    hover : "box1 boxs",
    mainbox : "cold-lg-6 cold-sm-12 cold-md-12 col1n",
    hoverimg : "img",
    visi : "row invisi"
});
  function mouseinside(x){
   
    console.log("xin",x);
    if(x === "card1")
    {
        changeclass({
           ...classes,
           hover : "box2",
          mainbox : "cold-lg-6 cold-sm-12 cold-md-12 col2n",
           hoverimg : "imgh"
          
        });
    }
    else if(x === "card3")
    {
      changeclass({
        ...classes,
        hover : "box2",
       mainbox : "cold-lg-6 cold-sm-12 cold-md-12 col2n",
        hoverimg : "imgh",
       visi : "row visi"
     });
    }
    else if(x === "card4")
    {
      changeclass2({
        ...classes2,
        hover : "box2",
       mainbox : "cold-lg-6 cold-sm-12 cold-md-12 col2n",
        hoverimg : "imgh",
       visi : "row visi"
     });
    }
    else
    {
      changeclass2({
        ...classes2,
        hover : "box2",
       mainbox : "cold-lg-6 cold-sm-12 cold-md-12 col2n",
        hoverimg : "imgh",
       visi : "row visi"
     });
    }

  }
  function mouseoutside(x){
    console.log("xout",x);
    if(x === "card1")
    {
        changeclass({
           ...classes,
           hover : "box1",
          mainbox : "cold-lg-6 cold-sm-12 cold-md-12 col1n",
           hoverimg : "img",
          visi : "row invisi"
        });
    }
    else if(x === "card3")
    {
      changeclass({
        ...classes,
        hover : "box2",
        mainbox : "cold-lg-6 cold-sm-12 cold-md-12 col2n",
         hoverimg : "imgh",
         visi : "row invisi"
     });
    }
    else if(x === "card4")
    {
      changeclass2({
        ...classes2,
        hover : "box2",
        mainbox : "cold-lg-6 cold-sm-12 cold-md-12 col2n",
         hoverimg : "imgh",
        visi : "row invisi"
     });
    }
    else
    {
      changeclass2({
        ...classes2,
        hover : "box1",
       mainbox : "cold-lg-6 cold-sm-12 cold-md-12 col1n",
        hoverimg : "img",
       visi : "row invisi"
     });
    }
  }
  return (
    <div className="container App">
      <div class="row  approw">
        <div class={classes.mainbox} onMouseEnter={() =>mouseinside("card1") }
        onMouseLeave={() =>mouseoutside("card1") }>
        <img class={classes.hover} src={Img2} onMouseEnter={() =>mouseinside("card3") }
        onMouseLeave={() =>mouseoutside("card3") }/>
        <div class={classes.visi}>
        <img src={Face} class="icon" />
        <img src={Insta} class="icon"/>
        <img src={Twit} class="icon"/>
        </div>
        <div class="d-flex flex-row content">
        
         <img src={Profile} class={classes.hoverimg}/>
         
          <div class="details">
          <h1 class="title">Avneesh</h1>
          <h4 class="post">Manager</h4>
          </div>
          <img src={Three} class=" img3 ml-auto"/>
        </div>
        </div>
        <div class={classes2.mainbox} onMouseEnter={() =>mouseinside("card2") }
        onMouseLeave={() =>mouseoutside("card2") }>
        <img class={classes2.hover} src={Img1}  onMouseEnter={() =>mouseinside("card4") }
        onMouseLeave={() =>mouseoutside("card4") }/>
        <div class={classes2.visi}>
        <img src={Face} class="icon" />
        <img src={Insta} class="icon"/>
        <img src={Twit} class="icon"/>
        </div>
        <div class="d-flex flex-row content">
        
         <img src={Profile} class={classes2.hoverimg}/>
         
          <div class="details">
          <h1 class="title">Avneesh</h1>
          <h4 class="post">Manager</h4>
          </div>
          <img src={Three} class=" img3 ml-auto"/>
        </div>
        </div>
       
      </div>
      
    </div>
  );
}

export default App;
