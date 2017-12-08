import React, { Component } from 'react';
import NewsList from './NewsList';

class News extends Component {
  constructor(props) {
    super(props);

    let initialData;

    this.state = { news: initialData };

  }

  render () {
    const { news } = this.state;
    return (<NewsList news={news} />);
  }
}


export default News;
