import React, { useState } from 'react';
import CharacterCard from './CharacterCard/CharacterCard'
import Pagination from "./Pagination/Pagination"
import Loading from "./Loading"
import RandomCharacterCard from './RandomCharacterCard/RandomCharacterCard';

class CharactersList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          characters: [],
          currentPage: 0,
          isLoading: false,
          buttonCounts: [1, 2, 3, 4, 5, 6, 7],
      }
    }

    handleButton = (event) => {
        const offsetCount = event.target.innerText * 10 - 10
        this.setState({currentPage: offsetCount})
        this.componentDidMount(offsetCount)
    }

    componentDidMount = (page = 0) => {
        this.setState({isLoading: true})
        fetch(`https://www.breakingbadapi.com/api/characters?limit=10&offset=${page}`)
                .then(response => response.json())
                .then(result => {
                    this.setState({
                        characters: result,
                        isLoading: false
                    })
                }
                )
            }    
    
    render() {
        return (
            <div className="characters__list">
                {this.state.isLoading && (<Loading />)}
                <ul className="App__list">
                {this.state.characters.map((item) => 
                    <li className="App__item" key={item.char_id.toString()}>
                    {/* <CharacterCard {...item} /> */}
                    <RandomCharacterCard {...item} />
                    </li>
                    )
                }
                </ul>
                <Pagination onClick={this.handleButton} buttonCounts={this.state.buttonCounts}/>
            </div>
        )
}
}

export default CharactersList