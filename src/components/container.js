import React from 'react';

export default class Container extends React.Component {

    render(){
        return  <section>
                    {this.props.children}
                </section>;
    }
}