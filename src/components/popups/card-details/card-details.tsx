import {cx} from '@emotion/css';
import {Images} from 'assets/images';
import {root, container, close, show, title, status, caption, desc, main, info} from './card-details.styles';
import {CardDetailsProps} from './card-details.types';

export const CardDetails = ({onClose, content}: CardDetailsProps) => {
  return (
    <div className={cx(root, content?.visible && show)} onClick={onClose}>
      <div className={container} onClick={e => e.stopPropagation()}>
        <div className={close} onClick={onClose}>
          <img src={Images.Close} alt="" width={16} height={15} />
        </div>
        <h3 className={title}>{content?.itemEntity?.name}</h3>
        <div className={main}>
          <img src={content?.itemEntity?.sprites?.other?.dream_world?.front_default} alt="" width={300} height={300} />
          <div className={caption}>
            <div className={desc}>
              There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.
            </div>
            <div className={status}>
              <div className={`indicator status`} />
              {content?.itemEntity?.species?.name}
            </div>
            <div className={info}>
              <ul>
                <li>Heigh:</li>
                <li>{content?.itemEntity?.height || '-'}</li>
              </ul>
              <ul>
                <li>Weight:</li>
                <li>{content?.itemEntity?.weight || '-'}</li>
              </ul>
              <ul>
                <li>Category:</li>
              </ul>
              <ul>
                <li>Abilities:</li>
              </ul>
              <ul>
                <li>Type:</li>
                <li>{content?.itemEntity?.types?.map(t => <span>{t?.type?.name}</span>) || '-'}</li>
              </ul>
              <ul>
                <li>Weaknesses:</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
