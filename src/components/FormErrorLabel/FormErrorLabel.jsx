import React from 'react';

import Style from './style/FormErrorLabel.module.css';

const FormErrorLabel = ({ error }) => {
  return <>{error && <label className={Style.error__label}>{error}</label>}</>;
};

export default FormErrorLabel;
