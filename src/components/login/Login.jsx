import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button } from 'antd';

import ForgetPassword from './ForgetPassword'; // Correct import
import Register from './Register';

import './login.css';




const Login = () => {
  const [visible, setVisible] = useState(false);
  const [forgetPasswordVisible, setForgetPasswordVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 10000); // 15 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    console.log('Login submitted');
    setVisible(false);
  };

  const handleForgetPassword = () => {
    setForgetPasswordVisible(true);
    setVisible(false);
  };

  const handleRegister = () => {
    setRegisterVisible(true);
    setVisible(false);
  };


  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  return (
    <>
    <Modal
      title="Login"
      open={visible}
      onCancel={handleCancel}
      footer={null}
      className='login-modal'
    >
      <Form
        name="login_form"
        initialValues={{ remember: true }}
        onFinish={handleOk}
        className='login-form'
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' },
            {pattern:emailPattern , message: 'Please enter valid username'}
          ]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' },
            {pattern:passwordPattern, message:'Please enter a valid password'}
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>

        <Form.Item>
            <Button type="link" onClick={handleForgetPassword}>
              Forget Password?
            </Button>
          </Form.Item>

          <Form.Item>
            <Button type="link" onClick={handleRegister}>
              Create an Account
            </Button>
          </Form.Item>
      </Form>
    </Modal>

            <ForgetPassword
        visible={forgetPasswordVisible}
        onCancel={() => setForgetPasswordVisible(false)}
        onSubmit={() => {
        console.log('Forget Password submitted');
        setForgetPasswordVisible(false);
        }}/>

        <Register
        visible={registerVisible}
        onCancel={() => setRegisterVisible(false)}
        onSubmit={() => {
        console.log('Register submitted');
        setRegisterVisible(false);
        }}/>


        </>

  );
};

export default Login;
