import React from 'react';
import Header from './Header';
import NewKegControl from './NewKegControl';
import FilterKegsControl from './FilterKegsControl';

const allKegs = [
  {
    brewer: 'Ninkasi',
    price: '6',
    abv: '7.0%',
    pintsRemaining: 4,
    style: 'Stout',
    id: 1,
  },
  {
    brewer: 'Tan',
    price: '7',
    abv: '9.0%',
    pintsRemaining: 2,
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

const allIpaKegs = [
  {
    brewer: 'Space Dust IPA',
    price: '5',
    abv: '8.20%',
    pintsRemaining: 124,
    style: 'IPA',
    id: 3,
  },
  {
    brewer: 'Froth God',
    price: '5',
    abv: '5.50%',
    pintsRemaining: 124,
    style: 'IPA',
    id: 6,
  },
];

const lagerKegs = [
  {
    brewer: 'Blue Dabadeedabadie',
    price: '4',
    abv: '5.50%',
    pintsRemaining: 124,
    style: 'Lager',
    id: 4,
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

const stoutKegs = [
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
    pintsRemaining: 124,
    style: 'Stout',
    id: 2,
  },
  {
    brewer: 'The Jam',
    price: '25',
    abv: '21.0%',
    pintsRemaining: 124,
    style: 'Stout',
    id: 5,
  },
];


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allKegsList: allKegs,
      allIpaKegsList: allIpaKegs,
      allLagerKegsList: lagerKegs,
      allStoutKegsList: stoutKegs,
    };
  }

  handleAddingNewKegToList(newKeg) {
    const {
      allKegsList,
      allStoutKegsList,
      allLagerKegsList,
      allIpaKegsList,
    } = this.state;
    const newAllKegsList = allKegsList.slice();
    newAllKegsList.push(newKeg);
    if (newKeg.style === 'Stout') {
      const newAllStoutKegsList = allStoutKegsList.slice();
      newAllStoutKegsList.push(newKeg);
      this.setState({ allStoutKegsList: newAllStoutKegsList });
    } if (newKeg.style === 'Lager') {
      const newAllLagerKegsList = allLagerKegsList.slice();
      newAllLagerKegsList.push(newKeg);
      this.setState({ allLagerKegsList: newAllLagerKegsList });
    } if (newKeg.style === 'IPA') {
      const newAllIpaKegsList = allIpaKegsList.slice();
      newAllIpaKegsList.push(newKeg);
      this.setState({ allIpaKegsList: newAllIpaKegsList });
    }
    this.setState({ allKegsList: newAllKegsList });
  }

  handleEditKeg(currentKeg) {
    const {
      allKegsList,
      allStoutKegsList,
      allLagerKegsList,
      allIpaKegsList,
    } = this.state;
    const newAllKegsList = allKegsList.slice();
    const newStoutKegsList = allStoutKegsList.slice();
    const newLagerKegsList = allLagerKegsList.slice();
    const newIpaKegsList = allIpaKegsList.slice();
    for (let i = 0; i < newAllKegsList.length; i += 1) {
      if (currentKeg.id === newAllKegsList[i].id) {
        newAllKegsList[i] = currentKeg;
      } if (currentKeg.id === newAllKegsList[i].id && currentKeg.style === 'Stout') {
        newStoutKegsList[i] = currentKeg;
        this.setState({ allStoutKegsList: newStoutKegsList });
      } if (currentKeg.id === newAllKegsList[i].id && currentKeg.style === 'Lager') {
        newLagerKegsList[i] = currentKeg;
        this.setState({ allLagerKegsList: newLagerKegsList });
      } if (currentKeg.id === newAllKegsList[i].id && currentKeg.style === 'IPA') {
        newIpaKegsList[i] = currentKeg;
        this.setState({ allIpaKegsList: newIpaKegsList });
      }
    }
    this.setState({ allKegsList: newAllKegsList });
  }

  handleRemovingKegWhenEmpty(currentKeg) {
    const { allKegsList } = this.state;
    const newAllKegsList = allKegsList.slice();
    for (let i = 0; i < newAllKegsList.length; i += 1) {
      if (currentKeg.id === newAllKegsList[i].id) {
        newAllKegsList.splice(i, 1);
      }
    }
    this.setState({ allKegsList: newAllKegsList });
  }

  render() {
    const {
      allKegsList,
      allIpaKegsList,
      allLagerKegsList,
      allStoutKegsList,
    } = this.state;
    return (
      <div>
        <div>
          <Header />
          <NewKegControl
            onNewKegCreation={e => this.handleAddingNewKegToList(e)}
          />
          <FilterKegsControl
            allIpaKegsList={allIpaKegsList}
            allLagerKegsList={allLagerKegsList}
            allStoutKegsList={allStoutKegsList}
            allKegsList={allKegsList}
            onEditKeg={e => this.handleEditKeg(e)}
            onRemoveKeg={e => this.handleRemovingKegWhenEmpty(e)}
          />
        </div>
      </div>
    );
  }
}

export default Home;
