import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {

   const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

   useEffect(() => {
      const div = messagesRef.current;

      if (div){
         div.scrollTop = div.scrollHeight;
      }
   }, [messagesRef]);

  return (
      <Container>
         <Messages ref={messagesRef}>
            <ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Bora jogar valorant"
            />
            <ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
            author="Davi Rezende"
            date="21/06/2020"
            content="Isso e uma mensagem"
         /><ChannelMessage 
         author="Davi Rezende"
         date="21/06/2020"
         content="Isso e uma mensagem"
      /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
            author="Davi Rezende"
            date="21/06/2020"
            content="Isso e uma mensagem"
         /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
            author="Davi Rezende"
            date="21/06/2020"
            content="Isso e uma mensagem"
         /><ChannelMessage 
         author="Davi Rezende"
         date="21/06/2020"
         content="Isso e uma mensagem"
      /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
            author="Davi Rezende"
            date="21/06/2020"
            content="Isso e uma mensagem"
         /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
            author="Davi Rezende"
            date="21/06/2020"
            content="Isso e uma mensagem"
         /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
               author="Wred"
               date="21/06/2020"
               content={
                  <>
                  <Mention>@Davi Rezende</Mention>, me carrega no valorant de novo por favor?
                  </>
               }
               hasMention
               isBot

            /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
            author="Davi Rezende"
            date="21/06/2020"
            content="Isso e uma mensagem"
         /><ChannelMessage 
         author="Davi Rezende"
         date="21/06/2020"
         content="Isso e uma mensagem"
      /><ChannelMessage 
      author="Davi Rezende"
      date="21/06/2020"
      content="Isso e uma mensagem"
   /><ChannelMessage 
   author="Davi Rezende"
   date="21/06/2020"
   content="Isso e uma mensagem"
/><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
            author="Davi Rezende"
            date="21/06/2020"
            content="Isso e uma mensagem"
         /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
            author="Davi Rezende"
            date="21/06/2020"
            content="Isso e uma mensagem"
         /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
            author="Davi Rezende"
            date="21/06/2020"
            content="Isso e uma mensagem"
         /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
            author="Davi Rezende"
            date="21/06/2020"
            content="Isso e uma mensagem"
         /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            /><ChannelMessage 
               author="Davi Rezende"
               date="21/06/2020"
               content="Isso e uma mensagem"
            />
         </Messages>

         <InputWrapper>
            <Input type="text" placeholder="Conversar em #chat-livre" />
            <InputIcon />
         </InputWrapper>
      </Container>
  );
}

export default ChannelData;