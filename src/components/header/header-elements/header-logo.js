import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from '@mui/material';

const logoTextColor = {
  dark: "#FFFFFF",
  light: "#162638"
}

export const Logo = () => {
  const { mode } = useSelector(state => state.options);

  return (
    <Link href="/" className="header__logo">
      <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="3" cy="3" r="3" fill="#2F80ED" />
        <circle cx="3" cy="11" r="3" fill="#FFBAA4" />
        <path d="M15.4716 9.5625H17.5C17.4602 7.59659 15.7841 6.20455 13.3068 6.20455C10.8636 6.20455 9.02841 7.57955 9.03409 9.63636C9.03409 11.3068 10.2216 12.267 12.1364 12.7614L13.4602 13.1023C14.7159 13.4205 15.5455 13.8125 15.5511 14.7159C15.5455 15.7102 14.6023 16.375 13.2273 16.375C11.9091 16.375 10.8864 15.7841 10.8011 14.5625H8.72727C8.8125 16.875 10.5341 18.1761 13.2443 18.1761C16.0341 18.1761 17.6534 16.7841 17.6591 14.733C17.6534 12.7159 15.9886 11.7955 14.2386 11.3807L13.1477 11.108C12.1932 10.8807 11.1591 10.4773 11.1705 9.50568C11.1761 8.63068 11.9602 7.98864 13.2784 7.98864C14.5341 7.98864 15.3636 8.57386 15.4716 9.5625ZM25.0099 14.3295C25.0099 15.6591 24.0611 16.3182 23.152 16.3182C22.1634 16.3182 21.5043 15.6193 21.5043 14.5114V9.27273H19.4474V14.8295C19.4474 16.9261 20.6406 18.1136 22.3565 18.1136C23.6634 18.1136 24.5838 17.4261 24.9815 16.4489H25.0724V18H27.0668V9.27273H25.0099V14.3295ZM29.1818 21.2727H31.2386V16.625H31.3239C31.6477 17.2614 32.3239 18.1534 33.8239 18.1534C35.8807 18.1534 37.4205 16.5227 37.4205 13.6477C37.4205 10.7386 35.8352 9.15909 33.8182 9.15909C32.2784 9.15909 31.6364 10.0852 31.3239 10.7159H31.2045V9.27273H29.1818V21.2727ZM31.1989 13.6364C31.1989 11.9432 31.9261 10.8466 33.25 10.8466C34.6193 10.8466 35.3239 12.0114 35.3239 13.6364C35.3239 15.2727 34.608 16.4659 33.25 16.4659C31.9375 16.4659 31.1989 15.3295 31.1989 13.6364ZM42.9886 18.1705C45.5455 18.1705 47.1705 16.3693 47.1705 13.6705C47.1705 10.9659 45.5455 9.15909 42.9886 9.15909C40.4318 9.15909 38.8068 10.9659 38.8068 13.6705C38.8068 16.3693 40.4318 18.1705 42.9886 18.1705ZM43 16.5227C41.5852 16.5227 40.892 15.2614 40.892 13.6648C40.892 12.0682 41.5852 10.7898 43 10.7898C44.392 10.7898 45.0852 12.0682 45.0852 13.6648C45.0852 15.2614 44.392 16.5227 43 16.5227Z" fill={logoTextColor[mode]} />
      </svg>
    </Link>
  );
}