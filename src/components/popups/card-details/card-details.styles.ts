import {css} from '@emotion/css';
import {fonts, mediaBreakpoints} from 'assets/css/theme';

export const root = css({
  display: 'grid',
  padding: '15px 30px',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0, 0.5)',
  visibility: 'hidden',
  opacity: '0',

  [`@media (max-width: ${mediaBreakpoints.mobile}px)`]: {
    display: 'block',
    padding: '0',
  },
});

export const show = css({
  visibility: 'visible',
  opacity: '1',
  transition: 'all 0.2s ease',
});

export const container = css({
  padding: '38px 20px 30px',
  backgroundColor: 'white',
  maxWidth: '1080px',
  width: '100%',
  margin: 'auto',
  borderRadius: '12px',
  position: 'relative',
  display: 'grid',
  alignContent: 'start',
  gap: '25px',

  img: {
    margin: '0 auto',
  },

  [`@media (max-width: ${mediaBreakpoints.mobile}px)`]: {
    padding: '15px 30px',
    maxWidth: '100%',
    width: 'auto',
    margin: 'auto',
    borderRadius: '0',
    height: '100%',
    overflow: 'auto',
  },
});

export const main = css({
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '15px',
});

export const desc = css({});

export const info = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
});

export const close = css({
  position: 'absolute',
  top: '15px',
  right: '15px',
  cursor: 'pointer',
});

export const caption = css({
  display: 'grid',
  gap: '15px',

  ul: {
    margin: '0 auto',
    padding: 0,
    listStyle: 'none',
    display: 'grid',
    gap: '5px',
    fontSize: '18px',

    li: {
      '&:first-child': {
        color: '#333',
        fontWeight: '600',
        fontSize: '16px',
      },
    },
  },
});

export const title = css({
  fontSize: '1.7em',
  fontFamily: fonts.semiBold,
  margin: 0,
  textAlign: 'center',
});

export const status = css({
  display: 'grid',
  gridTemplateColumns: '10px auto',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '7px',

  '.indicator': {
    width: '10px',
    height: '10px',
    borderRadius: '50%',

    '&.status-dead': {
      backgroundColor: 'red',
    },

    '&.status-alive': {
      backgroundColor: 'green',
    },

    '&.status-unknown': {
      backgroundColor: 'grey',
    },
  },
});
