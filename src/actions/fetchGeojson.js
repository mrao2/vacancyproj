import prclzm from 'src\geojson\prclzm.js'

export const REQUEST_GEODATA = 'REQUEST_GEODATA'
export const RECEIVE_GEODATA = 'RECEIVE_GEODATA'



const requestGEODATA = () => ({
  type:REQUEST_GEODATA,

});

const receiveGEODATA = response => ({
  type: RECEIVE_GEODATA,
  geojson:response
})

const fetchGeodata = () => (dispatch) => {
  dispatch(requestGEODATA)
  return Promise.resolve(() => dispatch(prclzm.js))
}
