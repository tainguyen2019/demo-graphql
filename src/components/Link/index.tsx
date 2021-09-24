import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export type LinkProps = {
  name: string;
  path: string;
};

const Link: React.FC<LinkProps> = ({ name, path }) => {
  return (
    <Button color="info">
      <NavLink to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
        {name}
      </NavLink>
    </Button>
  );
};

export default Link;
