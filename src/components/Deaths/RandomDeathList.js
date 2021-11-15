import React from 'react';
import RandomDeathCard from './RandomDeathCard'
import Button from "../Button"
import Loading from '../Loading';

class RandomDeathList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          death: {},
          isLoading: false
      }
    }

    componentDidMount = () => {
        this.setState({isLoading: true})
        fetch(`https://breakingbadapi.com/api/random-death`)
                .then(response => response.json())
                .then(result => {
                    this.setState({
                        death: {...result},
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
            <div className="death-list_wrapper">
                {this.state.isLoading && (<Loading />)}
                <RandomDeathCard {...this.state.death} key={this.state.death.death_id}/>
                <div className="death-card__action">
                    <span className="death-card__action-text">Click here to find out about a random death!</span>
                    <Button text='Get another death!' onClick={this.handleClick}/>
                </div>
                
            </div>
        )
        
}
}

export default RandomDeathList
