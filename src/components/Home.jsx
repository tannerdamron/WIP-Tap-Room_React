import React from 'react';
import Header from './Header';
import NewKegControl from './NewKegControl';
import FilterKegsControl from './FilterKegsControl';

let allKegs = [
  {
    brewer: "Ninkasi",
    price: "$6",
    abv: "7.0%",
    pintsRemaining: 124,
    style: "Stout"
  },
  {
    brewer: "Tan",
    price: "$7",
    abv: "9.0%",
    pintsRemaining: 124,
    style: "Stout"
  },
  {
    brewer: "Space Dust IPA",
    price: "$5",
    abv: "8.20%",
    pintsRemaining: 124,
    style: "IPA"
  },
  {
    brewer: "Blue Dabadeedabadie",
    price: "$4",
    abv: "5.50%",
    pintsRemaining: 124,
    style: "Lager"
  },
  {
    brewer: "The Jam",
    price: "$25",
    abv: "21.0%",
    pintsRemaining: 124,
    style: "Stout"
  },
  {
    brewer: "Froth God",
    price: "$5",
    abv: "5.50%",
    pintsRemaining: 124,
    style: "IPA"
  },
  {
    brewer: "Logger",
    price: "$6",
    abv: "6.10%",
    pintsRemaining: 124,
    style: "Lager"
  }
];

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allKegsList: []
    };
  }

  handleAddingNewKegToList(newKeg) {
    let newAllKegsList = this.state.allKegsList.slice();
    newAllKegsList.push(newKeg);
    this.setState({allKegsList: newAllKegsList});
  }

  render() {
    return(
      <div>
        <style jsx>{`

        `}</style>
        <div>
          <Header />
          <NewKegControl />
          <FilterKegsControl kegsList={this.state.allKegsList}
          onNewKegCreation={this.handleAddingNewKegToList.bind(this)} />} />
        </div>
      </div>
    );
  }
}

export default Home;