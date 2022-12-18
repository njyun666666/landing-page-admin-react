// import PropTypes from 'prop-types';
// material
import { MenuItem, TextField } from '@mui/material';
import { IBlogPostsSortOption } from 'src/types/post';

// ----------------------------------------------------------------------

// BlogPostsSort.propTypes = {
//   options: PropTypes.array,
//   onSort: PropTypes.func
// };

export default function BlogPostsSort({ options, onSort }: { options: IBlogPostsSortOption[]; onSort?: () => void }) {
  return (
    <TextField select size="small" value="latest" onChange={onSort}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
