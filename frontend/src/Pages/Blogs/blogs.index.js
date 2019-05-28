import React, { memo, useEffect, Fragment } from 'react'
import useApi from '../../Utils/Api/useApi'
import BlogItem from './blogs.item'

const Blogs = () => {
  const route = 'blogs'
  const { loading, request, error, response } = useApi({ route })

  useEffect(() => {
    request({ query: 'filter[orderby]=date&order=asc' })
  }, [])

  console.log(response)

  if (loading) return 'loading..'

  if (error) return 'error'

  if (response)
    return (
      <>
        {response.data.map((item) => (
          <Fragment key={item.id}>
            <BlogItem {...item} />
          </Fragment>
        ))}
      </>
    )
}

export default memo(Blogs)
