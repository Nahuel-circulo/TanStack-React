import './App.css'
import { useRandom } from './hooks/useRandom'



export const App = () => {

  const query = useRandom()


  return (
    <>
      {query.isFetching
        ? (<h2>Cargando...</h2>)
        : (<h2>Numero aleatorio : {query.data}</h2>)
      }
      {
        !query.isLoading && query.isError && (
          <h3>{`${query.error}`}</h3>
        )
      }

      <button onClick={() => query.refetch()} disabled={query.isFetching} type="button" className="btn btn-primary">
        Nuevo Numero
      </button>
    </>
  )
}


