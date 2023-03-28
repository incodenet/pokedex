import {Images} from 'assets/images';
import {footerBrand, root} from './p-footer.styles';

export const PFooter = () => {
  return (
    <footer className={root}>
      <div className={footerBrand}>
        <img src={Images.Pokedex} alt="" width={50} height={50} />
        <div>
          <h3>Pokedex</h3>
        </div>
      </div>
      <div>
        <a href="/" rel="noopener noreferrer" target="_blank">
          <img src={Images.GithubLogo} alt="" width={35} height={35} />
        </a>
      </div>
      <div>Copyright © 2023</div>
    </footer>
  );
};
