import { NavLink } from 'react-router-dom';
import useStyles from './styles';

export type LinkProps = {
  name: string;
  path: string;
};

const Link: React.FC<LinkProps> = ({ name, path }) => {
  const classes = useStyles();

  return (
    <NavLink
      to={path}
      className={classes.link}
      activeClassName={classes.linkActive}
      exact
    >
      {name}
    </NavLink>
  );
};

export default Link;
