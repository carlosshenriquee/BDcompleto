import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import blogFetch from '../axios/config';
import ModalEdite from '../components/ModalEdite';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [usuarioId, setUsuarioId] = useState('');

  const getUsers = async () => {
    try {
      const response = await blogFetch.get('/users');
      setUsuarios(response.data)
    } catch (error) {
      console.log(error)
    }

  }

  const updateUsers = () => {
    getUsers(); 
  };
  

  const closeModalEdite =() => {
    setShowModalEdit(false);
  }



  const deleteUser = async (id) => {
    try {
      await blogFetch.delete(`/users/${id}`);
      console.log('OK')
      getUsers();
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers();

  }, []);

  return (

    <div>
      <Navbar />


      <div className='container'>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Idade</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>

          <tbody>

            {usuarios.length > 0 ? (usuarios.map(usuario => (
              <tr key={usuario.id}>
                <th scope="row">{usuario.id}</th>
                <td>{usuario.nome}</td>
                <td>{usuario.idade}</td>
                <td>
                  <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    
                    <button type="button" class="btn btn-danger" onClick={() => deleteUser(usuario.id)}>Excluir</button>
                    <button type="button" class="btn btn-warning" 
                    onClick={()=>{
                      setUsuarioId(usuario.id);
                      setShowModalEdit(true);
                    }}
                    >Editar</button>
                  </div>
                </td>
              </tr>
            ))) : (
              <tr>
                <td colSpan="4">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </td>
              </tr>
            )
            }


          </tbody>
        </table>
      </div>
      {showModalEdit && <ModalEdite userId={usuarioId} onClose={closeModalEdite} onUpdate={updateUsers} />  }
    </div>
  )
}

export default Usuarios