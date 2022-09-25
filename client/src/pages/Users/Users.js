import {
  getUserData,
  deleteUser,
  editUserName,
  createUsers,
} from 'apis';
import { useMutation, useQueries } from 'react-query';
import { Pagination, Table, Input, Button } from 'antd';
import { useRecoilState } from 'recoil';
import { allUserState, usersState } from 'recoil/user';
import { USER_TABLE_COLUMNS } from 'constants';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

Users.propTypes = {
  params: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  limit: PropTypes.string.isRequired,
  searchName: PropTypes.string.isRequired,
};

export default function Users({ params, pathname, page, limit, searchName }) {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [allUser] = useRecoilState(allUserState);
  const [users, setUsers] = useRecoilState(usersState);
  const [createMode, setCreateMode] = useState(false);
  const { mutate: createMutate } = useMutation(
    ({ data }) => createUsers(data),
    {
      onSuccess: () => {
        getUsersPage.refetch();
      },
      onError: (error) => {
        alert(error.response?.data);
      },
    }
  );
  const { mutate: editMutate } = useMutation(
    ({ id, name }) => editUserName(id, name),
    {
      onSuccess: () => {
        getUsersPage.refetch();
      },
      onError: (error) => {
        alert(error.response?.data);
      },
    }
  );
  const { mutate: deleteMutate } = useMutation((id) => deleteUser(id), {
    onSuccess: () => {
      getUsersPage.refetch();
    },
    onError: (error) => {
      alert(error.response?.data);
    },
  });
  const [getUsersPage] = useQueries([
    {
      queryKey: ['users', params],
      queryFn: () => getUserData(`${params}`),
      onSuccess: ({ data }) => {
        if (searchName.length > 0) setTotal(data.length);
        setUsers([...data]);
      },
      onError: (error) => {
        throw ('Users.js user data page => ', error);
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

  const handleDelete = (id) => {
    deleteMutate(id);
  };

  const handleEdit = (id, name) => {
    editMutate({ id, name });
  };

  const createNewUser = (e) => {
    e.preventDefault();
    if (confirm('추가하시겠습니까?') === true) {
      const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        phone_number: e.target.phonenumber.value,
        last_login: new Date().toISOString(),
        created_at: new Date().toISOString(),
      };
      setCreateMode(false);
      createMutate({ data });

      const queryString = '/users?_order=desc&_sort=id&_page=1&_limit=10&q=';
      navigate(queryString);
    }
  };

  const newUserForm = () => {
    return (
      <form onSubmit={createNewUser} className="mb-4">
        <input
          type="text"
          placeholder="이름"
          name="name"
          className="border text-xs p-2 mr-4"
          required
        />
        <input
          type="text"
          placeholder="이메일"
          name="email"
          className="border text-xs p-2 mr-4"
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          name="password"
          className="border text-xs p-2 mr-4"
          required
        />
        <input
          type="text"
          placeholder="휴대폰번호"
          name="phonenumber"
          className="border text-xs p-2 mr-4"
          required
        />
        <button
          type="submit"
          name="submit"
          className="ml-2 rounded p-2 hover:bg-sky-200 border"
        >
          추가
        </button>
      </form>
    );
  };

  return (
    <>
      <Input.Search
        allowClear
        placeholder="검색어를 입력해주세요."
        className="mb-4 w-2/5"
        onSearch={handleSearchIcon}
        onPressEnter={handleSearch}
      />
      <Button className="ml-5" onClick={() => setCreateMode(true)}>
        신규 사용자 추가
      </Button>
      {createMode ? newUserForm() : ''}
      <Table
        rowKey={'id'}
        columns={USER_TABLE_COLUMNS(handleEdit, handleDelete)}
        dataSource={users}
        pagination={false}
        scroll={{ x: 1300 }}
        bordered
      />
      <Pagination
        className="m-5 text-center"
        current={+page}
        total={searchName.length > 0 ? total : allUser.total}
        pageSize={+limit}
        onChange={handlePagination}
        responsive
        showSizeChanger={false}
      />
    </>
  );
}
