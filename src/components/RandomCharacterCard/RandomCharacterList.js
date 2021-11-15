import React from 'react';
import RandomCharacterCard from './RandomCharacterCard'
import Button from "../Button"
import Loading from '../Loading';

class RandomCharacter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          character: [],
          isLoading: false
      }
    }

    componentDidMount = () => {
        this.setState({isLoading: true})
        fetch(`https://www.breakingbadapi.com/api/character/random`)
                .then(response => response.json())
                .then(result => {
                    this.setState({
                        character: result,
                        isLoading: false
                    })
                }
                )
            }
    
    handleClick = () => {
        this.componentDidMount()
    }
            
    render() {
        return (
            <div className="App__random-character">
                {this.state.isLoading && (<Loading />)}
                {this.state.character.map((item) => 
                    <RandomCharacterCard {...item} key={item.char_id}/>
                    )
                }
                <Button text='Get another character!' onClick={this.handleClick}/>
            </div>
        )
        
}
}

export default RandomCharacter
