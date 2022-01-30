import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type AddMessageData = {
    addMessage: string
}

function AddMessageForm(props: InjectedFormProps<AddMessageData>) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="addMessage" placeholder={"Add message..."}/>
            </div>
            <button>AddMessage</button>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm<AddMessageData>({form: 'addMessage'})(AddMessageForm)