import React, { useEffect } from 'react'

import firebase from "firebase"
import { db } from "../../services/firebase"

import { useDispatch } from 'react-redux'
import { closeSendMessage } from '../../features/mailSlice'

import { useForm } from 'react-hook-form'

import { Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

import "./SendMail.scss"
export const SendMail = () => {
    const { register, handleSubmit, setFocus, formState: { errors } } = useForm()

    const dispatch = useDispatch()
    useEffect(() => {
        setFocus("to");
      }, [setFocus]);

    const onSubmit = (formData) => {
       db.collection("emails").add({
           to: formData.to,
           subject: formData.subject,
           message: formData.message,
           timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        dispatch(closeSendMessage())
    }


    const handleClickClose = () => {
        dispatch(closeSendMessage())
    }
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New message</h3>
                <CloseIcon className="sendMail__close" onClick={handleClickClose} />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("to", {required: true})} placeholder="Adresaci"  />
                {errors.to && <p className="sendMail__error">This field is required!</p>}
                <input type="text" {...register("subject", {required: true})} placeholder="Subject"  />
                {errors.subject && <p className="sendMail__error">This field is required!</p>}

                <textarea type="text" {...register("message", {required: true})} placeholder="Message..."  />
                {errors.message && <p className="sendMail__error">This field is required!</p>}


                <div className="sendMail__options">
                    <Button
                        className="sendMail__send"
                        type="submit"
                        color="primary"
                        variant="contained"
                    >Send</Button>
                </div>
            </form>

        </div>
    )
}

export default SendMail
