import React from "react";

export default function Star({ classes }) {
  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      fill="none"
      viewBox="0 0 20 18"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.167 1.658a.9.9 0 0 1 1.716 0l1.55 4.767h5a.908.908 0 0 1 .534 1.667l-4.059 2.941 1.55 4.775a.9.9 0 0 1-1.391 1.009L10 13.842l-4.058 2.95a.9.9 0 0 1-1.392-1.009l1.55-4.775-4.058-2.941A.908.908 0 0 1 2.575 6.4h5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
