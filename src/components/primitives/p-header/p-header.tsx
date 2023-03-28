import {Images} from 'assets/images';
import {root} from './p-header.styles';

export const PHeader = () => {
  return (
    <header className={root}>
      <img src={Images.PokemonLogo} alt="" width={200} height={70} />
    </header>
  );
};
