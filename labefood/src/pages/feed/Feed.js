import React from "react"
import search from '../../assets/search.svg'
import { useForm } from "../../hooks/useForm";
import FeedCards from "../../components/FeedCards/FeedCards";
import { useProtectedPage} from "../../hooks/useProtectedPage";
import { useState } from "react";
import { Container, Categories } from "./styled"
import { Footer } from "../../components/footer/Footer";
import {Header} from "../../components/header/header"



export const Feed= () =>{

    useProtectedPage ()

    const [ form, onChange, cleanFields ] = useForm({
        search: ''
    })
    const [ filter, setFilter ] = useState('')
  const categories = ['Árabe', 'Asiática', 'Hamburguer', 'Italiana', 'Sorvetes', 'Carnes', 'Baiana', 'Petiscos', 'Mexicana']
  const [changeColor, setChangeColor] = useState(null)

  const onCategory = (category, index) => {
    cleanFields()
    setFilter(category)
    setChangeColor(index + 1)
  }

  const onFilter = () => {
    setFilter('')
    setChangeColor(null)
  }

    return ( 
        <Container>
        <Header subTitle={'Rappi4'}/>
        <search>
          <button>
            <img src={search} alt="Ícone de busca" />
          </button>
          <input 
            onClick={onFilter}
            type="text" 
            placeholder="Restaurante" 
            value={form.search}
            name='search'
            onChange={onChange}
          />
        </search>
        <Categories idx={changeColor}>
          {categories.map((category, i) => (
            <p key={i} onClick={() => onCategory(category, i)}>{category}</p>
          ))}
        </Categories>
        <FeedCards text={form.search} filter={filter}/>
        <Footer current={'Feed'}/>
      </Container>
     )
     }


