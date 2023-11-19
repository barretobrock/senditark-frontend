import { useState, useEffect } from "react";

const Accounts = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAccounts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <><div>{accounts.app_name}</div></>
    )
}

export default Accounts;