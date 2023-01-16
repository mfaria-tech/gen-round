import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as iconSet from '@fortawesome/free-solid-svg-icons';

export default function SideBar(props) {
  return (
    <div data-sidebar {...props}>
      <ul>
        <li>
          <Icon icon="ChartLine" title="dashboard" />
        </li>
        <li>
          <Icon icon="FeatherPointed" title="write" />
        </li>
        <li>
          <Icon icon="Bookmark" title="favorite" />
        </li>
      </ul>
    </div>
  );
}

function Icon({ icon, title, ...props }) {
  return (
    <>
      <div data-icon>
        <FontAwesomeIcon 
          icon={iconSet[`fa${icon}`]}
          {...props}
        />
      </div>
      <span>{title}</span>
    </>
  )
}
