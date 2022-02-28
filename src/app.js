import Header from './components/header'

import initialEmails from './data/emails'
import {useState} from "react"

import './styles/app.css'

function App() {
  const [emails,updateEmails] = useState(initialEmails)
  console.log(initialEmails)

  const toggleRead = targetEmail => {
    const update = emails.map(email =>{
      if (email === targetEmail) return {...email, read: !email.read}
      else return email
    })
    updateEmails(update)
  }

  const toggleStarred = targetEmail => {
    const update = emails.map(email => {
      if (email === targetEmail) return {...email, starred: !email.starred}
      else return email
    })
    updateEmails(update)
  }

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">{emails.reduce((a,b)=>a+!b.read,0)}</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">{emails.reduce((a,b)=>a+b.starred,0)}</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {emails.map(email => 
          <li key={email.id} className={`email ${email.read ? "read" : "unread"}`}>
            <div className="select">
            <input
              className="select-checkbox"
              type="checkbox"
              onChange = {() => toggleRead(email)}
              checked = {email.read}
              />
            </div>
            <div className="star">
            <input
            className="star-checkbox"
            type="checkbox"
            onChange = {() => toggleStarred(email)}
            checked = {email.starred}
            />
            </div>
            <div className="sender">{email.sender}</div>
            <div className="title">{email.title}</div>
          </li>)}
        </ul>  
      </main>
    </div>
  )
}

export default App
