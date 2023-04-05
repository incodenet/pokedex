import {memo} from 'react';
import {PCardProps} from './p-card-types';
import {image, card, title, badge, typesWrapper} from './p-card.styles';

const PCard = (props: PCardProps) => {
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
      <div className={typesWrapper}>
        {props.itemEntity?.types?.map(t => (
          <div className={badge}>{t?.type?.name}</div>
        ))}
      </div>
    </div>
  );
};

export const PCardMemoized = memo(PCard);
