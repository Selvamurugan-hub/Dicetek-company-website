import React from 'react';

export default function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 65" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <style>
          {`
            .logo-text {
              font-family: Impact, Arial Black, sans-serif;
              font-weight: 900;
              font-style: italic;
              font-size: 44px;
              fill: #0B5C9A;
              letter-spacing: -1px;
            }
          `}
        </style>
      </defs>
      
      {/* Red square */}
      <rect x="42" y="16" width="10" height="9" fill="#E81C24" />
      
      {/* Red arch */}
      <path d="M 56,18 C 80,0 120,-2 165,18 C 130,2 80,6 56,22 Z" fill="#E81C24" />
      
      {/* Text */}
      <text x="10" y="55" className="logo-text">dicetek</text>
    </svg>
  );
}
