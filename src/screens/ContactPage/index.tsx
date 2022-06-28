import React  from 'react';

import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp} from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

import {
     Container,
     Title,
     Contacts,
     LinkedinButton,
     GithubButton,
     WhatsAppButton,
     EmailButton,
     Form,
     Input,
     TextArea,
     Button,
     ButtonTitle,
 } from './styles';

 const ContactPage: React.FC = () => {
    const OpenLinkedin = () => {
        window.open('https://www.linkedin.com/in/rhaneyko-honorio-73657819b')
    }
    const OpenGithub = () => {
        window.open('https://www.github.com/rhaneyko')
    }

    const OpenWhatsApp = () => {
        window.open('https://api.whatsapp.com/send?phone=5565992787669')
    }

    const OpenEmail = () => {
        window.open('mailto: rhaneykohonorio@gmail.com')
    }

    //const [name, setName] = React.useState('');
    //const [email, setEmail] = React.useState('');
    //const [message, setMessage] = React.useState('');

    // const onChangeName = (textName: string) => {
    //   setName(textName)
    // }
    // const onChangeEmail = (textEmail: string) => {
    //   setEmail(textEmail)
    // }
    // const onChangeMessage = (textMessage: string) => {
    //   setMessage(textMessage)
    // }

    // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log(name, email, message);
    // }
    return(
        <Container id='contact' >

              <Title>Contato</Title>

            <Contacts>
                <LinkedinButton onClick={(OpenLinkedin)}>
                  <AiFillLinkedin color='#0E76A8' size={40} />
                </LinkedinButton>
                <GithubButton onClick={(OpenGithub)}>
                  <AiFillGithub color='#000' size={40}  />
                </GithubButton> 
                <WhatsAppButton onClick={(OpenWhatsApp)}>
                  <AiOutlineWhatsApp color='#25D366' size={40}  />
                </WhatsAppButton>
                <EmailButton onClick={(OpenEmail)}>
                  <FcGoogle size={40}  />
                </EmailButton>  
            </Contacts>

     <Form 
        action='https://formsubmit.co/rhaneykohonorio@gmail.com'
        method='POST'
        >
            <Input 
              placeholder='Seu nome' 
              color='white'
              name='name'
              required
              />
            <Input 
              placeholder='Seuemail@email.com'
              name='email'
              required
              />
            <TextArea 
              placeholder='Escreva sua mensagem aqui...' 
              name='message' 
              required
            />
            <Button type='submit'>  
                <ButtonTitle>Enviar</ButtonTitle>
            </Button>
     </Form>    
        </Container>
    )
}

export default ContactPage;
