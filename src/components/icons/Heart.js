import React from 'react';

export default function HeartIcon({ width = 72, height = 64, style = {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={width}
      height={height}
      style={style}
      viewBox="0 0 72 64"
    >
      <path
        fill="#1F325D"
        d="M35.9024 64c-.4998 0-.9996-.1678-1.4994-.4194-1.3328-.8388-2.5823-1.6776-3.8318-2.4325C13.4947 50.2438 0 41.6881 0 23.0668 0 10.1494 8.99644 0 20.4086 0c6.3308 0 12.0785 2.93578 15.4938 5.78768C39.3178 2.93578 45.0655 0 51.3963 0c11.4121 0 20.4086 10.1494 20.4086 23.0668 0 18.6213-13.4947 27.177-30.5712 38.0813-1.2495.8388-2.499 1.5937-3.8319 2.4325-.4998.2516-.9996.4194-1.4994.4194ZM20.4086 3.35518c-10.66246 0-17.07659 9.98162-17.07659 19.71162 0 16.7759 12.16189 24.4928 29.07179 35.2294l3.4986 2.2647c1.1662-.7549 2.3325-1.5098 3.4987-2.2647 16.8266-10.7366 29.0718-18.4535 29.0718-35.2294 0-9.73-6.4142-19.71162-17.0766-19.71162-5.6644 0-10.829 2.76802-13.6613 5.36828-.9996.92267-2.5823.92267-3.5819 0-2.9155-2.60026-8.0801-5.36828-13.7445-5.36828Z"
      />
      <path
        fill="#1F325D"
        d="M40.5677 52.089h-9.3296c-1.4161 0-2.5823-1.1743-2.5823-2.6003V39.2555H18.5764c-1.4161 0-2.5823-1.1744-2.5823-2.6003v-9.3106c0-1.426 1.1662-2.6003 2.5823-2.6003h10.0794V14.511c0-1.4259 1.1662-2.6002 2.5823-2.6002h9.3296c1.4161 0 2.5823 1.1743 2.5823 2.6002v10.1494h10.0794c1.4161 0 2.5823 1.1744 2.5823 2.6003v9.3945c0 1.4259-1.1662 2.6003-2.5823 2.6003H43.15v10.2332c0 1.426-1.1662 2.6003-2.5823 2.6003Zm-8.5799-3.3552h7.8302V35.9003h12.6617v-7.8847H39.818V15.2659h-7.8302v12.7497H19.3262v7.8847h12.6616v12.8335Z"
      />
    </svg>
  );
}