import s from './FormControl.module.css'
import {WrappedFieldProps} from 'redux-form';
import React from "react";


type ChildrenType = {
    children: React.ReactNode
}

const FormControl = ({input, meta, ...props}: WrappedFieldProps & ChildrenType) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: WrappedFieldProps) => {
    const {input, ...restProps} = props
    return (
        <FormControl{...props}><textarea {...input}{...restProps}/></FormControl>
    )
}

export const Input = (props: WrappedFieldProps) => {
    const {input, ...restProps} = props
    return (
        <FormControl{...props}><input {...input}{...restProps}/></FormControl>
    )
}