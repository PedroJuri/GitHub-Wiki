import React from 'react'
import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {
  const handleRemove = (isRemoveButtonClicked, event) => {
    if (isRemoveButtonClicked) {
      event.stopPropagation(); // Evita que o clique se propague para o contêiner pai
      handleRemoveRepo(repo.id, true);
    }
  };
  
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} rel="noreferrer" target='_blank'>Ver Repositório</a><br/><br/>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" rel='norefferer' className='remover' onClick={(event) => handleRemove(true, event)}>Remover da Lista</a>
      <hr/>
    </ItemContainer>
  )
}

export default ItemRepo;