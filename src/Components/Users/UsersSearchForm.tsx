import {Field, Form, Formik} from "formik";
import React from "react";

const usersSearchFormValidate = (values: any) => {
    const error = {};
    return error
}
type InitialValuesFormik = {
    term: string
}
export const UsersSearchForm = () => {
    const submit = (values: InitialValuesFormik, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }

    return <div>
        <Formik
            initialValues={{term: ''}}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    </div>
}
