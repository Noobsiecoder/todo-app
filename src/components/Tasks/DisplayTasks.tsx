import { useSelector } from "react-redux";

// Redux reducer
import { TaskReduxState } from "../../state/reducer/taskReducer";

// React components
import { CheckBoxButton, DeleteButton } from "../TodoInput/Button/Button";

interface DisplayTasksProps {
  currentRoute: string;
}

interface TaskComponentProps {
  id: number;
  taskName: string;
  isTaskCompleted: boolean;
  isDeleteOptionAvailable: boolean;
}

const TaskComponent = ({
  id,
  taskName,
  isTaskCompleted,
  isDeleteOptionAvailable,
}: TaskComponentProps): JSX.Element => (
  <li className="flex items-center justify-between">
    <div className="flex items-center gap-x-4">
      <CheckBoxButton
        id={id}
        taskName={taskName}
        isCompleted={isTaskCompleted}
      />
      <span
        className={`font-medium break-all md:text-lg font-montserrat text-gray-750 ${
          isTaskCompleted ? "line-through" : ""
        } `}
      >
        {taskName}
      </span>
    </div>
    {isDeleteOptionAvailable ? (
      <DeleteButton id={id} taskName={taskName} isCompleted={isTaskCompleted} />
    ) : null}
  </li>
);

const DisplayTasks = ({ currentRoute }: DisplayTasksProps): JSX.Element => {
  const tasks = useSelector<TaskReduxState, TaskReduxState["tasks"]["value"]>(
    (state) => state.tasks.value
  );

  switch (currentRoute) {
    case "All":
      return (
        <div className="sm:px-20 md:px-24 lg:px-56 xl:px-80">
          <ul className="grid gap-y-4">
            {tasks.map((task, index) => (
              <TaskComponent
                key={index}
                id={task.id}
                taskName={task.task}
                isTaskCompleted={task.isComplete}
                isDeleteOptionAvailable={false}
              />
            ))}
          </ul>
        </div>
      );

    case "Active":
      return (
        <div className="sm:px-20 md:px-24 lg:px-56 xl:px-80">
          <ul className="grid gap-y-4">
            {tasks.map((task, index) =>
              !task.isComplete ? (
                <TaskComponent
                  key={index}
                  id={task.id}
                  taskName={task.task}
                  isTaskCompleted={task.isComplete}
                  isDeleteOptionAvailable={false}
                />
              ) : null
            )}
          </ul>
        </div>
      );

    // For "Completed"
    default:
      return (
        <div className="sm:px-20 md:px-24 lg:px-56 xl:px-80">
          <ul className="grid gap-y-4">
            {tasks.map((task, index) =>
              task.isComplete ? (
                <TaskComponent
                  key={index}
                  taskName={task.task}
                  id={task.id}
                  isTaskCompleted={task.isComplete}
                  isDeleteOptionAvailable={true}
                />
              ) : null
            )}
          </ul>
        </div>
      );
  }
};

export default DisplayTasks;
