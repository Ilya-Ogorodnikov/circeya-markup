import { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import {
  Header,
  TitleSection,
  ContentBlock,
  Slider,
  Footer,
} from '../../components';

import * as images from '../../assets';

const Main: FC = () => (
  <>
    <Header />

    <TitleSection>ut aliquip ex ea commodo consequat</TitleSection>

    <ContentBlock
      sourseImgFirstRow={images.contentFoto1}
      sourseImgSecondRow={images.contentFoto2}
    />

    <TitleSection>Lorem ipsum dolor sit amet</TitleSection>

    <Slider />

    <TitleSection>ut aliquip ex ea commodo consequat</TitleSection>

    <ContentBlock
      sourseImgFirstRow={images.contentFoto3}
      sourseImgSecondRow={images.contentFoto4}
    />

    <Footer />

    <ToastContainer />
  </>
);

export default Main;
