import { Container, Links, Content } from "./styles"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect} from "react"
import { api } from "../../services/api"
export function Details () { // corpo da função
  const [data, setData] = useState(null)
  const params = useParams()
  const navigate = useNavigate()
  function handleBack () {
navigate(-1) // para que ele volte para rota a anterior, inves de ir pra outra camada 
  }

 async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a nota?")
    if(confirm){
     await api.delete(`/notes/${params.id}`)
navigate(-1)

    }
  }
  useEffect(()=> {
    async function fetchNotes() {
const response = await api.get(`/notes/${params.id}`)
setData(response.data)
    }
    fetchNotes()
  }, [])
  return ( // conteudo da interface dentro do return
 <Container>
    
  
   <Header/>
   {
    data && 
   <main>
    <Content>
    <ButtonText title="Excluir Nota"
    onClick={handleRemove}
    ></ButtonText>
    <h1>{data.title}</h1>

    <p>{data.description}
</p>
   {
    data.links && 
   <Section title="Links Utéis">
    <Links>
    {
    data.links.map(link => (
      <li key={String(link.id)}>
        <a 
        href={link.url} target="blank">
          {link.url}
        </a>
        </li>
      ))
    }
    </Links>
   </Section>
}
{
  data.tags &&
   <Section title="Marcadores">
    {
      data.tags.map(tag => (
    <Tag 
    key={String(tag.id)}
    title={tag.name}/>
    ))
}
    </Section>
}
    <Button 
    onClick={handleBack}
    title="Voltar"/>
   
    </Content>
   </main>
}
  
  </Container> // fragment está como o elemento pai, pois dentro do componente so pode haver um return

  )
}