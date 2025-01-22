import React, { useState } from "react";

export default function CopyableBox({ label, url }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="copyable-box">
      <div className="copyable-box-label">{label}</div>
      <div className="copyable-box-content">
        <span className="copyable-box-url">{url}</span>
        <button onClick={handleCopy} className="copyable-box-copy">
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}