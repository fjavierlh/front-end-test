import React from 'react';

export const Description = ({ product }) => {
  const {
    dimensions,
    weight,
    displayType,
    displayResolution,
    displaySize,
    os,
    cpu,
    chipset,
    externalMemory,
    internalMemory,
    ram,
    primaryCamera,
    secondaryCamera,
    nfc,
    usb,
  } = { ...product };
  return (
    <article>
      <div>Description:</div>
      {dimensions && <p>Dimensions: {dimensions}</p>}
      {weight && <p>Weight: {weight}</p>}
      {displayType && <p>Display Type: {displayType}</p>}
      {displayResolution && <p>Display Resolution: {displayResolution}</p>}
      {displaySize && <p>Display Size: {displaySize}</p>}
      {os && <p>OS: {os}</p>}
      {cpu && <p>CPU: {cpu}</p>}
      {chipset && <p>Chipset: {chipset}</p>}
      {externalMemory && <p>External Memory: {externalMemory}</p>}
      {internalMemory && <p>Internal Memory: {internalMemory}</p>}
      {ram && <p>RAM: {ram}</p>}
      {primaryCamera && <p>Primary Camera: {primaryCamera}</p>}
      {secondaryCamera && <p>Secondary Camera: {secondaryCamera}</p>}
      {nfc && <p>NFC: {nfc}</p>}
      {usb && <p>USB: {usb}</p>}
    </article>
  );
};
