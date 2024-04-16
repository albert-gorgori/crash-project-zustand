import Card from "./components/Card"
import { useFetchRepositories } from "./hooks/useRepos"
import { useFavoriteReposStore } from "./store/favoriteRepos"

const App = () => {

  //https://www.youtube.com/watch?v=KQbgKizEjxw

  const {data, isLoading} = useFetchRepositories('faztweb')

  const {favoriteReposIds} = useFavoriteReposStore()

  if(isLoading) return <div>Loading.....</div>
  console.log(data)

  return (
    <div>
      {data?.map(repository => (
        <div>
          <Card repository={repository} key={repository.id} isFavorite={favoriteReposIds.includes(repository.id)}/>
        </div>
      ))

      }
    </div>
  )
}

export default App