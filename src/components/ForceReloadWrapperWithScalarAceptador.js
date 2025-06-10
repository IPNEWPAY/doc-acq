import React, { useEffect, useState } from 'react';
import Scalar from './ScalarDocusaurusCommonJS_Aceptador'; // versión para API de Aceptador

export default function ForceReloadWrapperWithScalarAceptador(props) {
  const [reloadHandled, setReloadHandled] = useState(false);

  useEffect(() => {
    const alreadyReloaded = sessionStorage.getItem('scalar-aceptador-reloaded');
    if (!alreadyReloaded) {
      sessionStorage.setItem('scalar-aceptador-reloaded', 'true');
      window.location.reload();
    } else {
      sessionStorage.removeItem('scalar-aceptador-reloaded');
      setReloadHandled(true);
    }
  }, []);

  if (!reloadHandled) return null;

  return <Scalar {...props} />;
}
