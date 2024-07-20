import Task from "./components/Task";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";

export default function Home() {
  const tasks = [
    {id: 1, title: "Read a book", isDone: true },
    {id: 2, title: "Take a shower", isDone: false },
    {id: 3, title: "Sleep", isDone: false },
  ];
  return (
    // Main container
    <div className="container mx-auto">
      
      {/* header section */}
      <Header/>

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        
        {/* task input */}
        <TaskInput/>

        {/* task list*/}
        <Task title={tasks[0].title} isDone={tasks[0].isDone} />
        <Task title={tasks[1].title} isDone={tasks[1].isDone} />
        <Task title={tasks[2].title} isDone={tasks[2].isDone} />

      </div>

      {/* //footer section */}
      <Footer year="2024" fullname = "Chanachai Chamnanmor" studentId = "660612140"/>
    </div>
  );
}
