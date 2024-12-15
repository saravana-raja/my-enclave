import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '../ui/Button';

export const SearchFilters = ({ filters, onFilterChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ [name]: value });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/* Adjusted grid for 3 columns */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleInputChange}
            placeholder="Enter location"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#72ac4f] focus:border-[#72ac4f]"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Price Range</label>
          <select
            name="priceRange"
            value={filters.priceRange}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#72ac4f] focus:border-[#72ac4f]"
          >
            <option value="">Any</option>
            <option value="0-15000">₹ 0 - ₹ 15,000</option>
            <option value="15000-30000"> ₹ 15,000 - ₹ 30,000</option>
            <option value="30000-50000">₹ 30,000 - ₹ 50,000</option>
            <option value="50000+">₹ 50,000+</option>
          </select>
        </div>

        <div className="flex items-end">
          <Button variant="primary" className="w-full">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
