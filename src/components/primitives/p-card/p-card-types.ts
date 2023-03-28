import {Pokemon} from 'types/api';

export type PCardProps = {
  className?: string;
  itemEntity?: Pokemon;
  onClick?: () => void;
};
