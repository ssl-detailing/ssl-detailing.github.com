import React from 'react';
import './loadingScreen.css';

const LoadingScreen = () => {
    const title = "SSL Detailing";

    return (
        <div className={"loading"}>
            <span className={"loading-text"}>
                {title.split("").map((char, i) => {
                    const style = {"animation-delay": (0.5 + i / 10) + "s"};
                    return <h1
                        aria-hidden="true"
                        key={i}
                        style={style}>
                        {char}
                    </h1>
                    })
                }
            </span>
        </div>
    );
}

export default LoadingScreen;

