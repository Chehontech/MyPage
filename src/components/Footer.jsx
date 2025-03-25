import React from 'react';
import { icons } from './Icon';
import Notification from './Notification';

const Footer = () => {
  return (
    <footer class="footer sm:footer-horizontal text-neutral-content p-10 bg-base-100 flex justify-between">
    <aside>
      <p>
        Anton Yeremenko
        <br />
        2025
      </p>
    </aside>
    <nav>
      <div class="grid grid-flow-col gap-4">
        <a href=''>
            {icons.IconFacebook()}
        </a>
        <a>
            {icons.IconTwitter()}
        </a>
        <a>
            {icons.IconYoutube()}
        </a>
      </div>
      <Notification />
    </nav>
  </footer>
  );
};


export default Footer;
