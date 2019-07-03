import { useEffect } from 'react'
import useApi from '../Utils/Api/useApi'

const ProjectItem = ({ id, title, url: { push }, source_url }) => {
  const openDetailsPage = () => push(`projects/${id}`)

  return (
    <div onClick={openDetailsPage}>
      <h2>{title.rendered}</h2>
      {source_url ? <img src={source_url} alt="hello" /> : 'loading image....'}
    </div>
  )
}

export default ProjectItem
