import React from 'react';

interface IChildrenProps {
  children: React.ReactNode;
}

export interface IContentBlockProps {
  sourseImgFirstRow: string;
  sourseImgSecondRow: string;
}

export interface IContentTextProps extends IChildrenProps {}

export interface IContentTitleProps extends IChildrenProps {}

export interface ITitleSectionProps extends IChildrenProps {}
