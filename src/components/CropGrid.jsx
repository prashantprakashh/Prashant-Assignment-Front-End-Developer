import React, { useState } from 'react';
import CropCard from './CropCard';
import Pagination from './Pagination';
import './CropGrid.css';

const CropGrid = ({ crops }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const cropsPerPage = 10;
  const filteredCrops = crops.filter((crop) =>
    crop.crop_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const indexOfLastCrop = currentPage * cropsPerPage;
  const indexOfFirstCrop = indexOfLastCrop - cropsPerPage;
  const currentCrops = crops.slice(indexOfFirstCrop, indexOfLastCrop);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by crop name..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="crop-grid">
        {filteredCrops.map((crop) => (
          <CropCard
            key={crop.id}
            imageUrl={crop.thumbnails[0].image}
            name={crop.crop_name}
            detail={crop.thumbnails[0].detail}
          />
        ))}
        <Pagination
          cropsPerPage={cropsPerPage}
          totalCrops={crops.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default CropGrid;
