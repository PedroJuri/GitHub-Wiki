import { useState } from 'react';
import gitLogo from '../Assets/github.png'
import Input from '../Components/Input';
import Button from '../Components/Button';
import ItemRepo from '../Components/ItemRepo';
import { Container } from './styles';
import {api} from '../Services/api'


function App() {
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])
  
  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)
    
    if (data.id){

      const isExist = repos.find(repo => repo.id === data.id)

      if(!isExist){
        setRepos(prev => [...prev, data])
        setCurrentRepo('')
        return
      }
    }
    alert('Repositório não encontrado ou já incluso. / Repo not found or already included')
  }

  const handleRemoveRepo = (id, isRemoveButtonClicked) => {
    if (isRemoveButtonClicked) {
      setRepos(prev => prev.filter(repo => repo.id !== id));
    }
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='Logo GitHub'/>
      <Input value={currentRepo} onChange={(e => setCurrentRepo(e.target.value))}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
