import React from 'react';
import classes from './formControls.module.css';
import { Field } from 'redux-form';


// export const Form = (TexPole) => {
//     const FormCon = ({input, meta, ...props}) => {
//         const HasError = meta.touched && meta.error;
//         return (
//         <div className={`${classes.formControl} ${HasError ? classes.error: ''}`}>
//             <div>
//                 <TexPole {...input} {...props} />
//             </div>
//             {HasError && <span>{meta.error}</span>}
//         </div>
//         )
//     } 
//     return FormCon;
// }


export const Textarea = ({input, meta, ...props}) => {

    const HasError = meta.touched && meta.error;

    return (
        <div className={`${classes.formControl} ${HasError ? classes.error: ''}`}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {HasError && <span>{meta.error}</span>}
        </div>
    )
};


export const Input = ({input, meta, ...props}) => {

    const HasError = meta.touched && meta.error;

    return (
        <div className={`${classes.formControl} ${HasError ? classes.error: ''}`}>
            <div>
                <input {...input} {...props} />
            </div>
            {HasError && <span className={classes.error}>{meta.error}</span>} 
        </div>
    )
};

export const createField = (placeholder, name, component, validate, props = {}, text = '') => <div><Field 
placeholder={placeholder} 
name={name} 
component={component} 
validate={validate} 
{...props}
/>{text}
</div>