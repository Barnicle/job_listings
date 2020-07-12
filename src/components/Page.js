import React, { Component } from 'react';
import data from '../data.json';
import Filters from './Filters';
import List from './List';

export default class App extends Component {
  state = {
    data,
    filters: [],
  };

  saveFilter = (filter) => {
    const { filters } = this.state;
    if (!this.checkFilter(filter)) {
      filters.splice(filters.length - 1, 0, filter);
      this.setState({
        filters,
      });
    }
  };

  filterList = () => {
    const { data, filters } = this.state;
    if (filters.length === 0) return data;
    else return data.filter((el) => el.languages.some((element) => filters.includes(element)));
  };

  checkFilter = (filter) => this.state.filters.includes(filter); //check if Filter already existed

  deleteFilter = (filter) => {
    const { filters } = this.state;
    const result = filters.filter((el) => el != filter);
    this.setState({
      filters: result,
    });
  };

  clearAllFilters = () => {
    this.setState({
      filters: [],
    });
  };

  render() {
    const { data, filters } = this.state;
    const list = this.filterList(data);
    return (
      <div className="app">
        <header className="header header__size">
          {filters.length != 0 && (
            <Filters
              filters={filters}
              deleteFilter={this.deleteFilter}
              clearAllFilters={this.clearAllFilters}
            />
          )}
        </header>
        <List data={list} handleFilter={this.handleFilter} saveFilter={this.saveFilter} />
      </div>
    );
  }
}
