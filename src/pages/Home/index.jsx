import {Container, Brand, Menu, Search, Content, NewNote} from './styles'
import { Header } from '../../components/Header';
import {ButtonText} from '../../components/ButtonText'
import { FiPlus,FiSearch} from 'react-icons/fi'
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
export function Home(){
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagSelected] = useState([])
    const [search, setSearch] = useState("")
    const [notes, setNotes] = useState([])
    const navigate = useNavigate()
  
    function handleTagSelected(tagName){
        if(tagName === "all") {
            return setTagSelected([])
        }
        const alreadySelected = tagsSelected.includes(tagName) // está verificando se tagja está sendo selecionada
if(alreadySelected) {
const filteredTags = tagsSelected.filter(tag => tag !== tagName)
setTagSelected(filteredTags) // ele vai retornar tudo que está no tagSelected menos a que for clicada , pois eles serão diferenes do tag
} else {
    setTagSelected(prevstate =>  [...prevstate, tagName])
}

        
    }

    function handleDetails(id) {
navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchTags () { // a fuunção vai ser usada apenas dentro do useEffect, então ela pode ser usada dentro dele 
const response = await api.get("/tags") // está pegando dentro da api na tabela de tags os dados e retornando para o armazenamento do estado 
setTags(response.data)
        }
        fetchTags()
    }, [])

    useEffect(() => {
async function fetchNotes () {
const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`) // esta passando o conteudo do title para o search e o conteudo das tags para o tagsSelected
setNotes(response.data);
}
fetchNotes()
    }, [tagsSelected, search])
    return (
<Container>
    <Brand>
    
    <h1>Rocketnotes</h1>
    </Brand>
    <Header/>
    <Menu >
<ButtonText 
title="Todos" 
isActive={tagsSelected.length === 0}
onClick={() => handleTagSelected("all")}

></ButtonText>

        {
            tags && tags.map(tag => (
<li key={String(tag.id)}>
    <ButtonText 
title={tag.name}
onClick={() => handleTagSelected(tag.name)}
isActive={tagsSelected.includes(tag.name)}



></ButtonText></li>

            ))

        }
    </Menu>
    <Search>
        
<Input 
placeholder="Pesquisar pelo titulo" 
icon={FiSearch}
onChange={(e) => setSearch(e.target.value)}
/>
    </Search>
    <Content >
     <Section title="Minhas Notas">
        {
            notes.map(note => (
        <Note 
        key={String(note.id)}
        data={note}
        onClick={()=> handleDetails(note.id)}
        />
        
            ))
        }
     </Section>
    </Content>
    <NewNote to= "/new">
        <FiPlus></FiPlus>
    Criar Nota
    </NewNote>
</Container>
    );
}