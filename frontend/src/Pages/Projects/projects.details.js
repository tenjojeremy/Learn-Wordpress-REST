import React, { memo, useEffect } from 'react'
import useApi from '../../Utils/Api/useApi'
import { withRouter } from 'react-router'

const ProjectItem = ({
  match: {
    params: { id }
  }
}) => {
  const route = 'projects'
  const { request, response = {} } = useApi({ route })

  useEffect(() => {
    fetchImage()
  }, [])

  const fetchImage = async () => request({ id })

  console.log(response)

  return (
    <div>
      {response ? (
        <h2>{response.data.title.rendered}</h2>
      ) : (
        <div>Loading...</div>
      )}
      {response && <span>{response.data.acf.description}</span>}
    </div>
  )
}

export default withRouter(memo(ProjectItem))
