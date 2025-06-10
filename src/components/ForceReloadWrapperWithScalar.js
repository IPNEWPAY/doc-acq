import React, { useEffect, useState } from 'react';
import Scalar from './ScalarDocusaurusCommonJS'; // ✅ Ya dentro de la misma carpeta

export default function ForceReloadWrapperWithScalar(props) {
  const [reloadHandled, setReloadHandled] = useState(false);

  useEffect(() => {
    const alreadyReloaded = sessionStorage.getItem('scalar-reloaded');
    if (!alreadyReloaded) {
      sessionStorage.setItem('scalar-reloaded', 'true');
      window.location.reload();
    } else {
      sessionStorage.removeItem('scalar-reloaded');
      setReloadHandled(true);
    }
  }, []);

  if (!reloadHandled) return null;

  return <Scalar {...props} />;
}
