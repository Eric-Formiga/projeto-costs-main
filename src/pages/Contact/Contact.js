import Container from '../../components/Container/Index';
import { ImLocation } from 'react-icons/im';
import { BsWhatsapp } from 'react-icons/bs';
import { ContactContainer } from './styles';
import FormContact from '../../components/FormContact/Index';
import { useState } from 'react';
import Message from '../../components/Message/Index';

function Contact() {

    const [contactMessage, setContactMessage] = useState('');

    function createPost(contact) {
        setContactMessage('');

        fetch("https://json-server-delta-one.vercel.app/contacts", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(contact),
        })
            .then((resp) => resp.json)
            .then((data) => {
                setContactMessage('Mensagem enviada com sucesso!')
            })
            .catch(err => console.log(err))
    }

    return (
        <Container variant='minHeight'>
            <ContactContainer>
                <div className='message'>
                    {contactMessage && <Message type="success" text={contactMessage} />}
                </div>
                <div className='contact'>
                    <div className='contactInfo'>
                        <h1>Entrar em contato</h1>
                        <p>Use nosso formulário de contato para todas as solicitações de informações ou entre em contato conosco diretamente usando as informações de contato abaixo.</p>
                        <p>Sinta-se à vontade para entrar em contato conosco via e-mail ou telefone</p>
                        <div style={{ width: '100%' }}>
                            <hr style={{ color: 'black' }}>
                            </hr>
                        </div>
                        <div className='info'>
                            <div>
                                <a href='#' target="_blank" rel="noreferrer"><ImLocation /></a>
                            </div>
                            <div className='infoText'>
                                <span>Localização do nosso escritório</span>
                                <span><i>Rua Araruama, 40, Queimados, Rio de Janeiro, Rj, 2023</i></span>
                            </div>
                        </div>
                        <div className='info'>
                            <div>
                                <a href='https://api.whatsapp.com/send?phone=5521982994975' target="_blank"  rel="noreferrer"><BsWhatsapp /></a>
                            </div>
                            <div className='infoText'>
                                <span>Whatsapp</span>
                                <span><i>+55 (21) 982994975</i></span>
                            </div>
                        </div>
                    </div>
                    <div className='contactForm'>
                        <div className='form'>
                            <h2>Nos envie uma mensagem</h2>
                            <FormContact handleSubmit={createPost} btnText="Enviar" />
                        </div>
                    </div>
                </div>

            </ContactContainer>
        </Container>
    )
}

export default Contact