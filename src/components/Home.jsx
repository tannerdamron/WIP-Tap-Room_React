import React from 'react';
import Header from './Header';
import NewKegControl from './NewKegControl';
import FilterKegsControl from './FilterKegsControl';

const allKegs = [
  {
    brewer: 'Ninkasi',
    price: '6',
    abv: '7.0%',
    pintsRemaining: 124,
    style: 'Stout',
    id: 1,
  },
  {
    brewer: 'Tan',
    price: '7',
    abv: '9.0%',
    pintsRemaining: 123,
    style: 'Stout',
    id: 2,
  },
  {
    brewer: 'Space Dust IPA',
    price: '5',
    abv: '8.20%',
    pintsRemaining: 122,
    style: 'IPA',
    id: 3,
  },
  {
    brewer: 'Blue Dabadeedabadie',
    price: '4',
    abv: '5.50%',
    pintsRemaining: 124,
    style: 'Lager',
    id: 4,
  },
  {
    brewer: 'The Jam',
    price: '25',
    abv: '21.0%',
    pintsRemaining: 124,
    style: 'Stout',
    id: 5,
  },
  {
    brewer: 'Froth God',
    price: '5',
    abv: '5.50%',
    pintsRemaining: 124,
    style: 'IPA',
    id: 6,
  },
  {
    brewer: 'Logger',
    price: '6',
    abv: '6.10%',
    pintsRemaining: 124,
    style: 'Lager',
    id: 7,
  },
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allKegsList: allKegs,
    };
  }

  handleAddingNewKegToList(newKeg) {
    const { allKegsList } = this.state;
    const newAllKegsList = allKegsList.slice();
    newAllKegsList.push(newKeg);
    this.setState({ allKegsList: newAllKegsList });
  }

  handleEditKeg(currentKeg) {
    const { allKegsList } = this.state;
    const newAllKegsList = allKegsList.slice();
    for (let i = 0; i < newAllKegsList.length; i += 1) {
      if (currentKeg.id === newAllKegsList[i].id) {
        newAllKegsList[i] = currentKeg;
      }
    }
    this.setState({ allKegsList: newAllKegsList });
  }

  render() {
    const { allKegsList } = this.state;
    return (
      <div>
        <style jsx>
          {`

          `}
        </style>
        <div>
          <Header />
          <NewKegControl
            onNewKegCreation={e => this.handleAddingNewKegToList(e)}
          />
          <FilterKegsControl
            allKegsList={allKegsList}
            onEditKeg={e => this.handleEditKeg(e)}
          />
        </div>
      </div>
    );
  }
}

export default Home;
