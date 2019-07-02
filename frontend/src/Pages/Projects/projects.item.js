import React, { memo, useEffect } from 'react'
import useApi from '../../Utils/Api/useApi'

const ProjectItem = ({ id, acf: { thumb_image, description }, title }) => {
  const route = 'media'
  const { request, response } = useApi({ route })

  useEffect(() => {
    fetchImage()
  }, [])

  const fetchImage = async () => request({ id: thumb_image.id })

  const openDetailsPage = () => window.historyRouter.push(`projects/${id}`)

  return (
    <div onClick={openDetailsPage}>
      <h2>{title.rendered}</h2>
      {response ? (
        <img src={response.data.source_url} alt="hello" />
      ) : (
        'loading image....'
      )}
    </div>
  )
}

export default memo(ProjectItem)
