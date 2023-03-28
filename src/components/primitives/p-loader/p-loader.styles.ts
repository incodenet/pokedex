import {css, keyframes} from '@emotion/css';

export const wrapper = css({
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '30vh',
});

export const root = css({
  backgroundColor: '#f0f0f0',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  position: 'relative',

  '&:before': {
    content: '""',
    display: 'block',
    paddingTop: '100%',
  },
});

export const rotate = keyframes({
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const dash = keyframes({
  '0%': {
    strokeDasharray: '1, 200',
    strokeDashoffset: 0,
  },
  '50%': {
    strokeDasharray: '89, 200',
    strokeDashoffset: '-35px',
  },
  '100%': {
    strokeDasharray: '89, 200',
    strokeDashoffset: '-145px',
  },
});

export const circular = css({
  animation: `${rotate} 2.2s linear infinite`,
  height: '100%',
  transformOrigin: 'center center',
  width: '100%',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: 'auto',
});

export const path = css({
  strokeDasharray: '1, 200',
  strokeDashoffset: 0,
  animation: `${dash} 1.6s ease-in-out infinite`,
  strokeLinecap: 'round',
});
