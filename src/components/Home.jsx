import React from 'react';
import Header from './Header';
import NewKegControl from './NewKegControl';
import FilterKegsControl from './FilterKegsControl';

function Home() {
  return(
    <div>
      <style jsx>{`

      `}</style>
      <div>
        <Header />
        <NewKegControl />
        <FilterKegsControl />
      </div>
    </div>
  );
}

export default Home;