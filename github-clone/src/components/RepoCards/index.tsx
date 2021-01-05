import React from 'react';
import { Link } from 'react-router-dom';

import { 
  Container,
  Topside,
  RepoIcon,
  Botside,
  StarsIcon,
  ForkIcon,
} from './styles';

interface Props {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  starts: number;
  forks: number;
}

const RepoCards: React.FC<Props> = ({
  username,
  reponame,
  description,
  language,
  starts,
  forks,
}) => {
  const languageClass = language ? language.toLowerCase() : 'other'
  return (
    <Container>
      <Topside>
        <header>
          <RepoIcon />
          <Link to={`/${username}/${reponame}`} >{reponame}</Link>
        </header>

        <p>{description}</p>
      </Topside>

      <Botside>
        <ul>
          <li>
            <div className={`language ${languageClass}`}></div>
            <span>{language}</span>
          </li>
          <li>
            <StarsIcon />
            <span>{starts}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </Botside>
    </Container>
  );
};

export default RepoCards; 
