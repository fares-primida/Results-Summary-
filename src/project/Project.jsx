import React, { createElement } from 'react'
import './Style.scss'
import {data} from './Data'

    function CreateElements({ MC, IS, H2C, H5C }) {
    return React.createElement(
    'div',
    { className: MC },
    createElement(
        'div',
        { className: "BContainer" },
        createElement(
        'div',
        { className: "name" },
        createElement('span', null ,createElement('img', { src: IS })),
        createElement('h4', null, H2C)
        ),
        createElement(
        'div',
        { className: "score" },
        createElement('h5', null, H5C),
        createElement('span', null, "/ 100")
        )
    )
    );
    }

    const Elements = () => {
        for (let i = 0; i < data.length; i++) {
        content.push(
            <CreateElements
            key={i}
            MC={data[i].MainColor}
            IS={data[i].icon}
            H2C={data[i].category}
            H5C={data[i].score}
            />
        );
    }
    return content;
    };

    const content = []

const Project = () => {
    return (
        <div className='container'>
            <div className="result">
                <div className="header">
                    <h3>Your Result</h3>
                </div>
                <div className="circle">
                    <div className="CircleBox">
                        <h3>76</h3> <span>of 100</span>
                    </div>
                </div>
                <div className="title">
                    <h2>Great</h2>
                </div>
                <div className="Description">
                    <p>Your Score Heigher Than 65% Of <br /> The People Who Have Taken<br /> This Test</p>
                </div>
            </div>
            <div className="results">
                <div className="Summery">
                    Summary
                </div>
                <div className="EndResults">
                    <Elements />
                </div>
                <div className="btn">
                    <button>Conteniu</button>
                </div>
            </div>
        </div>
    )
}

export default Project