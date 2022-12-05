// import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import ShopProductCard from './ProductCard';
import { IProduct } from 'src/types/product';

// ----------------------------------------------------------------------

// ProductList.propTypes = {
//   products: PropTypes.array.isRequired,
// };

export default function ProductList({ products, ...other }: { products: IProduct[] }) {
  return (
    <Grid container spacing={3} {...other}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ShopProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
