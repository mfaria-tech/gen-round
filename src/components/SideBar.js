import React from 'react';
import Image from 'next/image';
import iconEditNote from '../../public/img/icons/edit_note.svg';
import iconQueryStats from '../../public/img/icons/query_stats.svg';
import iconTune from '../../public/img/icons/tune.svg';

export default function SideBar(props) {
  return (
    <div data-sidebar {...props}>
      <ul>
        <li>
          <Icon icon={iconQueryStats} alt="dashboard" title="dashboard" />
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

// function Icon({ icon, title, ...props }) {
//   return (
//     <>
//       <div data-icon>
//         <FontAwesomeIcon 
//           icon={iconSet[`fa${icon}`]}
//           {...props}
//         />
//       </div>
//       <span>{title}</span>
//     </>
//   )
// }

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
