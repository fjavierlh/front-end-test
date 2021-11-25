import { useEffect, useState } from 'react';

const useFilterProductsSearch = (products) => {
  const [search, setSearch] = useState('');
  const [searchedProducts, setSearchedProducts] = useState(products);

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

  return { setSearch, searchedProducts };
};

export default useFilterProductsSearch;
