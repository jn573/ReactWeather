import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    winter: {
        text: "Burr, it's cold",
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    // let season = null;
    console.log(lat);
    console.log(month);

    if (month < 3 && month > 8) {
        return lat >= 0 ? 'winter' : 'summer'
    } else {
        return lat < 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    // const text = season === 'winter' ? "Burr, it's chilly" : "Let's hit the beach"
    // const icon = season === 'winter' ? "snowflake" : "sun"
    const {text, iconName} = seasonConfig[season]
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left huge ${iconName} outline icon`} />
            <h1>{text}</h1>
            <i className={`icon-right huge ${iconName} outline icon`}/>
        </div>
    )
};

export default SeasonDisplay;