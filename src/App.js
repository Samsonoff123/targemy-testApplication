import React from 'react';
import './App.css';
import { Header } from './Components/Header/index'
import PostDetail from './pages/PostDetail';
import Modal from './Components/Login'

function App() {

  const [isAuth, setIsAuth] = React.useState(false)
  const [isModalVisible, setIsModalVisible] = React.useState(false)

  React.useEffect(()=>{
    if(localStorage.isAuth === 'true') {
        setIsAuth(true)
    }
  }, [])

  return (
    <>
        <Header 
          isAuth={isAuth}
          setIsModalVisible={setIsModalVisible}
        />
        <PostDetail />
        <Modal 
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />

    </>
  );
}

export default App;
