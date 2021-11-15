import React from 'react'
import EpisodeCard from "./EpisodeCard"
import Loading from '../Loading';
import Pagination from "../Pagination/Pagination"


class EpisodeList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          episodes: [],
          episodesToRender: [],
          currentPage: 0,
          isLoading: false,
          buttonCounts: [1, 2, 3, 4, 5],
      }
    }

    handleChangeSeason = (event) => {
        const seasonCount = event.target.innerText
        const seasonByCount = this.state.episodes.filter(item => item.season === seasonCount)
        this.setState({
            episodesToRender: seasonByCount,
        })
    }

    componentDidMount = () => {
        this.setState({isLoading: true})
        fetch(`https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad`)
                .then(response => response.json())
                .then(result => {
                    this.setState({
                        episodes: result,
                        episodesToRender: result,
                        isLoading: false
                    })
                }
                )
            }
    
    render() {
        return (
            <div>
                <div className="episodes-pagintaion__wrapper">
                    <b>select season:</b>
                    <Pagination onClick={this.handleChangeSeason} buttonCounts={this.state.buttonCounts}/>
                </div>
                <div className="episodes__wrapper">
                {this.state.isLoading && (<Loading />)}
                
                {this.state.episodesToRender.map((item) => 
                    <EpisodeCard {...item} key={item.episode_id}/>
                    )
                }
            </div>
            </div>
           
        )
}
}

export default EpisodeList