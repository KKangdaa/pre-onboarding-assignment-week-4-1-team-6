import { getAccountData } from 'apis';
import { useQueries } from 'react-query';
import { Pagination, Table, Input } from 'antd';
import { useRecoilState } from 'recoil';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { accountsState, allAccountState } from 'recoil/account';
import { ACCOUNT_TABLE_COLUMNS } from 'constants';

Accounts.propTypes = {
  params: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  limit: PropTypes.string.isRequired,
  searchName: PropTypes.string.isRequired,
};

export default function Accounts({
  params,
  pathname,
  page,
  limit,
  searchName,
}) {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [allAccount] = useRecoilState(allAccountState);
  const [accounts, setAccounts] = useRecoilState(accountsState);
  useQueries([
    {
      queryKey: ['accounts', params],
      queryFn: () => getAccountData(`${params}`),
      onSuccess: ({ data }) => {
        if (searchName.length > 0) setTotal(data.length);
        setAccounts([...data.filter((account) => account.uuid !== undefined)]);
      },
      onError: (error) => {
        throw ('Accounts.js user data page => ', error);
      },
    },
  ]);

  const handlePagination = (clickPage) => {
    navigate(
      `${pathname}?_order=desc&_sort=id&_page=${clickPage}&_limit=${limit}&q=${searchName}`
    );
  };

  const handleSearchIcon = (value) => {
    navigate(
      `${pathname}?_order=desc&_sort=id&_page=${page}&_limit=${limit}&q=${value}`
    );
  };

  const handleSearch = ({ target }) => {
    const value = target.value;
    navigate(
      `${pathname}?_order=desc&_sort=id&_page=${page}&_limit=${limit}&q=${value}`
    );
  };

  return allAccount.data === [] ? (
    <div>Loading...</div>
  ) : (
    <>
      <Input.Search
        allowClear
        placeholder="계좌번호를 입력해주세요."
        className="mb-4 w-2/5"
        onSearch={handleSearchIcon}
        onPressEnter={handleSearch}
      />
      <Table
        rowKey={'uuid'}
        columns={ACCOUNT_TABLE_COLUMNS()}
        dataSource={accounts}
        pagination={false}
        scroll={{ x: 1300 }}
        bordered
      />
      <Pagination
        className="m-5 text-center"
        current={+page}
        total={searchName.length > 0 ? total : allAccount.total}
        pageSize={+limit}
        onChange={handlePagination}
        responsive
        showSizeChanger={false}
      />
    </>
  );
};
