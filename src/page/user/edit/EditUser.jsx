import { Form, Input, message, Modal, Radio, Skeleton } from 'antd';
import axios from 'axios';
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { userRoles } from "../constant";
import { useUserDetail } from "../../../hooks/user/useUserDetail";
=======
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
const { TextArea } = Input;
import propTypes from 'prop-types';
import { userRoles } from "../constant";
import { useUserDetail } from "../../../hooks/useUserDetail";
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018

const EditUser = ({ id, onUpdate, onCancel, show }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [newData, setNewData] = useState({});
  const { VITE_BASE_URL } = import.meta.env;

  const { data, isLoading, refetch } = useUserDetail(id, false);


  useEffect(() => {
    if (show) {
      refetch();
    }
  }, [show, refetch]);



  useEffect(() => {
    if (data) {
      form.setFieldsValue({
<<<<<<< HEAD
        email: data.data.email,
        name: data.data.name,
        role: data.data.role,
=======
        email: data.data.user.email,
        first_name: data.data.user.first_name,
        last_name: data.data.user.last_name,
        phone: data.data.user.phone,
        address: data.data.user.address,
        role: data.data.user.role,
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
      });
    }
  }, [data, form]);

  const handleSubmit = async () => {
    try {
      await form.validateFields();
      setLoading(true);
      if (Object.keys(newData).length === 0) {
        message.error('Nothing has changed');
        return;
      }

<<<<<<< HEAD
      await axios.patch(
        VITE_BASE_URL + `/api/v1/users/${id}`,
        {
          ...newData,
        }
      );

      message.success("user berhasil diubah");
=======
      const { data } = await axios.patch(
        VITE_BASE_URL + `/api/v1/users/${id}`,
        {
          ...newData,
        },
        {
          headers: {
            Authorization: 'Bearer ' + Cookies.get('token'),
          },
        }
      );

      message.success(data.message);
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
      form.resetFields();
      onUpdate();
    } catch (error) {
      message.error(error.response?.data?.message || 'Fields Error');
    } finally {
      setLoading(false);
    }
  };

  const handleCancelModal = () => {
    form.resetFields();
    setNewData({});
    onCancel();
  };

  return (
    <Modal
      open={show}
      okText='Simpan'
      cancelText='Batal'
      onOk={handleSubmit}
      onCancel={handleCancelModal}
      okButtonProps={{ loading }}
      title='Edit Users'
    >
      {isLoading && <Skeleton active />}
      {!isLoading && (
        <>
          <Form form={form} layout='vertical' className='full-form'>
            <div className='first-form'>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: "Harap diisi" }]}
                onChange={({ target: { value } }) => (newData["email"] = value)}
              >
                <Input />
              </Form.Item>
              <Form.Item
<<<<<<< HEAD
                name="name"
                label="Nama"
                rules={[{ required: true, message: "Harap diisi" }]}
                onChange={({ target: { value } }) => (newData["name"] = value)}
=======
                name="first_name"
                label="First Name"
                rules={[{ required: true, message: "Harap diisi" }]}
                onChange={({ target: { value } }) => (newData["first_name"] = value)}
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
              >
                <Input />
              </Form.Item>
              <Form.Item
<<<<<<< HEAD
=======
                name="last_name"
                label="Last Name"
                rules={[{ required: true, message: "Harap diisi" }]}
                onChange={({ target: { value } }) => (newData["last_name"] = value)}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="phone"
                label="No Telepon"
                onChange={({ target: { value } }) => (newData["phone"] = value)}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="address"
                label="Alamat"
                onChange={({ target: { value } }) => (newData["address"] = value)}
              >
                <TextArea />
              </Form.Item>
              <Form.Item
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
                name="role"
                label="Role"
                onChange={({ target: { value } }) => (newData["role"] = value)}
              >
                <Radio.Group options={userRoles} />
              </Form.Item>
            </div>
          </Form>
        </>
      )}
    </Modal>
  );
};

EditUser.propTypes = {
  show: propTypes.bool.isRequired,
  onCancel: propTypes.func.isRequired,
  onUpdate: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
};

export default EditUser;
