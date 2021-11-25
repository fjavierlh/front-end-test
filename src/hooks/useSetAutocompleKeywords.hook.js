import { useEffect, useState } from "react";

const useSetAutocompleteKeywords = (products) => {
    const [autocompleteSuggestions, setAutocompleteSuggestions] = useState([]);

    useEffect(() => {
      const suggestionsRaw =
        products.length !== 0
          ? products
              .map(({ brand, model }) => [
                `${brand} ${model}`,
                `${model} ${brand}`,
                `${brand}`,
                `${model}`,
              ])
              .reduce((acc, curr) => acc.concat(curr))
          : [];
      const suggestions = [...new Set(suggestionsRaw)];
      setAutocompleteSuggestions(suggestions);
    }, [products]);

    return { autocompleteSuggestions };
}

export default useSetAutocompleteKeywords