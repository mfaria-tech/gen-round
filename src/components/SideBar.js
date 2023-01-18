import React from 'react';
import Image from 'next/image';
import iconEditNote from '../../public/img/icons/edit_note.png';
import iconMonitoring from '../../public/img/icons/monitoring.png';
import iconTune from '../../public/img/icons/tune.png';

export default function SideBar(props) {
  return (
    <div data-sidebar {...props}>
      <ul>
        <li>
          <Icon icon={iconMonitoring} alt="dashboard" title="dashboard" />
        </li>
        <li>
          <Icon icon={iconEditNote} alt="write" title="write" />
        </li>
        <li>
          <Icon icon={iconTune} alt="settings" title="settings" />
        </li>
      </ul>
    </div>
  );
}

function Icon({ icon, alt, title, ...props }) {
  return (
    <>
      <div data-icon>
        <Image 
          data-icon
          src={icon}
          alt={alt}
          {...props}
        />
      </div>
      <span>{title}</span>
    </>
  )
}
