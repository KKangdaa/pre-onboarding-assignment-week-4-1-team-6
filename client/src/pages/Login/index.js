import { Button, Form, Input } from 'antd';
import { login } from 'apis';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken, setToken } from 'utils/Storage';
import { useMutation } from 'react-query';

export default function Login() {
  const { mutate } = useMutation(
    ({ email, password }) => login(email, password),
    {
      onSuccess: ({ data }) => {
        setToken(data.accessToken);
      },
      onError: (error) => {
        alert(error.response?.data);
      },
    }
  );

  const handleLogin = ({ email, password }) => {
    mutate({ email, password });
  };

  return !getToken() ? (
    <Form
      className='mt-24'
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      onFinish={handleLogin}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Email을 입력해주세요.',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: '비밀번호를 입력해주세요.',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="default" htmlType="submit">
          로그인
        </Button>
      </Form.Item>
    </Form>
  ) : (
    <Navigate replace to={'/accounts?_order=desc&_sort=id&_page=1&_limit=10&q='} />
  );
}
