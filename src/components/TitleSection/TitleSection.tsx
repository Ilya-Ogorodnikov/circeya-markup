import { FC } from 'react';
import { ITitleSectionProps } from '../../models';
import './style.scss';

const TitleSection: FC<ITitleSectionProps> = ({ children }) => (
  <h3 className="title-section">{children}</h3>
);

export default TitleSection;
