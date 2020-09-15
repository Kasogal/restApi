import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TreeNode from './treeNode';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.setActiveRoute = this.setActiveRoute.bind(this);
    this.state = {
      data: this.props.data,
      permissions: this.props.permissions || [],
      selected: this.props.selected,
    };
  }

  onSelect(data) {
    const newData = this.props.data.map(item => {
      if (item.label === data.label) {
        return data;
      }
      return item;
    });
    this.setState({ data: newData });
  }

  setActiveRoute(e, data) {
    this.setState({ selected: data.slug });
  }

  render() {
    const tree = this.state.data.map(child => (
      <TreeNode
        permissions={this.state.permissions}
        key={child.id}
        data={child}
        selected={this.state.selected}
        setSelection={this.onSelect}
        setActiveRoute={this.setActiveRoute}
      />
    ));

    return <ul className={this.props.parentClass}>{tree}</ul>;
  }
}
Menu.propTypes = {
  data: PropTypes.array,
  permissions: PropTypes.array,
  selected: PropTypes.string,
  parentClass: PropTypes.string,
};
Menu.defaultProps = {
  parentClass: 'rvm--parent',
};

export default Menu;
