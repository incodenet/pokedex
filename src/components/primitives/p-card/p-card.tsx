import {PCardProps} from './p-card-types';
import {image, card, title} from './p-card.styles';

export const PCard = (props: PCardProps) => {
  return (
    <div className={card} onClick={props.onClick}>
      <h3 className={title}>{props.itemEntity?.name}</h3>
      <div className={image}>
        <img
          src={props.itemEntity?.sprites?.other?.dream_world?.front_default}
          alt={props.itemEntity?.name}
          width={175}
          height={302}
        />
      </div>
    </div>
  );
};
