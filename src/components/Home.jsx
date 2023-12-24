import { useState, useEffect } from 'react';
import CropGrid from './CropGrid';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api-cache-test.leanagri.com/pop/pop_list/en/64/pop_list.json'
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Error fetching data</p>;
  }

  return (
    <div>
      <h1>CROPS INFORMATION</h1>
      <CropGrid crops={data} />
    </div>
  );
};
export default Home;
