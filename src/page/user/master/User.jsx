<<<<<<< HEAD
import { Button, Space, Table } from "antd";
=======
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
import { Popconfirm, Tag } from "antd";
import { useCallback, useState } from "react";
import './User.css'
import { DeleteApi } from "../../../services/DeleteApi";
import AddUser from "../add/AddUser";
import EditUser from "../edit/EditUser";
<<<<<<< HEAD
import { useUserPagination } from "../../../hooks/user/useUserPagination";
=======
import { useUserPagination } from "../../../hooks/useUserPagination";
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
import ResetPasswordUser from "../reset/ResetPasswordUser";

const User = () => {
   const [dataId, setDataId] = useState("");
   const [showAddUser, setShowAddUser] = useState(false);
   const [showEditUser, setShowEditUser] = useState(false);
<<<<<<< HEAD
=======
   const [keyword, setKeyword] = useState("");
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
   const [dataTable, setDataTable] = useState({
      current_page: 1,
      per_page: 15,
      total: 0,
   });
   const [showResetPassword, setShowResetPassword] = useState(false);
   const { data, isLoading, isFetching, refetch } = useUserPagination(
      dataTable,
<<<<<<< HEAD
      ''
=======
      keyword
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
   );


   const onCreate = useCallback(() => {
      setShowAddUser(false);
      refetch();
   }, [refetch]);

   const onResetPassword = useCallback(() => {
      setShowResetPassword(false);
      refetch();
   }, [refetch]);

   const onUpdate = useCallback(() => {
      setShowEditUser(false);
      refetch();
   }, [refetch]);

   const onCancel = () => {
      setShowAddUser(false);
      setShowEditUser(false);
      setShowResetPassword(false);
      setDataId("");
   };

<<<<<<< HEAD
=======
   const handleChange = (param) => {
      setKeyword(param.target.value);
   };


>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
   const columns = [
      {
         title: "No",
         dataIndex: "index",
         align: "left",
         width: window.innerWidth > 800 ? 70 : 50,
      },
      {
         title: "email",
         dataIndex: "email",
         align: "left",
      },
      {
<<<<<<< HEAD
         title: "Nama",
         dataIndex: "name",
=======
         title: "First Name",
         dataIndex: "first_name",
         align: "left",
         width: window.innerWidth > 800 ? 200 : 150,
      },
      {
         title: "Last Name",
         dataIndex: "last_name",
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
         align: "left",
         width: window.innerWidth > 800 ? 200 : 150,
      },
      {
         title: "Role",
         dataIndex: "role",
         align: "left",
      },
      {
         title: "Aksi",
<<<<<<< HEAD
         dataIndex: "id",
=======
         dataIndex: "_id",
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
         align: "center",
         width: window.innerWidth > 800 ? 300 : 200,
         render: (id) => {
            return (
               <>
<<<<<<< HEAD
=======
                  {/* <Tag
                     color="blue"
                     style={
                        { cursor: "pointer" }
                     }
                     onClick={() => {
                        navigate(`/dashboard/article/${id}`);
                     }}
                  >
                     Detail
                  </Tag> */}
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
                  <Tag
                     color="orange"
                     style={
                        { cursor: "pointer" }
                     }
                     onClick={() => {
                        setDataId(id);
                        setShowEditUser(true);
                     }}
                  >
                     Ubah
                  </Tag>
                  <Tag
                     color="red"
                     style={
                        { cursor: "pointer" }
                     }
                     onClick={() => {
                        setDataId(id);
                        setShowResetPassword(true);
                     }}
                  >
                     Reset Password
                  </Tag>
                  <Popconfirm
                     title="Yakin ingin menghapus ?"
                     okText="Hapus"
                     cancelText="Batal"
                     onConfirm={() => {
                        const dataId = id;
                        DeleteApi({
                           url: "/api/v1/users/",
                           dataId,
                           refetch,
                        });
                     }}
                  >
                     <Tag
                        color="magenta"
                        style={
                           { cursor: "pointer" }
                        }
                     >
                        Hapus
                     </Tag>
                  </Popconfirm>
               </>
            );
         },
      },
   ];

   const dataSource = data?.data?.slice(0, dataTable.per_page)
      .map((x, i) => {
         return {
            ...x,
            key: x._id,
            index: i + 1,
         };
      });

   const pagination = {
      current: dataTable.current_page,
      pageSize: dataTable.per_page,
      total: data?.data?.total,
      showSizeChanger: true,
      pageSizeOptions: [15, 20, 50, 100],
      onChange: (curr, size) => {
         setDataTable((prev) => {
            return {
               ...prev,
               current_page: curr,
               per_page: size,
            };
         });
      },
   };

   return (
      <>
         <div className="table-header">
            <h1>Daftar User</h1>
            <Space>
               <Button
                  type="primary"
                  onClick={() => setShowAddUser(true)}
               >
                  Tambah User
               </Button>
            </Space>
         </div>
<<<<<<< HEAD
=======
         <div className="search-wrapper filter-wrapper">
            <Input
               prefix={<SearchOutlined />}
               value={keyword}
               onChange={handleChange}
               placeholder="Cari Artikel berdasarkan Judul atau kategori"
            />
         </div>
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
         <Table
            size="small"
            tableLayout="auto"
            columns={columns}
            loading={isLoading || isFetching}
            dataSource={dataSource}
            pagination={pagination}
            scroll={{
               y: "50vh",
               x: 800,
            }}
         />
         <AddUser
            onCreate={onCreate}
            onCancel={onCancel}
            show={showAddUser}
         />
         <EditUser
            id={dataId}
            onUpdate={onUpdate}
            onCancel={onCancel}
            show={showEditUser}
         />
         <ResetPasswordUser
            id={dataId}
            onResetPassword={onResetPassword}
            onCancel={onCancel}
            show={showResetPassword}
         />
      </ >
   );
};

export default User;
