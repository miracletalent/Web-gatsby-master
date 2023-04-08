import React from 'react';

export default function FlagIcon({ width = 46, height = 64, style = {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={width}
      height={height}
      style={style}
      viewBox="0 0 46 64"
    >
      <path
        fill="#1F325D"
        d="M43.9922 14.5168c-.6312-.505-1.5148-.6312-2.2722-.3787-2.0197.6311-9.215 2.5246-15.8422-.2525-6.3748-2.6509-11.1716-3.1558-13.57-3.2189V9.34122c1.7041-.75739 2.9664-2.46154 2.9664-4.48126C15.2742 2.20907 13.1283 0 10.4143 0c-2.71404 0-4.86 2.20907-4.86 4.92308 0 2.01972 1.19921 3.72386 2.96647 4.48126V55.1637H5.11249c-1.07298 0-1.8935.8205-1.8935 1.8935s.82052 1.8935 1.8935 1.8935H15.5898c1.073 0 1.8935-.8205 1.8935-1.8935s-.8205-1.8935-1.8935-1.8935h-3.3452V34.9034c2.0198.0631 6.3748.5049 12.1184 2.9033 3.1558 1.3254 6.3747 1.7673 9.2781 1.7673 4.4812 0 8.142-1.073 9.5937-1.5148 1.073-.3787 1.7672-1.3255 1.7672-2.4616v-18.998c0-.8205-.3787-1.641-1.0098-2.0828ZM10.3511 3.8501c.5681 0 1.073.44181 1.073 1.07298 0 .63116-.4418 1.07298-1.073 1.07298-.63112 0-1.07293-.44182-1.07293-1.07298 0-.63117.50493-1.07298 1.07293-1.07298Zm30.864 30.8639c-2.5247.7574-9.215 2.2091-15.4004-.3787-6.3748-2.6509-11.1716-3.1558-13.5701-3.2189V14.4536c2.0198.0632 6.3748.505 12.1184 2.9034 6.501 2.714 13.1913 1.7041 16.8521.8205V34.714ZM18.8087 60.213H1.89349C.820513 60.213 0 61.0335 0 62.1065S.820513 64 1.89349 64H18.8087c1.073 0 1.8935-.8205 1.8935-1.8935s-.8205-1.8935-1.8935-1.8935Z"
      />
    </svg>
  );
}