import {useGlobalStyles} from 'hooks';
import {PageHome} from 'components/pages/home';
import {PFooter} from 'components/primitives/p-footer';
import {PHeader} from 'components/primitives/p-header';

export const CApp = () => {
  useGlobalStyles();

  return (
    <div className="app">
      <PHeader />
      <main>
        <PageHome />
      </main>
      <PFooter />
    </div>
  );
};
