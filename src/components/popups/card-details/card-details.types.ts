import {Pokemon} from 'types/api';
export type CardDetailsProps = {
  content?: {visible: boolean; itemEntity: Pokemon};
  onClose?: () => void;
};
