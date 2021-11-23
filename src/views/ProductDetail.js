import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetchSingleProduct from '../hooks/useFetchSingleProduct.hook';

export const ProductDetailView = ({ onAddToCart }) => {
  const location = useLocation();
  const id = location.state.id;

  const defaultOptions = { id, colorCode: null, storageCode: null };

  const [userOptions, setUserOptions] = useState(defaultOptions);

  const { product, ...loadStateProduct } = useFetchSingleProduct(
    location.state.id
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    await onAddToCart({ ...userOptions, id });
  };

  const onChangeColor = (e) => {
    const colorCode = parseInt(e.target.value);
    setUserOptions({ ...userOptions, colorCode });
  };
  const onChangeStorage = (e) => {
    const storageCode = parseInt(e.target.value);
    setUserOptions({ ...userOptions, storageCode });
  };

  if (loadStateProduct.loading) {
    return <p>Loading...</p>;
  }

  if (loadStateProduct.error) {
    return <p>Shomething was wrong... :(</p>;
  }

  const {
    imgUrl,
    brand,
    model,
    options: { colors, storages },
  } = { ...product };
  return (
    <div key={id}>
      <div>
        <h2>
          {brand} {model}
        </h2>
        <img src={imgUrl} alt={`${brand}-${model}`} />
      </div>
      <div>Description:</div>
      <div>
        Options:
        <form onSubmit={onSubmit}>
          <select onChange={onChangeColor}>
            <option disabled selected>
              Colors
            </option>
            {colors &&
              colors.map(({ name, code }) => (
                <option value={code}>{name}</option>
              ))}
          </select>
          <select onChange={onChangeStorage}>
            <option disabled selected>
              Storages
            </option>
            {storages &&
              storages.map(({ name, code }) => (
                <option value={code}>{name}</option>
              ))}
          </select>
          {}
          <button disabled={!userOptions.colorCode || !userOptions.storageCode}>
            Add to cart
          </button>
        </form>
      </div>
    </div>
  );
};
