import React, { Component } from 'react';

export default class Filters extends Component {
  handleClearing = () => {
    this.props.clearAllFilters();
  };

  handleRemoveBtn = (e) => {
    const { target } = e;
    this.props.deleteFilter(target.value);
  };

  render() {
    const { filters } = this.props;
    return (
      <div className="filter-list__container">
        <div className="filter-list">
          {filters.map((el, index) => (
            <div className="filter-list__content" key={index}>
              <span className="filter__name filter-tag__btn">{el}</span>
              <button value={el} className="filter__delete-btn" onClick={this.handleRemoveBtn}>
                X
              </button>
            </div>
          ))}
        </div>
        <a className="clear-all" onClick={this.handleClearing}>
          Clear
        </a>
      </div>
    );
  }
}
