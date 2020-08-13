import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeading,
  faBold,
  faStrikethrough,
} from '@fortawesome/free-solid-svg-icons';

export default class Functions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="editor-function">
        <i className="toolbar-item"><FontAwesomeIcon icon={faHeading} /></i>
        <i className="toolbar-item"><FontAwesomeIcon icon={faBold} /></i>
        <i className="toolbar-item"><FontAwesomeIcon icon={faStrikethrough} /></i>
        <i className="cut-off" />
        <i className="toolbar-item has-children">标</i>
      </div>
    )
  }
}
