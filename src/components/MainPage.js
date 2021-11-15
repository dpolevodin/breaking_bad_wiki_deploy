import CharactersList from "./CharactersList"
import RandomCharacter from "./RandomCharacterCard/RandomCharacterList"
import EpisodeList from "./Episodes/EpisodeList"
import QuoteList from './Quotes/QuoteList'
import RandomDeathList from './Deaths/RandomDeathList'


function MainPage({page}) {

    const renderMapping = {
        'Random Character': function() {
            return (
                <div><RandomCharacter /></div>
            )
        },
        'Characters': function() {
            return (
                <div><CharactersList/></div>
            )
        },
        'Episodes': function() {
            return <div><EpisodeList /></div>
        },
        'Quotes': function() {
            return <div><QuoteList /></div>
        },
        'Deaths': function() {
            return <div><RandomDeathList /></div>
        },
    }
 
    return (
      <div>
            {renderMapping[page]()}
      </div>  
    )
}

export default MainPage