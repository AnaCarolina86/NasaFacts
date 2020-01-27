import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import GalleryItem from './GalleryItem';
import styles from './Gallery.module.css';

import image0 from './image0.png';
import image1 from './image1.png';
import image2 from './image2.png';

export default class Gallery extends React.Component {
  updateClick(id) {
    this.props.updateClick(id);
  }
  photoss = Array.from(this.props.photos);
  renderPhotos() {
    return (this.photoss.map(item => 
      <GalleryItem 
        key={item.id}
        photo={item}
        updateClick={this.updateClick.bind(this)}
      />
    ));
  }
  showPics = () => {
    return(
        <div className={styles.pics}>
            <img className={styles.img} src={image0} alt={"stars"}></img> 
            <img className={styles.img} src={image1} alt={"stars"}></img> 
            <img className={styles.img} src={image2} alt={"stars"}></img> 
        </div>
    );
  }
  render() {
    return (
      <section className={styles.gallery}>
        <Container>
          <Row>
            <Col lg="6">
              {this.renderPhotos()}
            </Col>
            <Col lg="6">
              {this.showPics()}
            </Col>
          </Row>       
        </Container>
        <a href={("www.nasa.gov/topics/solarsystem/images/index.html")}>Images Resource</a>
      </section>
    );
  }
}
