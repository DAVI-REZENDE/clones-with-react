import React from 'react';

import UserIcon from '../../assets/discord.webp'
// import { Container } from './styles';
import { Button } from './styles';

export interface Props{
    selected?: boolean;
    isHome?: boolean;
    hasNotifications ?: boolean;
    mentions?: number;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions
}) => {
  return (
      <Button
        isHome={isHome}
        hasNotifications={hasNotifications}
        mentions={mentions}
        className={selected ? 'active' : ''}
      >
          {isHome && <img src={UserIcon} alt="user" />}
      </Button>
  );
}

export default ServerButton;