import React from 'react';
import { ColorModeProvider } from '@docusaurus/theme-common';
import Redoc from 'redoc';

export default function OpenApiCloudPage() {
  return (
    <ColorModeProvider>
      <Redoc specUrl="/path/to/swagger.yaml" />
    </ColorModeProvider>
  );
}
