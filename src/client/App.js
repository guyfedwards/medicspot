import React, { useState } from 'react'
import { Grommet, grommet, List, TextInput } from 'grommet'
import styled from 'styled-components'

const CenterDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
`

const StyledTextInput = styled(TextInput)`
  width: 500px;
`

const EllipsisSpan = styled.span`
  max-width: 260px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const makePrimaryKey = data => {
  return <EllipsisSpan>{data.name}</EllipsisSpan>
}

const makeSecondaryKey = data => {
  return <span>({data.longitude}, {data.latitude})</span>
}

const App = () => {
  const [results, setResults] = useState([])

  const handleChange = async (e) => {
    const query = e.target.value

    if (query.length < 2) {
      setResults([])
      return
    }

    const res = await fetch(`/locations?q=${query}`)
    const { data } = await res.json()

    setResults(data)
  }

  return (
    <Grommet theme={grommet}>
      <CenterDiv>
        <StyledTextInput
          placeholder='Search...'
          onChange={handleChange}
        />
        <List
          primaryKey={makePrimaryKey}
          secondaryKey={makeSecondaryKey}
          data={results}
        />
      </CenterDiv>
    </Grommet>
  )
}

export default App
