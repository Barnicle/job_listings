import React from 'react';

export default class ListItem extends React.Component {

  render() {
    const {
      languages,
      logo,
      company,
      featured,
      position,
      postedAt,
      contract,
      location,
    } = this.props.el;

    const new_tag = this.props.el.new;
    return (
      <div  className={`list-item list-item__size ${featured ? 'list-item__featured' : ''}`}>
        <div className="list-item__content">
          <img className="list-item__img" src={`${logo}`} alt={company} />
          <div className="list-item__job-info">
            <div className="job-info__company">
              <h4>{company}</h4>
              {new_tag && <div className='tag tag__new'>new!</div>}
              {featured && <div className='tag tag__featured'>FEATURED</div>}
            </div>
            <h2 className="job-info__job-position">{position}</h2>
            <div className="job-info__details">
              <span>{postedAt}</span>•<span>{contract}</span>•<span>{location}</span>
            </div>
          </div>
        </div>
        <div className="list-item__filter-tags">
          <hr/>
          <div>{languages.map((el, index) => (
            <button className="filter-tag__btn filter-tag__position" key={index*10} value={el} onClick={this.props.handleFilter}>
              {el}
            </button>
          ))}</div>
        </div>
      </div>
    );
  }
}
