import { useEffect, useState } from 'react'
import './App.css'
import Form from './Form.jsx'
import List from './List.jsx'

function App() {
  const [input, setInput] = useState({
    fname: '',
    lname: '',
    country: '',
    score: ''

  })
  const [data, addData] = useState([])
  const [sortedData, setSortedData] = useState([])

  useEffect(() => {
    const temp = [...data]
    //  only update sortedData, not data itself
    setSortedData(temp.sort((a, b) => {
      return b.score - a.score
    }))

  }, [data])  // runs every time data changes

  function handleSubmit(e) {
    e.preventDefault()
    addData([...data,
    {
      id: Date.now(),
      name: input.fname + " " + input.lname,
      country: input.country,
      score: Number(input.score)
    }
    ]
    )

  }
  function handleChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value })

  }
  function handleDelete(idToDelete) {
    addData(
      data.filter((obj) => {
        return obj.id != idToDelete
      })
    )

  }
  function handleIncrease(idToIncrease) {
    addData(
      data.map((obj) => {
        if (obj.id === idToIncrease) {
          return { ...obj, score: obj.score + 5 }
        }
        return obj
      })
    )

  }
  function handleDecrease(idToDecrease) {
    addData(
      data.map((obj) => {
        if (obj.id === idToDecrease) {

          if (obj.score <= 0) {
            return obj
          }
          return { ...obj, score: obj.score - 5 }

        }
        else
          return obj
      })
    )

  }

  return (
    <>
      <Form
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        handleChange={handleChange} />
      <List
        data={sortedData} //for display//
        handleDelete={handleDelete}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease} />
    </>
  )
}

export default App
