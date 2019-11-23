import React from 'react';
import { css } from '@emotion/core';
import { BounceLoader } from 'react-spinners';

const override = css`
  display: block;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -100px;
  position: fixed;
  z-index: 999;
`;

const Loader = () => (
  <div className="sweet-loading">
    <BounceLoader
      css={override}
      sizeUnit="px"
      size={200}
      color="#3884ff"
      loading
    />
  </div>
);

export default Loader;
