import react from "react";
import { Component } from "react";
import reactDOM from "react-dom/client";



// export function App()
// {
//   return(<>

//    <button type="button" style={{
//     color:"white",
//     backgroundColor:"green",
//     fontSize:'50px'
//    }}>Submit</button>
  
//   </>)
// }


// export function App()
// {
//   return(<>

//    <button type="button" style={{
//     color:"white",
//     backgroundColor:"green",
//     fontSize:'50px',

//    }}>Submit</button>

//    &nbsp;

//    <button type="button" style={{
//     color:"white",
//     backgroundColor:"green",
//     fontSize:'50px',
//    }}>Cancel</button>
  
//   </>)
// }


// export function App()
// {
//     const btnStyle ={
//         color:"white",
//         backgroundColor:"green",
//         fontSize:'50px',
//     }
//   return(<>

//    <button type="button" style={btnStyle}>Submit</button>

//    &nbsp;

//    <button type="button" style={btnStyle}>Cancel</button>
  
//   </>)
// }




// export function App()
// {
//     const btnStyle ={
//         color:"white",
//         backgroundColor:"green",
//         fontSize:'50px',

//     }

//     const btnCancel ={
//         color:"white",
//         backgroundColor:"red",
//         fontSize:'50px',
//     }
//   return(<>

//    <button type="button" style={btnStyle}>Submit</button>

//    &nbsp;

//    <button type="button" style={btnCancel}>Cancel</button>
  
//   </>)
// }



// export function App()
// {
//     const btnStyle ={
//         color:"white",
//         backgroundColor:"green",
//         fontSize:'50px',
//     }

//     const btnCancel ={
//         color:"white",
//         backgroundColor:"red",
//         fontSize:'50px',
//     }

//     const btnMargin={
//         marginRight:'20px'
//     }

//     const borderRadius={
//         borderRadius:"10px",
//         border:"5px solid black"
//     }

//   return(<>

//    <button type="button" style={{...btnStyle,...btnMargin,...borderRadius}}>Submit</button>

//    <button type="button" style={{...btnCancel,...borderRadius}}>Cancel</button>
  
//   </>)
// }





// export function App()
// {
//     const btnStyle ={
//         color:"white",
//         backgroundColor:"green",
//         fontSize:'50px',
//     }

//     const btnCancel ={
//         color:"white",
//         backgroundColor:"red",
//         fontSize:'50px',
//     }

//     const btnMargin={
//         marginRight:'20px'
//     }

//     const borderRadius={
//         borderRadius:"10px",
        
//     }

//   return(<>

//    <button type="button" style={{...btnStyle,...btnMargin,...borderRadius,...{border:"5px solid black"}}}>Submit</button>

//    <button type="button" style={{...btnCancel,...borderRadius,...{border:"5px solid black"}}}>Cancel</button>
  
//   </>)
// }


// export class App extends Component
// {
//     constructor()
//     {
//         super();
//         this.state={
//             change:true 
//         }
//     }
    
//     changeHandler=()=>{
//         this.setState((state)=>({
//             change:!state.change 
//         }))
//     }


//     render()
//     {
//     //   const btnStyle = {
//     //     color:'white',
//     //     backgroundColor:'green',
//     //     fontSize:'50px'
//     //   }

//     //   if(this.state.change)
//     //   {
//     //     btnStyle.backgroundColor='green'
//     //   }
//     //   else
//     //   {
//     //     btnStyle.backgroundColor='red'
//     //   }

//    // this.state.change ? btnStyle.backgroundColor='green' : btnStyle.backgroundColor='red' 

//    const btnStyle = {
//     color:'white',
//     backgroundColor:this.state.change?'green':'red',
//     fontSize:'50px'
//   }

//       return(<>
//         <button type="button" style={btnStyle} onClick={this.changeHandler}>{this.state.change?'green':'red'}</button>
//       </>)
//     }
// }


//External stylesheet
// import "./app.css";

// export function App()
// {
//     return(<>
    
//     <button className="button">Save</button>
    
//     <p>Hello Ajeet</p>

//     <p className="title">Hi TechWorld!!</p>

//     </>)
// }


// import "./app.css";  //these 2 statement also impact the color style
// import { Home } from "./home";

// export function App()
// {
//     return(<>
    
//     <button className="button">Save</button>
    
//     <p>Hello Ajeet</p>

//     <p className="title">Hi TechWorld!!</p>

//     <br/>

//     <Home/>

//     </>)
// }




// import AppStyle from "./app.module.css";  //these 2 statement also impact the color style
// import { Home } from "./home";

// export function App()
// {
//     return(<>
    
//     <button className={AppStyle.button}>Save</button>
    
//     <p>Hello Ajeet</p>

//     <p className={AppStyle.title}>Hi TechWorld!!</p>

//     <br/>

//     <Home/>

//     </>)
// }



import AppStyle from "./app.module.css";  //these 2 statement also impact the color style
import cx from "classnames";

// export function App()
// {
//     const isFontSize=true;

//     return(<>
    
//     <p className={`${AppStyle.title} ${AppStyle.titleFont}`}>Hello John</p>

//     {/* npm i classnames  {third party package}*/}

//     <p className={cx(AppStyle.title,AppStyle.titleFont)}>Hello TechWorld!!</p>

//     <p className={cx(AppStyle.title,{[AppStyle.titleFont]:false})}>Hello NanoWorld!!</p>

//     <p className={cx(AppStyle.title,{[AppStyle.titleFont]:isFontSize})}>Hello PopWorld!!</p>

//     </>)
// }



export function App()
{
   const isBold = true;
   
    return(<>

    <p className={cx(AppStyle.title,AppStyle.titleFont,{[AppStyle.success]:!isBold})}>Hello John!!</p>
   
    <p className={cx(AppStyle.title,AppStyle.titleFont,{[AppStyle.success]:isBold})}>Hello Sam!!</p>

    </>)
}








