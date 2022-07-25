import React from "react";
import axios from 'axios'
import { Modal, Button, Form, Input } from "antd";


export default function index({ isModalVisible, setIsModalVisible }) {
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    axios.get('https://api.stage.targemy.com/v1/auth/login', JSON.stringify(values))
        .then(res => {
            console.log(res);
        })
    localStorage.setItem('isAuth', 'true')
    document.location.reload()
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <Modal 
        title="Авторизация"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={false}
        className="modal__main"
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="Username"
          style={{display: 'flex', flexDirection: 'column', width: '100%', marginBottom: '10px'}}
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="Логин" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="Password"
          style={{display: 'flex', flexDirection: 'column', width: '100%'}}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Пароль" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block className="login__btn">Submit</Button>
      </Form>
    </Modal>
  );
}
