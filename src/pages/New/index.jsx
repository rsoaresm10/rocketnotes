import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/Noteitem";
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";



export function New() {
    //criando estado para o titulo eo observações
const [title, setTitle] = useState("")
const [description, setDescription] = useState("")

    //criando funcionalidade para os links
    const [links, setLinks] = useState([]); //guarda todos os links
    const [newLink, setNewLink] = useState(""); //guarda o link que vai ser armazenado no momento
    //criando funcionalidade para as tags
    const [tags, setTags] = useState([]); 
    const [newTags, setNewTags] = useState("");    // armazena o estado da nova tag que vai ser passada dentro do setTags na função handleAddTag
    
    //usando o useNavigate 
    const navigate = useNavigate()
    function handleBack () {
        navigate(-1) // para que ele volte para rota a anterior, inves de ir pra outra camada 
          }
    function handleAddLink(){
setLinks(prevState => [...prevState, newLink]) // vai pegar o estado anterior usando o spred operator e adicionar o novo link dentro do array
        setNewLink("")
}

function handleDeleteLink (deleted) {
setLinks(prevState=> prevState.filter(link => link !== deleted)) // ele vai retornar os links anteriores que são diferentes do link passado na função de deletar
}

function handleAddTag () { //está passando as novas tags para que armazene dentro do setTags
    setTags(prevState => [...prevState, newTags])
    setNewTags("")
}

function handleDeleteTag (deleted) {
    setTags(prevState=> prevState.filter(tag => tag !== deleted))
}

async function handleNewNote () {
if(!title) {
    return alert("coloque um título")
}

if(!description) {
    return alert("coloque uma descrição")
}

    if(newTags) {
       return alert("você deixou uma tag em aberto")
    }

    if (newLink) {
       return alert("você deixou um link em aberto")
    }
await api.post("/notes", {
    title, 
    description, 
    tags, 
    links})
    
        alert("nota cadastrada com sucesso")
        navigate(-1)
    
    
}
    return (
        <Container>
            <Header></Header>
<main>
          <Form>
            <header>
            <h1>Criar Nota</h1>
            <ButtonText title="voltar" onClick={handleBack}/>
            </header>
            <Input placeholder="Titulo"   
            onChange={e => setTitle(e.target.value)}
            value={title}
            
            />

           <Textarea placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
            value={description}
           
           
           />

            <Section title="Links Utéis">
                {
                    links.map((link, index) => (
            <NoteItem
            key={String(index)}
            value={link}
            onClick={()=> handleDeleteLink(link)}>
                

            </NoteItem>
                    ))
                }
             <NoteItem 
             isNew
             placeholder="Novo link" 
             value={newLink}
             onChange={e => setNewLink(e.target.value)}
             onClick={handleAddLink}
             ></NoteItem>
            </Section>

            <Section title="Marcadores">
        <div className="tags">
            {
            
            tags.map((tag, index)=> (
            <NoteItem 
            key={String(index)}
            value={tag}
            onClick={()=> handleDeleteTag(tag)}
            
            ></NoteItem>
            ))
        }
            <NoteItem 
            placeholder="Nova tag" 
            onChange={e => setNewTags(e.target.value)}
            isNew 
            value={newTags}
            onClick={handleAddTag}
            
            ></NoteItem>
            </div>
            </Section>


            <Button title="Salvar" onClick={handleNewNote}></Button>
            </Form>
            </main>
        </Container>
    )
}