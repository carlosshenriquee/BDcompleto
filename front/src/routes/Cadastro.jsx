import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import blogFetch from '../axios/config';
import Modal from '../components/modal';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({titulo:'',mensagem:''});

  const createPost = async (e) =>{
    e.preventDefault()

    const post={
      nome: nome,
      idade: idade
    };
   

    try {
      await blogFetch.post('/users',post);
      setNome('');
      setIdade('');
      setModalContent({titulo:'SUCESSO', mensagem:'usuario ' + post.nome + ' cadastrado com sucesso!!'})
      setShowModal(true);

    } catch (error) {
      setModalContent({titulo:'ERROR', mensagem: error.message});
      setShowModal(true);
      setNome('');
      setIdade('');
      
    }

  }

  const closeModal =() => setShowModal(false);

  
  return (
    <div>
      <Navbar />
      <div className='container'>
        <form onSubmit={(e) => createPost(e)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Nome</label>
            <input type="text" className="form-control" id="exampleInputEmail1" value={nome} onChange={(e) => setNome(e.target.value)} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Idade</label>
            <input type="text" className="form-control" id="exampleInputPassword1" value={idade} onChange={(e) => setIdade(e.target.value)} required/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      {showModal && <Modal titulo={modalContent.titulo} mensagem={modalContent.mensagem} onClose={closeModal} />}
    </div>
  )
}

export default Cadastro