import { atom } from 'recoil';

export const allUserState = atom({
  key: 'allUserState',
  default: {
    total: 0,
    data: [],
  },
});

export const usersState = atom({
  key: 'usersState',
  default: [],
});
