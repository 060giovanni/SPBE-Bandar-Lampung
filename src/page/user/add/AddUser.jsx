import {
   Form,
   Input,
   message,
   Modal,
   Radio,
} from "antd";
import axios from "axios";
import { useState } from "react";
<<<<<<< HEAD
=======
const { TextArea } = Input;
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
import propTypes from "prop-types";
import { userRoles } from "../constant";



const AddUser = ({ show, onCreate, onCancel }) => {
   const [form] = Form.useForm();
   const [loading, setLoading] = useState(false);
   const { VITE_BASE_URL } = import.meta.env;


   const handleSubmit = async () => {
      try {
         const values = await form.validateFields();
         setLoading(true);

<<<<<<< HEAD
         await axios.post(
            VITE_BASE_URL + `/api/v1/users/signup`, values,
         );
         message.success("User Berhasil Dibuat");
=======
         const { data } = await axios.post(
            VITE_BASE_URL + `/api/v1/auth/register`, values,
         );
         message.success(data.message);
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
         form.resetFields();
         onCreate();
      } catch (error) {
         message.error(error.response.data.message || error.message);
      } finally {
         setLoading(false);
      }
   };

   const handleCancelModal = () => {
      form.resetFields();
      onCancel();
   };

<<<<<<< HEAD
=======


>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
   return (
      <Modal
         open={show}
         okText="Simpan"
         cancelText="Batal"
         onOk={handleSubmit}
         onCancel={handleCancelModal}
         okButtonProps={{ loading }}
         title="Tambah User"
      >
         <Form form={form} layout="vertical" className="full-form">
            <div className="first-form">
               <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ required: true, message: "Harap diisi" }]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  name="password"
                  label="Password"
                  rules={[{ required: true, message: "Harap diisi" }]}
               >
                  <Input.Password />
               </Form.Item>
               <Form.Item
<<<<<<< HEAD
                  name="name"
                  label="Nama"
=======
                  name="first_name"
                  label="First Name"
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
                  rules={[{ required: true, message: "Harap diisi" }]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
<<<<<<< HEAD
=======
                  name="last_name"
                  label="Last Name"
                  rules={[{ required: true, message: "Harap diisi" }]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  name="phone"
                  label="No Telepon"
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  name="address"
                  label="Alamat"
               >
                  <TextArea />
               </Form.Item>
               <Form.Item
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
                  name="role"
                  label="Role"
               >
                  <Radio.Group options={userRoles} />
               </Form.Item>
            </div>
         </Form>
      </Modal>
   );
};

AddUser.propTypes = {
   show: propTypes.bool.isRequired,
   onCreate: propTypes.func.isRequired,
   onCancel: propTypes.func.isRequired,
};


export default AddUser;
