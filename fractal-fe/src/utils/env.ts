// eslint-disable-next-line no-restricted-globals
export const isLocalEnv = () => (typeof location !== 'undefined' ? location.host.startsWith('localhost') : false);
