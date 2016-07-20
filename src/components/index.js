import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Container from './container'; 

import { changeMessage } from '../actions';

class Index extends React.Component {

   render() {

       const { initial } = this.props;

       return   <Container>
                    <h1>Hello Wolrd!</h1>
                    <p>{ initial.message }</p>
                    <button onClick={() => this.props.changeMessage('updated text')}>Change Message</button>
                </Container>;
   }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => { 
    return { changeMessage: bindActionCreators(changeMessage, dispatch) }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);