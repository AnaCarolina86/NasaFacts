import React, {Component} from 'react';
import Title from './Title/Title';
import Background from './Background/Background';
import Grid from './Grid/Grid';
import Rocket from './Rocket/Rocket';
import Smoke from './Rocket/Smoke';
import Bottom from './Bottom/Bottom';
import Gallery from './Gallery/Gallery';

import facts from './NASA_facts.json';
import photos from './NASA_photos.json';

//styles
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facts,
      photos,
    };
  }
  updateClicked(id) {
    let stateCopy = Object.assign({}, this.state);
    stateCopy.facts[id].clicked = true;
    this.setState(stateCopy);
  }

  updateClick(id){
    let stateCopy = Object.assign({}, this.state);
    stateCopy.photos[id].clicked = true;
    this.setState(stateCopy);
  }
  
  render() {
    return (
      <div className={styles.app}>
        <Title />
        <Background />
        <Grid facts={this.state.facts} updateClicked={this.updateClicked.bind(this)}/>
        <Rocket />
        <Smoke />
        <Gallery photos={this.state.photos} updateClick={this.updateClick.bind(this)} />
        <Bottom />
      </div>
    );
  }
}

export default App;
