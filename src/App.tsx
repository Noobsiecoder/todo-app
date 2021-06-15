import React from "react";
import { useSelector } from "react-redux";

// Redux reducer
import { LabelReduxState } from "./state/reducer/labelReducer";

// React components
import DisplayTasks from "./components/Tasks/DisplayTasks";
import { LabelButton } from "./components/TodoInput/Button/Button";
import TaskForm from "./components/TodoInput/index";
import Title from "./components/Title/index";

interface LabelProps {
  labelArray: string[];
}

const Labels = ({ labelArray }: LabelProps): JSX.Element => (
  <div className="grid justify-between grid-cols-3 sm:px-20 md:px-24 lg:px-56 xl:px-80">
    {labelArray.map((label, index) => (
      <LabelButton key={index} label={label} />
    ))}
  </div>
);

const App = (): JSX.Element => {
  const currentRoute = useSelector<
    LabelReduxState,
    LabelReduxState["currentLabel"]["value"]
  >((state) => state.currentLabel.value);
  const buttonLabels = ["All", "Active", "Completed"];

  return (
    <div className="px-6 mt-4 space-y-6 sm:space-y-8 md:space-y-10 md:mt-6 xl:mt-8">
      <Title />
      <Labels labelArray={buttonLabels} />
      {currentRoute !== "Completed" ? <TaskForm /> : null}
      <DisplayTasks currentRoute={currentRoute} />
    </div>
  );
};

export default App;
