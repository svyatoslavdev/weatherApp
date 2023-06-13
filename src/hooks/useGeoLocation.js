import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {locationState} from '../store/location/location.selectors';
import {getLocationThunk} from '../store/location/location.thunk';

export const useGeoLocation = () => {
  const dispatch = useDispatch();

  const location = useSelector(locationState);

  const getLocation = () => {
    dispatch(getLocationThunk());
  };

  useEffect(() => {
    getLocation();
  }, []);

  return {location, getLocation};
};
