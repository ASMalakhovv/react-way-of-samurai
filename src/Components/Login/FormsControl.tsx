import {Field, WrappedFieldProps} from "redux-form";

export const createField = (component:(props: WrappedFieldProps) => JSX.Element,
                            name:string,placeholder:string,
                            validate:(value: string) => "Field is required" | undefined,
                            type:string, text:string) => {

    return (
        <div>
            <Field component={component} name={name} placeholder={placeholder} validate={validate} type={type}/> {text}
        </div>
    )
}

