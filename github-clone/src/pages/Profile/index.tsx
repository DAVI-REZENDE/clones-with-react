import React, { useEffect, useState } from 'react';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from './styles';

import ProfileData from '../../components/ProfileData'
import RepoCards from '../../components/RepoCards';
import RandomCalendar from '../../components/RandomCalendar';
import { useParams } from 'react-router-dom';
import { APIRepos, APIUser } from '../../@types';

interface Data {
  user?: APIUser;
  repos?: APIRepos[];
  error?: string;
}

const Profile: React.FC = () => {

  const { username = 'DAVI-REZENDE' } = useParams()
  const [ data, setData ] = useState<Data>({})

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async response => {
      const [ userResponse, repoResponse ] = response

      if(userResponse.status === 404 ) {
        setData({ error: 'User not found'})
        return;
      }

      const user = await userResponse.json()
      const repos = await repoResponse.json()

      const shuffledRepos = repos.sort(() => 0.50 - Math.random())
      const sliceRepos = shuffledRepos.slice(0, 6)

      setData({ 
        user,
        repos: sliceRepos,
      })

    })
  }, [username])

  if (data?.error) {
    return <h1>{data.error}</h1>
  }

  if(!data?.user || !data?.repos) {
    return <h1>Loading...</h1>
  }

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">{data.user?.public_repos}</span>  
    </div>
  )

  return (
    <Container>

      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset"></span>
          <TabContent />
        </div>
        <span className="line"></span>
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
          />
        </LeftSide>
        <RightSide>

          <Tab className="mobile">
            <TabContent />
            <span className="line"></span>
          </Tab>

          <Repos>
            <h2>Random Repos</h2>

            <div>
              {data.repos.map((item) => (
                <RepoCards
                  key={item.name}
                  username={item.owner.login}
                  reponame={item.name}
                  description={item.description}
                  language={item.language}
                  starts={item.starsgrazers_count}
                  forks={item.forks}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data).
          </CalendarHeading>

          <RandomCalendar />

        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
