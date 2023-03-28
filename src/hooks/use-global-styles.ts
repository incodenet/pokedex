import {injectGlobal} from '@emotion/css';
import {fonts} from 'assets/css/theme';

export const useGlobalStyles = () => injectGlobal`
  @font-face {
	font-family: ${fonts.regular};
	font-style: normal;
	src: url(/fonts/Roboto-Regular.woff) format('woff'), 
		url(/fonts/Roboto-Regular.woff2) format('woff2');
	font-display: swap;
  }

  @font-face {
	font-family: ${fonts.semiBold};
	font-style: normal;
	src: url(/fonts/Roboto-SemiBold.woff) format('woff'), 
		url(/fonts/Roboto-SemiBold.woff2) format('woff2');
	font-display: swap;
  }

  body {
	font-family: ${fonts.regular};
  }

  body, html, #root {
	height: 100%;
  }

  .app {
	display: flex;
	flex-flow: column nowrap;
	min-height: 100vh;

	main {
		flex: 1 0 auto;
	}
  }
`;
