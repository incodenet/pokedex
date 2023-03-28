import {css} from '@emotion/css';
import {fonts} from 'assets/css/theme';

export const card = css({
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  backgroundColor: 'whitesmoke',
  borderRadius: '5px',
  overflow: 'hidden',
  cursor: 'pointer',
  boxShadow: '0px 2px 5px #c7c7c7',

  img: {
    transition: 'transform 0.2s ease',
  },

  '&:hover': {
    img: {
      transform: 'scale(1.05)',
    },
  },
});

export const image = css({
  maxHeight: '250px',
  minHeight: '200px',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const title = css({
  fontSize: '20px',
  lineHeight: '1.3',
  fontFamily: fonts.semiBold,
  fontWeight: 'bold',
  margin: 0,
  padding: '15px 20px',
  textAlign: 'center',

  '&:first-letter': {
    textTransform: 'uppercase',
    color: 'red',
  },
});

export const status = css({
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: '100%',
  height: '3px',

  '&.status-dead': {
    backgroundColor: '#E43F5A',
  },

  '&.status-alive': {
    backgroundColor: 'green',
  },

  '&.status-unknown': {
    backgroundColor: 'grey',
  },
});
