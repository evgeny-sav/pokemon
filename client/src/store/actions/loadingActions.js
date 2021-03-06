import constants from '../../constants';

export const loading = payload => ({
  type: constants.LOADING,
  payload,
});

export const loaded = payload => ({
  type: constants.LOADED,
  payload,
});
