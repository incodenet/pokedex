import {css} from '@emotion/css';
import {fonts, mediaBreakpoints} from 'assets/css/theme';

export const wrapper = css({
  padding: '30px 0',
  marginBottom: '30px',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'start',
});

export const container = css({
  flex: '1 1 auto',
  padding: '0 30px',
});

export const listing = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '30px',
});

export const notFound = css({
  color: 'white',
  margin: '70px 0',
  paddingLeft: '1%',
  flex: '1 0 auto',
});

export const filterWrapper = css({
  display: 'grid',
  gap: '20px',
  marginBottom: 25,
  flex: '0 0 320px',
  maxWidth: '320px',
  padding: '0 30px',

  [`@media (min-width: ${mediaBreakpoints.tablet}px)`]: {
    position: 'sticky',
    top: '15px',
  },
});

export const filterTitle = css({
  fontSize: '1.4em',
  fontFamily: fonts.semiBold,
});

export const filterPanel = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  justifyContent: 'start',
  gap: '20px',
});

export const pagination = css({
  width: '100%',
  margin: '35px 0',
});

export const pagingItem = css({
  display: 'none',

  '&:nth-child(-n+4)': {
    display: 'block',
  },

  '&:last-child': {
    display: 'block',
  },
});
