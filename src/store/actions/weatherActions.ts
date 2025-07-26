export const SET_WEATHER = 'SET_WEATHER';

export const setWeather = (weatherData: any) => ({
  type: SET_WEATHER,
  payload: weatherData
});
