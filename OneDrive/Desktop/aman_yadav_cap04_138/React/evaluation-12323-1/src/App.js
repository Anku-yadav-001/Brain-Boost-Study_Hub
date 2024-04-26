import React, { useState, useEffect } from 'react';
import { Container, Stack } from '@chakra-ui/react';
import Products from './Products';
import Pagination from './Pagination';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page, limit]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products?page=${page}&limit=${limit}`
      );
      setProducts(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return <div>{/* TODO: Code here */}
    <Container maxW="container.md" mt={8}>
      <Stack spacing={4}>
        <Products products={products} />
        <Pagination
          page={page}
          setPage={setPage}
          limit={limit}
          setLimit={setLimit}
          totalPages={totalPages}
        />
      </Stack>
    </Container>
  </div>;
};

export default App;
