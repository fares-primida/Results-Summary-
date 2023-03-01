import React from 'react'
import './Style.scss'

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
                <div className="EndResults"></div>
                <div className="btn"></div>
            </div>
        </div>
    )
}

export default Project