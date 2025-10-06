import { useEffect, useState } from "react";
import "./App.css";
import Page from "./component/page";
import useFetch from "./Hooks/useFetch";

function App() {
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [fromAmt, setFromAmt] = useState(1);
    const [toAmt, setToAmt] = useState(0);
    const { data, loading } = useFetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`);

  

    return (
        <>
            <Page data={data} from={from} setFrom={setFrom} to={to} setTo={setTo} fromAmt={fromAmt} setFromAmt={setFromAmt} toAmt={toAmt} setToAmt={setToAmt}/>
        </>
    );
}

export default App;
