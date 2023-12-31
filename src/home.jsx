// import "./home.css";
import HStyle from "./home.module.css";

export function Home()
{
    return(<>
    
    <button type="button" className={HStyle.button}>Save</button>

    <p className={HStyle.title}>Hello World!!</p>

    </>)
}