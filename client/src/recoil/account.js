import { atom } from 'recoil';

export const allAccountState = atom({
  key: 'AllaccountState',
  default: {
    total: 0,
    data: [],
  },
});

export const accountsState = atom({
  key: 'accountsState',
  default: [],
});
