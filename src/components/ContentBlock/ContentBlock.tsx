import { FC } from 'react';
import { ContentTitle, ContentText } from '..';
import { IContentBlockProps } from '../../models';
import './style.scss';

const ContentBlock: FC<IContentBlockProps> = ({
  sourseImgFirstRow,
  sourseImgSecondRow,
}) => (
  <div className="content-block">
    <div className="content-block__row">
      <div className="content-block__section-img">
        <img src={sourseImgFirstRow} alt="content foto № 1" />
      </div>

      <div className="content-block__section-text">
        <ContentTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </ContentTitle>

        <ContentText>
          <p>
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>
        </ContentText>
      </div>
    </div>

    <div className="content-block__row second-row">
      <div className="content-block__section-text second-row-section">
        <ContentTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </ContentTitle>

        <ContentText>
          <p>
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>
        </ContentText>
      </div>

      <div className="content-block__section-img">
        <img src={sourseImgSecondRow} alt="content foto № 1" />
      </div>
    </div>
  </div>
);

export default ContentBlock;
