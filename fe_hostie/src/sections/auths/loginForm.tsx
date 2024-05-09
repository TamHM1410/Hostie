"use client";
import React from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const LoginForm = () => {
  return (
    <div className='w-full '>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{
          marginLeft: "20%",
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <h1
          className='w-[315px] font-extrabold'
          style={{ fontSize: "80px", fontWeight: 800 }}
        >
          HOST<span style={{ color: "#2152FF" }}>I</span>E
        </h1>
        <p className='font-bold	text-2xl'>Đăng nhập</p>
        <p style={{ fontSize: 12, color: "#67748E" }}>
          Nhập email và mật khẩu để tiếp tục
        </p>
        <Form.Item<FieldType>
          name='username'
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder='Email' />
        </Form.Item>

        <Form.Item<FieldType>
          name='password'
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder='Password' />
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            style={{
              width: "100%",
              background: "linear-gradient(to right, #2152FF, #21D4FD)",
              border: 0,
            }}
          >
            Đăng nhập
          </Button>
        </Form.Item>
        <Form.Item<FieldType> name='remember' valuePropName='checked'>
          <div className='flex justify-center'>
            <p style={{ color: "#17C1E8" }}>Quên mật khẩu</p>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginForm;
