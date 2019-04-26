import React from 'react';
import Header from './Header';
import NewKegControl from './NewKegControl';
import KegList from './KegList';

function Home() {
  return(
    <div>
      <style jsx>{`
      `}</style>
      <div>
        <Header />
        <NewKegControl/>
        <KegList/>
      </div>
    </div>
  );
}
export default Home;