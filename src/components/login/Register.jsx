// src/Register.js
import React from 'react';
import { Modal, Form, Input, Button } from 'antd';

const Register = ({ visible, onCancel, onSubmit }) => {

    const use =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;;
    const ema =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;;
    const pass =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/;
  return (
    <Modal
      title="Register"
      open={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form
        name="register_form"
        onFinish={onSubmit}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' },
            {pattern:use, message:'Please provide valid username'}
          ]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' },
            {pattern:ema, message:'Please provide valid email'}
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' },
            {pattern:pass, message:'Please provide valid password'}
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Register;
