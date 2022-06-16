import React from "react";
import {Button, Form, Input, InputNumber, Modal, notification} from "antd";
import {sellersApi} from "../api/exports";

export const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        string: '${label} is not valid!',
        number: '${label} must be between ${min} and ${max}!',
    },
    string: {
        min: '${label} must be at least ${min} characters!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}!',
    }
};

export const SellerModal: React.FC<{ showModal: boolean, closeModal: (download: boolean) => void }> = ({showModal, closeModal}) => {

    const onFinish = async (values: any) => {
        await sellersApi.create(values.seller)
            .then(() => closeModal(true))
            .catch(() => notification.error({message: "Login Or Email Already Exists"}));
    };

    return (
        <Modal
            visible={showModal}
            destroyOnClose
            title={"Add New Seller"}
            footer={false}
            onCancel={() => closeModal(false)}
        >
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['seller', 'login']} label="Login" rules={[{required: true, type: "string", min: 5}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name={['seller', 'password']} label="Password" rules={[{required: true, min: 5}]}>
                    <Input.Password/>
                </Form.Item>
                <Form.Item name={['seller', 'email']} label="Email" rules={[{required: true, type: "email"}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name={['seller', 'firstName']} label="First Name" rules={[{required: true, type: "string", min: 1}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name={['seller', 'lastName']} label="Last Name" rules={[{required: true, type: "string", min: 1}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name={['seller', 'fund']} label="Fund (PLN)" rules={[{required: true, type: "number", min: 1, max: 1000000}]}>
                    <InputNumber style={{width: "100%"}}/>
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}
