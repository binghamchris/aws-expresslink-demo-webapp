import React, { useState, useEffect } from "react"

const IndexPage = () => {

  const [urlContent, setUrlContent] = useState(0)

  useEffect(() => {
    fetch(process.env.SHADOW_READ_API_URL)
    .then( res => res.json() )
    .then( data => {setUrlContent(data)} )
  }, [])

  var content = "Test"


  if (urlContent) {
    content = JSON.stringify(urlContent, null, 2)
  }

  return (
    <main>
      <h1>
        IoT Device Shadow Test
      </h1>
      <p>
        {content}
      </p>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
