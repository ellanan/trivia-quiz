/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { GoMarkGithub } from 'react-icons/go';
import { FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      `}
    >
      <a
        href='https://github.com/ellanan'
        target='_blank'
        rel='noreferrer'
        css={css`
          padding: 10px;
        `}
      >
        <GoMarkGithub size={18} color='#000' />
      </a>
      <a
        href='https://twitter.com/ellanan_'
        target='_blank'
        rel='noreferrer'
        css={css`
          padding: 10px;
        `}
      >
        <FaTwitter size={18} color='#1DA1F2' />
      </a>
    </div>
  );
};
