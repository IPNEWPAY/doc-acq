import React from 'react';
import { RedocStandalone } from 'redoc';

const ApiPage = () => {
  return (
    <RedocStandalone specUrl="/swagger.yaml" />
  );
};

export default ApiPage;
