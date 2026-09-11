import ProjectCard from './ProjectCard';

function StatusBadge({ isOpenToWork }) {
  return (
    <span className={isOpenToWork
      ? "px-3 py-1 rounded-xl text-sm text-white bg-green-500 mt-8"
      : "px-3 py-1 rounded-xl text-sm text-white bg-gray-500 mt-8"}>
      {isOpenToWork ? "Open to work" : "Busy learning"}
    </span>
  );
}

function SectionHeading({ title }) {
  return <h2 className="text-gray-900 text-lg font-semibold">{title}</h2>;
}

function Card({ children }) {
  return <div className="rounded-lg border border-gray-200 p-6 shadow-sm">{children}</div>
}

function App() {
  const name = "Wann Vimeantevy";
  const isOpenToWork = true;

  return (
    <div className="p-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
      <main className="space-y-4">
        <SectionHeading title="About Me"/>
        <h1 className="text-gray-900 text-3xl font-bold">{name}</h1>
        <p className="text-gray-700">My goal for this course is to be comfortable with ReactJS and build projects with it.</p>
        <StatusBadge isOpenToWork={isOpenToWork} />

        <SectionHeading title="Projects" />
        <div className="grid gap-4 md:grid-cols-2">
          <ProjectCard title="OneDash Booking App" status="In Progress" />
          <ProjectCard title="Portfolio Site" status="Complete" />
        </div>
      </main>

      <aside className="space-y-4">
        <Card>
          <p className="text-gray-500 text-sm">Contact: 012 678 678</p>
        </Card>
      </aside>
    </div>
  );
}

export default App;