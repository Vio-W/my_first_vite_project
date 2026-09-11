import './App.css'


function StatusBadge({ isOpenToWork}) {
  return (
    <span className={isOpenToWork ? "badge badge-green" : "badge badge-grey"}>
      {isOpenToWork ? "Open to work" : "Busy learning"}
    </span>
  );
}

function App() {
  const name = "Wann Vimeantevy";
  const isOpenToWork = true;

  return (
    <div className="profile">
      <h1 className="name">{name}</h1>
      <p className = "goal">My goal for this course is to be comfortable with ReactJS and build projects with it.</p>
      <StatusBadge isOpenToWork={isOpenToWork}/>
    </div>
  );
}

export default App;