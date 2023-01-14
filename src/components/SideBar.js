import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as iconSet from '@fortawesome/free-solid-svg-icons';

export default function SideBar(props) {
  return (
    <div data-sidebar {...props}>
      <ul>
        <li>
          <Icon icon="ChartLine" />
        </li>
        <li>
          <Icon icon="FeatherPointed" />
        </li>
        <li>
          <Icon icon="Bookmark" />
        </li>
      </ul>
    </div>
  );
}

function Icon({ icon, ...props }) {
  return (
    <FontAwesomeIcon 
      icon={iconSet[`fa${icon}`]}
      {...props}
    />
  )
}
