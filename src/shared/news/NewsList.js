import React, { Component } from 'react';
import timeAgo from 'node-time-ago';
import orderBy from 'lodash.orderby';
import './NewsList.css';

class NewsList extends Component {
  render () {
    return (
      <div className="newslist">
        <div className="header">
          <div className="header-title">
            <strong>Wizard News</strong>
          </div>
          <div className="sort">
            Sort By: {' '}
            <a
              href='#'
              className={this.state.sortOder === 'upvotes' && 'sort-selected'}
              onClick={this.sortOrder.bind(this, 'upvotes')}>
              Upvotes
            </a>|
            <a
              href="#"
              className={this.state.sortOrder === 'date' && 'sort-selected'}
              onClick={this.sortOrder.bind(this, 'date')}>
              Date
            </a>
          </div>
        </div>

        {news && news.map(post =>
          <div key={post.id} className="news-item">
            <p>
              <span className='news-position'>{post.id}. </span> {post.title}{' '}
                <small>(by {post.author})</small>
            </p>
            <small>
              {post.upvotes} Upvotes | {timeAgo(post.date)}
            </small>
          </div>
        )}
      </div>
    );
  }
}

export default NewsList;
