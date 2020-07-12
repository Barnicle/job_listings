import React from 'react';
import ListItem from './List__item';
export default class List extends React.Component {
  handleFilter = (e) => {
    const { target } = e;
    this.props.saveFilter(target.innerHTML);
  };
  render() {
    const { data } = this.props;
    return (
      <div className="list">
        {data.map((el) => (
          <ListItem key={el.id} el={el} handleFilter={this.handleFilter} />
        ))}
      </div>
    );
  }
}
