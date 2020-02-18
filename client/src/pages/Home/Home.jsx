import React from 'react';
import Helmet from 'react-helmet/es/Helmet';
import { shallowEqual, useSelector } from 'react-redux';

import capitalize from '../../utils/capitalize';
import Navbar from '../../components/Navbar';
import './home.scss';

// eslint-disable-next-line react/prop-types
const Home = props => {
  const { name } = useSelector(state => state.pokemon.data, shallowEqual);
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <>
      <Helmet>
        <title>{`${capitalize(name)} | Pokemon App`}</title>
      </Helmet>
      <div className="Home">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Home;
