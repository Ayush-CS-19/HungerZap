import { useRouteError } from "react-router-dom";
const Error = () =>{
    const err = useRouteError();
    return(
        <>
        <h1> OOPS SOMETHING WENT WRONG</h1>
        <h1>{err.status}</h1>
        <h1>{err.statusText}</h1>
        </>
    )
}
export default Error;