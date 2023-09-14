import { useState, useEffect } from 'react'



//setState({apiResponse: res}


const App = () => {
  const [text, setText] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/api/notes")
      .then(res => res.text())
      .then(res => setText(JSON.parse(res)))
      .catch(err => err)
  }, []);

  return (
    <div>
      <Header/>
      <Link href="/new" text="new bin"/>
      <Table text={text}/>
    </div>
  )
}

const Header = () => {
  return <h1>🦅 Team 5 Golden Eagles 🦅  ♻️♻️♻️</h1>
}

const Table = (text) => {
  console.log(text.text)
  return (
  <table>
    <thead>
      <RowNames/>
    </thead>
    <tbody>
      {text.text.map((t, idx) => {
        return (
        <RowEntry 
        key={idx}
        time={t.time}
        bin={t.bin}
        method={t.method}
        status={t.status}
        body={t.body}
        />
        )
})}
    </tbody>
  </table>
  )
}

const RowNames = () => {
  return (
    <tr>
      <RowHead name="Time"/>
      <RowHead name="Bin"/>
      <RowHead name="Method"/>
      <RowHead name="Status Code"/>
      <RowHead name="Body"/>
    </tr>
  )
}

const RowHead = (props) => {
  return (
    <th style={{padding: "30px"}}>{props.name}</th>
  )
}

const RowEntry = (props) => {
  return (
    <tr key={props.id}>
      <td>{props.time}</td>
      <td>{props.bin}</td>
      <td>{props.method}</td>
      <td>{props.status}</td>
      <td>{props.body}</td>
    </tr>
  )
}

const Link = (props) => {
  return <a href={props.href}>{props.text}</a>
}



export default App
