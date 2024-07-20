import Header from"./components/Header"
import Taskinput from"./components/TaskInput"
import Task from"./components/Task"
import Footer from"./components/Footer"

const taskList = [
  {id: 1, title: "Read a book", isDone: true },
  {id: 2, title: "Take a shower", isDone: false },
  {id: 3, title: "Sleep", isDone: false },
]

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header/>
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <Taskinput/>
        {/* task */}
        <Task {...taskList[0]} />
        <Task {...taskList[1]} />
        <Task {...taskList[2]} />
      </div>

      {/* //footer section */}
      <Footer 
      year="2024"
      fullName="Chanachai Chamnannmor"
      studentId="660612140"
      />
    </div>
  );
}