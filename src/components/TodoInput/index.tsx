import React from "react";
import { useDispatch } from "react-redux";

// Utility
import { handleFormChange } from "./utils/index";

// React components
import { AddTaskButton } from "./Button/Button";
import Input from "./Input/Input";

const TaskForm = (): JSX.Element => {
  const [inputValue, setInputValue] = React.useState("");
  const [id, setId] = React.useState(0);
  const dispatch = useDispatch();

  return (
    <form
      className="sm:px-20 md:px-24 lg:px-56 xl:px-80"
      onSubmit={(event) =>
        handleFormChange(event, id, setId, inputValue, setInputValue, dispatch)
      }
    >
      <div className="flex items-center justify-between gap-x-4">
        <Input inputValue={inputValue} setInputValue={setInputValue} />
        <AddTaskButton />
      </div>
    </form>
  );
};

export default TaskForm;
