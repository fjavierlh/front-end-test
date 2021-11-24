import React from 'react';
import styled from 'styled-components';

export const Description = ({ product }) => {
  const {
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    battery,
    primaryCamera,
    secondaryCamera,
    displayResolution,
    dimensions,
    weight,
    displayType,
    displaySize,
    chipset,
    externalMemory,
    internalMemory,
    nfc,
    usb,
  } = { ...product };
  return (
    <DescriptionStyled>
      <div className="description">
        <dl className="description-left">
          {brand && (
            <>
              <dt>Brand</dt>
              <dd>{brand}</dd>
            </>
          )}
          {model && (
            <>
              <dt>Model</dt>
              <dd>{model}</dd>
            </>
          )}
          {price && (
            <>
              <dt>Price</dt>
              <dd>{price}€</dd>
            </>
          )}
          {cpu && (
            <>
              <dt>CPU</dt>
              <dd>{cpu}</dd>
            </>
          )}
          {ram && (
            <>
              <dt>RAM</dt>
              <dd>{ram}</dd>
            </>
          )}
          {os && (
            <>
              <dt>OS</dt>
              <dd>{os}</dd>
            </>
          )}
          {displayResolution && (
            <>
              <dt>Display Resolution</dt>
              <dd>{displayResolution}</dd>
            </>
          )}
          {battery && (
            <>
              <dt>Battery</dt>
              <dd>{battery}</dd>
            </>
          )}
          {dimensions && (
            <>
              <dt>Dimensions</dt>
              <dd>{dimensions}</dd>
            </>
          )}
          {weight && (
            <>
              <dt>Weight</dt>
              <dd>{weight}</dd>
            </>
          )}
        </dl>
        <dl className="description-left">
          {(primaryCamera || secondaryCamera) && (
            <>
              <dt>Cameras</dt>
              <dd>
                {primaryCamera && (
                  <>
                    <dt>Primary Camera</dt>
                    <dd>{primaryCamera}</dd>
                  </>
                )}
                {secondaryCamera && (
                  <>
                    <dt>Secondary Camera</dt>
                    <dd>{secondaryCamera}</dd>
                  </>
                )}
              </dd>
            </>
          )}

          {displayType && (
            <>
              <dt>Display Type</dt>
              <dd>{displayType}</dd>
            </>
          )}

          {displaySize && (
            <>
              <dt>Display Size</dt>
              <dd> {displaySize}</dd>
            </>
          )}

          {chipset && (
            <>
              <dt>Chipset</dt>
              <dd>{chipset}</dd>
            </>
          )}
          {externalMemory && (
            <>
              <dt>External Memory</dt>
              <dd>{externalMemory}</dd>
            </>
          )}
          {internalMemory && (
            <>
              <dt>Internal Memory</dt>
              <dd>{internalMemory}</dd>
            </>
          )}

          {nfc && (
            <>
              <dt>NFC</dt>
              <dd>{nfc}</dd>
            </>
          )}
          {usb && (
            <>
              <dt>USB</dt>
              <dd>{usb}</dd>
            </>
          )}
        </dl>
      </div>
    </DescriptionStyled>
  );
};

const DescriptionStyled = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  dl {
    margin: 0;
  }

  dt {
    text-transform: uppercase;
    font-size: 0.9em;
    font-weight: bold;
    margin-top: 0.5rem;
    margin-top: 0.8rem;
  }

  dd > dt {
    font-size: 0.8em;
    margin-left: 2em;
    margin-bottom: 0.5rem;
  }
  dd > dd {
    font-size: 0.8em;
    margin-left: 2em;
  }

  dd {
    font-size: 0.9rem;
    margin: 0;
    font-weight: lighter;
  }

  & > .description {
    display: flex;
    gap: 1.5em;

    justify-content: space-evenly;
  }
`;
