import React, { Component } from 'react';
import NewsList from './NewsList';

class News extends Component {
  constructor(props) {
    super(props);

    let initialData;

    if (props.staticContext) {
      initialData = props.staticContext.initialData;
    } else {
      initialData = window.__initialData__;
      delete window.__initialData__;
    }
    
    this.state = { news: initialData };
    
  }

  componentDidMount () {
    if (!this.state.news) {
      News.requestInitialData().then(news => this.setState({ news }));
    }
  }

  static requestInitialData () {
    return fetch('http://localhost:3000/api/news')
      .then(response => response.json());
  }

  render () {
    const { news } = this.state;
    return (<NewsList news={news} />);
  }
}


export default News;
