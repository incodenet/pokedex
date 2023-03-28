import {PCard} from 'components/primitives/p-card';
import {PCardProps} from 'components/primitives/p-card/p-card-types';

export const CCard = ({itemEntity, ...rest}: PCardProps) => {
  return <PCard itemEntity={itemEntity} {...rest} />;
};
