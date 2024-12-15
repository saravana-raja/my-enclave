import { useState, useCallback, useMemo } from 'react';
import { getPriceRangeValues } from '../types/filters';

export const usePropertySearch = (properties) => {
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
  });

  const updateFilters = useCallback((newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      // Location filter
      if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }

      // Price range filter
      if (filters.priceRange) {
        const { min, max } = getPriceRangeValues(filters.priceRange);
        if (max !== null && (property.price < min || property.price > max)) {
          return false;
        }
        if (max === null && property.price < min) {
          return false;
        }
      }

      return true;
    });
  }, [properties, filters]);

  return {
    filters,
    updateFilters,
    filteredProperties,
  };
};
