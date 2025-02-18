
import React from 'react';
import { Modal, Form, Input, Button } from 'antd';

const ForgetPassword = ({ visible, onCancel, onSubmit }) => {

    const emPattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (
    <Modal
      title="Forget Password"
      open={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form
        name="forget_password_form"
        onFinish={onSubmit}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' },
            {pattern: emPattern,message:'Please enter a valid email'}
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ForgetPassword;
