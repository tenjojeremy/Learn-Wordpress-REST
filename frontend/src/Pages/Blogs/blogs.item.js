import React, { memo, useEffect } from 'react'
import useApi from '../../Utils/Api/useApi'

const BlogItem = ({ id, acf: { publisher }, title, featured_media }) => {
  const route = 'media'

  const { request, response } = useApi({ route })
  useEffect(() => {
    fetchImage()
  }, [])

  const fetchImage = async () => request({ id: featured_media })

  return (
    <>
      <h2> {title.rendered} </h2>
      <small> {publisher}</small>
      {response ? (
        <img src={response.data.source_url} alt="hello" />
      ) : (
        'loading image....'
      )}
    </>
  )
}

export default memo(BlogItem)
