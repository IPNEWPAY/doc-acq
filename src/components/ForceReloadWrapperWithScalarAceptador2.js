import React, { useEffect, useState } from 'react';
import Scalar from './ScalarDocusaurusCommonJS_Aceptador2'; // versión para API de Aceptador

export default function ForceReloadWrapperWithScalarAceptador(props) {
  const [reloadHandled, setReloadHandled] = useState(false);

  useEffect(() => {
    const alreadyReloaded = sessionStorage.getItem('scalar-aceptador2-reloaded');
    if (!alreadyReloaded) {
      sessionStorage.setItem('scalar-aceptador2-reloaded', 'true');
      window.location.reload();
    } else {
      sessionStorage.removeItem('scalar-aceptador2-reloaded');
      setReloadHandled(true);
    }
  }, []);

  if (!reloadHandled) return null;

  return <Scalar {...props} />;
}
