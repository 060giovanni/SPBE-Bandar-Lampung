import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import { navLinks } from '../../data/index';
import { NavLink, useNavigate } from 'react-router-dom';
import { Dropdown } from 'antd';

import { UserOutlined } from '@ant-design/icons';

import './Navbars.css';

const Navbars = () => {
  const [changeColor, setChangeColor] = useState(false);
  const navigate = useNavigate();

<<<<<<< HEAD
  const user = Cookies.get('user') && JSON.parse(Cookies.get('user'));
  const email = user?.email;
  const role = user?.role;
  const isLogin = Cookies.get('token');

  const handleLogout = () => {
    Cookies.remove('token');
    Cookies.remove('user');
=======
  const email = Cookies.get('email');

  const handleLogout = () => {
    console.log('logout');
    Cookies.remove('token');
    Cookies.remove('email');
    Cookies.remove('role');
    Cookies.remove('id');
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
    navigate('/login');
  };

  const handleClickItemUser = (e) => {
    if (e.key === 'profile') navigate('/profile');
    else if (e.key === 'dashboard') navigate('/dashboard');
    else if (e.key === 'chat') navigate('/chat');
    else handleLogout();
  };

  const itemsUser = [
<<<<<<< HEAD
    role === 'admin' && {
      key: 'dashboard',
      label: <span>Dashboard</span>,
    },
=======
    { key: 'profile', label: <span>Profile</span> },
    Cookies.get('role') === 'admin' && {
      key: 'dashboard',
      label: <span>Dashboard</span>,
    },
    { key: 'chat', label: <span>Konsultasi</span> },
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
    { key: 'logout', label: <span>Logout</span> },
  ];

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
<<<<<<< HEAD
    window.addEventListener('scroll', changeBackgroundColor);
  });

=======

    window.addEventListener('scroll', changeBackgroundColor);
  });

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (Cookies.get('token')) {
      setIsLogin(true);
    }
  }, []);

>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
  return (
    <div>
      <Navbar
        expand='lg'
        className={changeColor ? 'color-active' : '' + 'navbar-custom'}
        fixed='top'
      >
        <Container>
          <Navbar.Brand
            className='navbar-brand'
          >
            <img src='/assets/img/logo.png' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='text-center'>
<<<<<<< HEAD
=======

>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
              {navLinks.map((link) => {
                return (
                  <div className='nav-link'
                    key={link.id}
                  >
                    <NavLink
                      to={link.path}

                      className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'active' : ''
                      }
                      end
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
<<<<<<< HEAD
              {isLogin ? (
                <>
                  <div className='header-container'>
                    <Dropdown
                      menu={{
                        items: itemsUser,
                        style: { width: '50%' },
                        onClick: handleClickItemUser,
                      }}
                      placement='bottomLeft'
                      arrow
                      trigger={['click']}
                    >
                      <div className='user-profile'>
                        <UserOutlined />
                        <span>{email}</span>
                      </div>
                    </Dropdown>
                  </div>
                </>
              ) : (
                <>
                  <div className='nav-link'>
                    <NavLink
                      to='/login'
                      className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'active' : ''
                      }
                      end
                    >
                      LOGIN
                    </NavLink>
                  </div>
                </>
              )}
=======
              <div className='nav-link'>
                <NavLink
                  to='/login'
                  className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ''
                  }
                  end
                >
                  LOGIN
                </NavLink>
              </div>
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
            </Nav>

            {/* <ul className='navbar-nav ms-auto mb-2 mb-lg-0 navbar-user text-center'>
              {isLogin ? (
                <>
                  <div className='header-container'>
                    <Dropdown
                      menu={{
                        items: itemsUser,
                        style: { width: '50%' },
                        onClick: handleClickItemUser,
                      }}
                      placement='bottomLeft'
                      arrow
                      trigger={['click']}
                    >
                      <div className='user-profile'>
                        <UserOutlined />
                        <span>{email}</span>
                      </div>
                    </Dropdown>
                  </div>
                </>
              ) : (
                <>
                  <li className='nav-item'>
                    <NavLink
                      to='/login'
                      className='btn btn-outline-primary rounded-3 me-2'
                      activeClassName='active'
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className='nav-item-2'>
                    <NavLink
                      to='/register'
                      className='btn btn-primary rounded-3'
                      activeClassName='active'
                    >
                      Sign Up
                    </NavLink>
                  </li>
                </>
              )}
            </ul> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;