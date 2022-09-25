import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    const form = useRef<HTMLFormElement>(null);
    const [sentMessageSuccess, setSentMessageSuccess] = useState<boolean>(false)

    const handleInputChangeDesign = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const elem = e.target
        if (elem instanceof HTMLInputElement) {
            if (e.currentTarget.value.trim().length === 0) {
                elem.classList.remove('input-filled');
            } else elem.classList.add('input-filled');
        }
        else {
            if (e.currentTarget.value.trim().length === 0) {
                elem.classList.remove('textarea-filled');
            } else elem.classList.add('textarea-filled');
        }
    }


    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs.sendForm('service_u02o7fv', 'template_r6ckghy', form.current!, 'xbuXSogMW29neZZQc')
            .then((result) => {
                console.log(result.text);
                document.querySelector<HTMLInputElement>('#user_name')!.value = '';
                document.querySelector<HTMLInputElement>('#user_name')!.classList.remove('input-filled');
                document.querySelector<HTMLInputElement>('#user_email')!.value = '';
                document.querySelector<HTMLInputElement>('#user_email')!.classList.remove('input-filled');
                document.querySelector<HTMLTextAreaElement>('#message')!.value = '';
                document.querySelector<HTMLTextAreaElement>('#message')!.classList.remove('textarea-filled');
                setSentMessageSuccess(true)
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact' >
            <h1 className="titles">
                {t('Contact Me')}
            </h1>

            {
                sentMessageSuccess ?
                    <div id='messageSuccess' onClick={() => setSentMessageSuccess(false)}>
                        <h1>{t('Message Sent!')}</h1>
                        <i className='fa fa-check' style={{ color: 'green', textShadow: 'none', fontSize: '3em', paddingLeft: '5px' }}></i>
                    </div>
                    :
                    <form ref={form} onSubmit={sendEmail} id='contactForm'>
                        <div className="input-label-section">
                            <input type="text" name="user_name" id='user_name' onChange={(e) => handleInputChangeDesign(e)} required />
                            <label htmlFor='user_name'>{t('Name')}</label>
                        </div>

                        <div className="input-label-section">
                            <input type="email" name="user_email" id='user_email' onChange={(e) => handleInputChangeDesign(e)} required />
                            <label htmlFor='user_email'>Email</label>
                        </div>

                        <div className="input-label-section">
                            <textarea name="message" id='message' onChange={(e) => handleInputChangeDesign(e)} required />
                            <label htmlFor='message'>{t('Message')}</label>
                        </div>

                        <button type="submit" value="Send" id='contactButton'>
                            {t('Send Message')}
                        </button>
                    </form>
            }

            <footer>
                <h5>{t('Built & Designed by Willyam Ramos')}</h5>
            </footer>
        </div>
    )
}

export default Contact