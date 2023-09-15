import { useState, useEffect } from 'react'
import { Container, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Button } from '@mui/material'

const App = () => {
  const [text, setText] = useState([])
  const [bins, setBins] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then(res => res.text())
      .then(res => setText(JSON.parse(res)))
      .catch(err => err)
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/requests")
    .then(res => res.text())
    .then(res => setBins(JSON.parse(res)))
    .catch(err => err)
  }, [])

  return (
    <Container>
      <Header/>
      <Form />
      <P bins={bins}/>
      <Table text={text}/>
    </Container>
  )
}

const Header = () => {
  return (
    <div>
      <h1>🦅 Team 5 Golden Eagles 🦅</h1>
      <h1>♻️♻️♻️ RecycleBin ♻️♻️♻️</h1>
    </div>
  )  
}

const P = (props) => {
  console.log(props)
  return (
    <div>
    {props.bins.map(bin =>
      <TableRow>
        <TableCell>{"http://localhost:3000/" + bin.bin_path}</TableCell>
        </TableRow>
    )}
    </div>
  )
}

const Table = (text) => {
  return (
  <TableContainer component={Paper}>
    <table>
      <TableHead>
        <RowNames>
          <RowHead>Time</RowHead>
          <RowHead>Path</RowHead>
          <RowHead>Method</RowHead>
          <RowHead>Body</RowHead>
        </RowNames>
      </TableHead>
      <TableBody>
        {text.text.map((t, idx) => 
          <TableRow key={idx}>
            <TableCell>{t.received_at}</TableCell>
            <TableCell>{t.http_path}</TableCell>
            <TableCell>{t.http_method}</TableCell>
            <TableCell>body={t.body}</TableCell>
          </TableRow>
          )}
      </TableBody>
  }
    </table>
  </TableContainer>
  )
}

const RowNames = () => {
  return (
    <tr>
      <RowHead name="Time"/>
      <RowHead name="Http Path"/>
      <RowHead name="Method"/>
      <RowHead name="Body"/>
    </tr>
  )
}

const RowHead = (props) => {
  return (
    <th style={{padding: "30px"}}>{props.name}</th>
  )
}

// const RowEntry = (props) => {
//   return (
//     <tr key={props.id}>
//       <td>{props.received_at}</td>
//       <td>{props.http_path}</td>
//       <td>{props.http_method}</td>
//       <td>{props.body}</td>
//     </tr>
//   )
// }

const Link = (props) => {
  return <a href={props.href}>{props.text}</a>
}

const List = (props) => {
  return (
    <ul>
      <Item />
    </ul>
  )
}

const Form = () => {
  // const addNote = (e) => {
  //   e.preventDefault()
  //   location.reload()
  // }

  return (
    <form
     method="post" action="http://localhost:3000/">
        {/* <label for="hook-url">Hook url: {props.url}</label><br></br> */}

        <Button variant="contained" color="primary" type="submit">deploy</Button>
      </form>   
  )
}



export default App