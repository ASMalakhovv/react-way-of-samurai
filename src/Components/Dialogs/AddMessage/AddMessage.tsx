import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilits/validators/validators";
import {Textarea} from "../../common/FormsControls/FormControls";


export type AddMessageData = {
    addMessage: string
}

const maxLength30 = maxLengthCreator(30)

function AddMessageForm(props: InjectedFormProps<AddMessageData>) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength30]}
                       name="addMessage" placeholder={"Add message..."}/>
            </div>
            <button>AddMessage</button>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm<AddMessageData>({form: 'addMessage'})(AddMessageForm)