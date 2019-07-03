import { useEffect, Fragment } from 'react'
import useApi from '../Utils/Api/useApi'
import ProjectItem from '../projects/projects.item'
import fetch from 'isomorphic-unfetch'
import axios from 'axios'

const Projects = ({ projects, url, test }) => {
  return (
    <>
      {projects.map((item) => (
        <Fragment key={item.id}>
          <ProjectItem {...item} url={url} />
        </Fragment>
      ))}
    </>
  )
}

Projects.getInitialProps = async function() {
  const res = await fetch(
    'http://localhost:8000/wp-json/wp/v2/projects?filter[orderby]=date&order=asc'
  )
  const data = await res.json()

  const dataWithImage = data.map(async (proj) => {
    const {
      acf: {
        thumb_image: { id: imageId }
      }
    } = proj
    const res = await fetch(
      `http://localhost:8000/wp-json/wp/v2/media/${imageId}`
    )
    const data = await res.json()

    return { ...data, ...proj }
  })

  const hello = await Promise.all(dataWithImage)

  return {
    projects: hello
  }
}

export default Projects
