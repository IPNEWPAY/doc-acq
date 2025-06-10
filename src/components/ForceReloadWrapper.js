import React, { useEffect } from 'react';

export default function ForceReloadWrapper() {
  useEffect(() => {
    const alreadyReloaded = sessionStorage.getItem('reloaded-once');
    if (!alreadyReloaded) {
      sessionStorage.setItem('reloaded-once', 'true');
      window.location.reload();
    } else {
      sessionStorage.removeItem('reloaded-once');
    }
  }, []);

  return null;
}
