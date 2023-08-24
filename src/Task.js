//component

export const Task = (props) =>{
    return (
        <div>
          <h1 style={{color:props.completed?"green":"black"}}>{props.taskName}</h1>
          <button onClick={()=>props.deleteTask(props.id)}>x</button>
          <button onClick={()=>props.completedTask(props.id)}>Completed</button>
        </div>
      );
}