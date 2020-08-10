import React from 'react';
import FileUpload from './components/FileUpload';
import {Row, Col} from 'react-bootstrap';
import Articles from './components/articles'


const ImageWidget = () => (
  <div className='container mt-4'>
    <h4 className='display-4 text-center mb-4'>
     Feature Box
    </h4>
    <Row>
    <Col>
    <FileUpload />
    </Col>
    <Col>
    <Articles/>
    </Col>
    </Row>
  </div>
);

export default ImageWidget;