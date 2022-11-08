import { FC } from 'react';
import { IContentTitleProps } from '../../models';
import './style.scss';

const ContentTitle: FC<IContentTitleProps> = ({ children }) => (
  <h4 className="content-title">{children}</h4>
);

export default ContentTitle;
