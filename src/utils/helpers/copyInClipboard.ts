import { showToastSuccess } from './toast';

export const copyInClipboard = async (text: string) => {
  await navigator.clipboard.writeText(text);
  showToastSuccess('Copied!');
};
