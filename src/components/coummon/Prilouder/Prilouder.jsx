import React from 'react';
import gifka from './../../../assets/avaImg/loading.gif';
import classes from '../Prilouder/Prilouder.module.css'

const Prilouder = () => {
    return (
        <div>
            <div>
                <img src={gifka} className={classes.louder}/>
            </div>
        </div>
    )
};

export default Prilouder;