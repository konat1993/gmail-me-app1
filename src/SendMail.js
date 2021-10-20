import React from 'react'

import { useDispatch } from 'react-redux'
import { closeSendMessage } from './features/mailSlice'

import { useForm } from 'react-hook-form'

import { Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

import "./SendMail.scss"
export const SendMail = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = (formData) => {
        console.log("formData: ", formData)
    }

    const dispatch = useDispatch()

    const handleClickClose = () => {
        dispatch(closeSendMessage())
        console.log("HIHh")
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
