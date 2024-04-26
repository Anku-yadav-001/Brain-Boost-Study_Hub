import React from 'react';
import { Stack } from '@chakra-ui/react';
import Product from './Product';


const Products = ({products}) => {
  // TODO: Remove below const and instead import them from chakra
 
  return (
    <Flex>
      <Grid>{/* List of Products */}</Grid>
      {/* Pagination */}
      <Stack spacing={4}>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </Stack>
    </Flex>
  );
};

export default Products;
