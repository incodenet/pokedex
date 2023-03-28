import {wrapper, circular, path, root} from './p-loader.styles';

export const PLoader = () => (
  <div className={wrapper}>
    <div className={root}>
      <svg className={circular} viewBox="25 25 50 50">
        <circle
          className={path}
          cx="50"
          cy="50"
          r="22"
          fill="none"
          stroke="black"
          strokeWidth="4"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  </div>
);
