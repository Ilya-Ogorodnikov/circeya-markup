import { FC } from 'react';
import { IContentTextProps } from '../../models';
import './style.scss';

const ContentText: FC<IContentTextProps> = ({ children }) => (
  <div className="content-text">{children}</div>
);

export default ContentText;
