/* eslint-disable import/first */
export const allNetworks = [
  {
    name: 'MOONRIVER',
    asset: 'MOONRIVER',
    id: 1285,
    hash: '/movr',
  },
];

const network = allNetworks.find(n => window.location.hash.startsWith('#' + n.hash));

if (!network) {
  window.location.hash = allNetworks[0].hash;
  window.location.reload();
} else {
  window.REACT_APP_NETWORK_ID = network.id;
}

export default network;
