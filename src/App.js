import React, { useState, useEffect } from "react";
import SSL from './components/SSL/SSL'
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import './App.css';

function App() {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 2500)
    }, [])

    return (
        <>
            {loading === false ? (
                <div className="App">
                    <SSL />
                </div>
            ) : (
                <LoadingScreen />
            )}
        </>
    );
}

export default App;
