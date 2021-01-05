import React from 'react';
import MenuForm from './components/MenuForm';
import Sections from './components/Sections';
import SideMenu from './components/SideMenu';

import data from './data/index'

import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <>
      <Sections
        variant="blue"
        title={data[0].title}
        description={data[0].description}
      />

      <Sections
        variant="beige"
        title={data[1].title}
        description={data[1].description}
      />

      <Sections
        variant="blue"
        title={data[2].title}
        description={data[2].description}
      />

      <Sections
        variant="white"
        title={data[3].title}
        description={data[3].description}
      />

      <Sections
        variant="black"
        title={data[4].title}
        description={data[4].description}
      />

      <SideMenu>
        <MenuForm />
      </SideMenu>


      <GlobalStyles />
    </>
  );
}

export default App;
