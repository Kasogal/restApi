/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class TreeNode extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true, selected: '' };
    this.onClick = this.onClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const newState = {};
    if ('collapsed' in nextProps.data && !nextProps.data.collapsed) {
      newState.collapsed = nextProps.data.collapsed;
    }
    newState.selected =
      nextProps.data.slug === nextProps.selected ? 'active' : '';
    this.setState(newState);
  }

  onClick(e) {
    e.preventDefault();
    this.setState({
      collapsed: !this.state.collapsed,
    });
    this.props.data.collapsed = !this.state.collapsed;
    this.props.setSelection(this.props.data);
  }

  render() {
    const checkPerm = permission =>
      this.props.permissions.indexOf(permission) !== -1;

    let subtree = null;
    if (this.props.data.children) {
      subtree = this.props.data.children
        .sort((a, b) => a.priority - b.priority)
        .map(child => <TreeNode {...this.props} key={child.id} data={child} />);
    }

    let containerClassName = 'collapse in ';
    let linkclass = 'accordian-heading ';
    let treeState = 'open';
    if (this.state.collapsed) {
      linkclass += 'collapsed';
      treeState = '';
      containerClassName = 'collapse';
    }
    let hasPerms = true;
    const itemPermissions = this.props.data.permissions;
    if (itemPermissions && itemPermissions.length > 0) {
      hasPerms = itemPermissions.filter(name => checkPerm(name)).length > 0;
    }
    if (!hasPerms) {
      return <div />;
    }

    if (subtree) {
      return (
        <li className={`rvm--has-sub ${treeState}`}>
          <Link
            className={linkclass}
            onClick={this.onClick}
            data-id={this.props.data.id}
          >
            {this.props.data.icon && (
              <i className={`menu-icon ${this.props.data.icon}`} />
            )}
            <span>{this.props.data.label}</span>
          </Link>
          <ul className={`${containerClassName} nav nav-list`}>{subtree}</ul>
        </li>
      );
    }
    return (
      <li className={`tree-node-leaf ${this.state.selected}`}>
        <Link
          data-id={this.props.data.id}
          to={`/admin/${this.props.data.slug}`}
          onClick={e => this.props.setActiveRoute(e, this.props.data)}
        >
          {this.props.data.icon && (
            <i className={`menu-icon ${this.props.data.icon}`} />
          )}
          <span>{this.props.data.label}</span>
        </Link>
      </li>
    );
  }
}

TreeNode.propTypes = {
  setSelection: PropTypes.func,
  data: PropTypes.object,
  selected: PropTypes.string,
  permissions: PropTypes.array,
  setActiveRoute: PropTypes.func,
};

export default TreeNode;
