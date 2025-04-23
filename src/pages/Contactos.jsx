import { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import postService from "../services/postService.js"

export const Contactos = () => {

    const { store, dispatch } = useGlobalReducer()

    useEffect(() => {
        const fetchAgendas = async () => {
          try {
            const data = await postService.loadPosts()
            dispatch({ type: 'SET_AGENDAS', payload: data })
          } catch (error) {
            console.error('Error cargando agendas:', error)
          }
        }
      
        fetchAgendas()
      }, [])
      
    console.log('contactos',store)
    // console.log('contactos',store.nombre)
    return (

        <div className="container">
            <h3>pagina de contactos</h3>
            <ul>
                {store.agendas?.length> 0 && store.agendas?.map((el,i)=> <li key={i}>{el.slug}</li>)}
            </ul>
        </div>
    )
}