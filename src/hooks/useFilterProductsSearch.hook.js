import { useEffect, useState } from 'react';

const useFilterProductsSearch = (products) => {
  const [search, setSearch] = useState('');
  const [searchedProducts, setSearchedProducts] = useState(products);

  const setSearchValue = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    setSearchedProducts(
      products.filter((product) =>
        search
          ? `${product.brand} ${product.model}`
              .toLocaleLowerCase()
              .includes(search) ||
            `${product.model} ${product.brand}`
              .toLocaleLowerCase()
              .includes(search) ||
            product.model.toLocaleLowerCase().includes(search) ||
            product.brand.toLocaleLowerCase().includes(search)
          : product
      )
    );
  }, [products, search]);

  return { setSearchValue, searchedProducts };
};

export default useFilterProductsSearch;
