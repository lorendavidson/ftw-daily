import React from 'react';
import classNames from 'classnames';

import css from './SectionBlog.module.css';

export default class SectionBlog extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = "https://www.twilik.com/assets/retainable/rss-embed/retainable-rss-embed.js";
    this.instance.appendChild(s);
  }

  render() {
    return (
      <div>
        <div ref={el => (this.instance = el)} />
        <h3 className={css.title}>Blog</h3>
        <div id="retainable-rss-embed" 
          data-rss="https://medium.com/feed/@meltem.algan"
          data-maxcols="3" 
          data-layout="grid" 
          data-poststyle="inline" 
          data-readmore="Read the rest" 
          data-buttonclass="btn btn-primary" 
          data-offset="-100">
        </div>
      </div>
    )
  }
}
