import React from 'react';
import './ImageGrid.css';
import { Container } from 'react-bootstrap';
import grid1 from '../../../images/g1.png'
import grid2 from '../../../images/g2.png'
import grid3 from '../../../images/g3.png'
import grid4 from '../../../images/g4.png'
import grid5 from '../../../images/g5.png'
import grid6 from '../../../images/g6.png'

const ImageGrid = () => {
    return (
        <div className='min-vh-100 my-5'>
            <div className='heading-light'>
                    <h2><span>Gallery</span></h2>
            </div>
            <Container className='mt-4'>
                <div className="row g-3">
                        <div className='col-12 grid-image image'>
                            <img className='img-font' src={grid1} alt="" />
                            <img className='img-back' src={grid4} alt="" />
                        </div>
                        <div className='col-6 grid-image2 image'>
                            <img className='img-font' src={grid2} alt="" />
                            <img className='img-back' src={grid5} alt="" />
                        </div>
                        <div className='col-6 grid-image3 image'>
                            <img className='img-font' src={grid3} alt="" />
                            <img className='img-back' src={grid6} alt="" />
                        </div>
                </div>
            </Container>
                
            
        </div>
    );
};

export default ImageGrid;