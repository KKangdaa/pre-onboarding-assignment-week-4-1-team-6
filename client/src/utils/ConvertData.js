import accountStatus from '../local_json/accountStatus.json';
import brokers from '../local_json/brokers.json';

export const Masking = {
  text: (text) => {
    if (text?.length > 2) {
      let originText = text.split('');
      originText.forEach(function (text, i) {
        if (i === 0 || i === originText.length - 1) return;
        originText[i] = '*';
      });
      let joinText = originText.join();
      return joinText.replace(/,/g, '');
    } else {
      const pattern = /.$/;
      return text.replace(pattern, '*');
    }
  },
  phone: (phone) => {
    const replacePhone = phone.replace(/-/g, '');
    if (replacePhone.length === 10) {
      return replacePhone.slice(0, 3) + '-***-' + replacePhone.slice(7, 11);
    } else {
      return replacePhone.slice(0, 3) + '-****-' + replacePhone.slice(7, 12);
    }
  },
};

export const Convert = {
  date: (date) => {
    if (date === undefined) return null;
    const localDate = new Date(date);
    const year = localDate.getFullYear();
    const month = localDate.getMonth() + 1;
    const day = localDate.getDate();
    const full = `${year}-${month < 10 ? ('0' + month): month}-${day < 10 ? ('0' + day): day}`;
  
    return full;
  },
  owner: (userData, user_id) => {
    const filterData = userData.filter((data) => data.id === user_id);
    return filterData[0]?.name;
  },
  valueToKey: (value) => {
    return Object.keys(accountStatus).find(
      (key) => accountStatus[key] === value
    );
  },
  assets: (assets, payments) => {
    const asset = Math.round(assets);
    const payment = Math.round(payments);
    if (asset > payment)
      return <span className="text-red-600">{asset.toLocaleString()}</span>;
    if (asset < payment)
      return <span className="text-blue-600">{asset.toLocaleString()}</span>;
    return <span>{asset.toLocaleString()}</span>;
  },
  gender: (gender) => {
    return gender % 2 !== 0 ? '남성' : '여성';
  },
  broker: (broker_id) => {
    return brokers[broker_id];
  },
  accountData: (data, id) => {
    const filterData = data.filter((account) => account.user_id === id);
    const length = filterData.length;
    return { filterData, length };
  },
  allowMarketingPush: (data, uuid) => {
    const filterData = data.filter((setting) => setting.uuid === uuid);
    return filterData[0]?.allow_marketing_push ? '동의' : '미동의';
  },
  isActiveFromUserSetting: (data, uuid) => {
    const filterData = data.filter((setting) => setting.uuid === uuid);
    return filterData[0]?.is_active ? '활성화' : '비활성화';
  },
  isStaffFromUserSetting: (data, uuid) => {
    const filterData = data.filter((setting) => setting.uuid === uuid);
    return filterData[0]?.is_staff ? '유' : '무';
  },
  address: (first, second) => {
    return first + ' ' + second;
  },
  accountFormat: (broker_id, number) => {
    if (broker_id === 209 || broker_id === 288) {
      return number.replace(/(\d{2})(\d{8})(\d{2})/, '$1-$2-$3');
    }
    if (broker_id === 218 || broker_id === 262) {
      return number.replace(/(\d{2})(\d{7})(\d{3})/, '$1-$2-$3');
    }
    if (broker_id === 230 || broker_id === 290) {
      return number.replace(/(\d{2})(\d{6})(\d{4})/, '$1-$2-$3');
    }
    if (broker_id === 238) {
      return number.replace(/(\d{2})(\d{3})(\d{4})(\d{3})/, '$1-$2-$3-$4');
    }
    if (
      broker_id === 240 ||
      broker_id === 247 ||
      broker_id === 263 ||
      broker_id === 280 ||
      broker_id === 291
    ) {
      return number.replace(/(\d{2})(\d{4})(\d{6})/, '$1-$2-$3');
    }
    if (broker_id === 243) {
      return number.replace(/(\d{2})(\d{9})(\d{1})/, '$1-$2-$3');
    }
    if (broker_id === 261) {
      return number.replace(/(\d{2})(\d{2})(\d{8})/, '$1-$2-$3');
    }
    if (broker_id === 264) {
      return number.replace(/(\d{2})(\d{4})(\d{2})(\d{4})/, '$1-$2-$3-$4');
    }
    if (broker_id === 265) {
      return number.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, '$1-$2-$3-$4');
    }
    if (
      broker_id === 266 ||
      broker_id === 269 ||
      broker_id === 279 ||
      broker_id === 292
    ) {
      return number.replace(/(\d{2})(\d{5})(\d{5})/, '$1-$2-$3');
    }
    if (broker_id === 267 || broker_id === 270 || broker_id === 271) {
      return number.replace(/(\d{2})(\d{3})(\d{7})/, '$1-$2-$3');
    }
    if (broker_id === 268) {
      return number.replace(/(\d{2})(\d{6})(\d{2})(\d{2})/, '$1-$2-$3-$4');
    }
    if (broker_id === 287) {
      return number.replace(/(\d{2})(\d{4})(\d{5})(\d{1})/, '$1-$2-$3-$4');
    }
  },
};
