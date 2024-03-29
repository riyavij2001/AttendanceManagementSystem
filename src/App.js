import React from "react";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import TabsComponent from "./components/TabsComponent";
import "./App.css";

function App() {
    // State to store the JSON Contact data
    const [data, setData] = useState({});

    // API Call to bring all data at once
    const getData = async () => {
        const base = `http://localhost:8181/view-data`;
        const response = await fetch(base);
        const data = await response.json();
        if (data) {
            return data;
        }
    };

    // Function Call to get the data
    useEffect(() => {
        const intervalId = setInterval(() => { // assign interval to a variable to clear it.
            getData()
                .then((data) => {
                    setData(data);
                })
                .catch((error) => {
                    console.error("Error Getting Data From The Backend API!");
                });
        }, 1000); // every 3 seconds

        return () => clearInterval(intervalId); //This clears the interval when the component gets unmounted
    }, []);



    return (
        <div className="App">
            <Navbar />
            <TabsComponent data = { data } />
        </div>
    );
}

export default App;
