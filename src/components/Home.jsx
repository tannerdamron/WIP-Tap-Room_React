import React from 'react';
import Header from './Header';
import NewKegControl from './NewKegControl';
import KegList from './KegList';
import FilterKegsControl from './FilterKegsControl';

function Home() {
  return(
    <div>
      <style jsx>{`
      `}</style>
      <div>
        <Header />
        <NewKegControl/>
        <FilterKegsControl/>
        <KegList/>
      </div>
    </div>
  );
}
export default Home;