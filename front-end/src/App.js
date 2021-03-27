import React, {useState} from 'react'

function App() {
  const [Create, SetCreate] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const handle_Form = () => {
    setShowForm(true);
  }

  const handle_create = () => {
    SetCreate('clicked');
    console.log('clicked');
  }

  const menu = () => (
    <div>
    <h1>Social Scheduler</h1>
    <p>1. Create a schedule</p>
    <p>2. Add friends, family, or colleagues</p>
    <p>3. Plan out events</p>
    <div className="create">
    <button className="viewbutton" onClick={handle_create}>View Schedules</button>
    </div>
    </div>
  )

  const create_screen = () => (
    <div>
      <h1>Your Schedules</h1>
      <button className = "createbutton" onClick={handle_Form}>Create a new schedule</button>
      {showForm && (
        <body>
        <form className="createForm">
          <label>Name: </label>
          <input type="text"/>
        </form>
        </body>
      )}
    </div>
  )

  return (
    <div>
    {Create === null && menu()}
    {Create !== null && create_screen()}
    </div>
  );
}

export default App;
