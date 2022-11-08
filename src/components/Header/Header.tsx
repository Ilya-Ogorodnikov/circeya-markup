import { FC, useState } from 'react';
import { logoImg, logoTitle, phoneIcon } from '../../assets';
import { contactPhone } from '../../utils/constants';
import { copyInClipboard } from '../../utils/helpers/copyInClipboard';
import './style.scss';

const Header: FC = () => {
  const [visibleDrop, setVisibleDrop] = useState(false);

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__content-logo">
          <img src={logoImg} alt="logo" />
          <img src={logoTitle} alt="title" />
        </div>
        <div className="header__content-contact">
          <div
            className="header__content-contact-number"
            onClick={() => copyInClipboard(contactPhone)}
          >
            {contactPhone}
          </div>
          <div className="header__content-contact-icon">
            <img
              src={phoneIcon}
              alt="phone icon"
              onClick={() => setVisibleDrop(prev => !prev)}
            />
            {visibleDrop && (
              <div
                className="header__content-contact-icon-drop"
                onClick={() => copyInClipboard(contactPhone)}
              >
                {contactPhone}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
