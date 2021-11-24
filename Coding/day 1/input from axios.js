import "./styles.css";

import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
    // let login= https://api.github.com/users
    const [myData, setMydata] = useState();
    const [text, setText] = useState("");

    const getUsers = () => {
        axios
            .get(`https://api.github.com/users`)
            .then(({ data }) => {
                let logindata = data;
                setMydata(logindata);
            })
            .catch((e) => {
                console.log("something went wrong", e);
            });
    };

    useEffect(() => {
        getUsers();
    }, []);

    const handleChange = (e) => {
        setText(e.target.value);
        console.log(text);
    };

    const handleClick = () => {
        let userData = myData;
        // console.log(userData);
        console.log(text);
        let arr = [];
        userData.forEach((el) => {
            let temp = el.login.split("");
            // console.log(temp.includes(text));
            arr.push(el.login);
        });

        console.log(arr.includes(text));
        alert("user " + text + " is available");
    };

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <input onChange={(e) => handleChange(e)} />
            <button onClick={() => handleClick()}>send</button>

            {myData && myData.map((e) => <p>{e.login}</p>)}
            {/* {login} */}
        </div>
    );
}
