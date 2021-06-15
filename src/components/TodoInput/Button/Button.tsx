import { useDispatch, useSelector } from "react-redux";

// Redux reducer
import { LabelReduxState } from "../../../state/reducer/labelReducer";

// Utility
import {
  handleCheckBoxClick,
  handleDeleteButton,
  handleLabelChange,
} from "../utils/index";

// React components
import { CheckIcon, DeleteIcon } from "../icons/index";

interface CheckBoxButtonProps {
  id: number;
  taskName: string;
  isCompleted: boolean;
}

interface DeleteButtonProps {
  id: number;
  taskName: string;
  isCompleted: boolean;
}

interface LabelButtonProps {
  label: string;
}

export const AddTaskButton = (): JSX.Element => (
  <button className="px-3 py-4 bg-blue-500 w-28 focus:outline-none rounded-xl focus:ring-2 focus:ring-blue-600">
    <span className="text-sm font-semibold text-white font-montserrat">
      Add
    </span>
  </button>
);

export const CheckBoxButton = ({
  id,
  taskName,
  isCompleted,
}: CheckBoxButtonProps): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div
      className={`p-0.5 rounded-sm border cursor-pointer ${
        isCompleted ? "bg-blue-500 border-blue-500" : "bg-white"
      }`}
      onClick={(event) =>
        handleCheckBoxClick(event, id, taskName, isCompleted, dispatch)
      }
    >
      <CheckIcon />
    </div>
  );
};

export const DeleteButton = ({
  id,
  taskName,
  isCompleted,
}: DeleteButtonProps): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={(event) =>
        handleDeleteButton(event, id, taskName, isCompleted, dispatch)
      }
      className="focus:outline-none"
    >
      <DeleteIcon />
    </button>
  );
};

export const LabelButton = ({ label }: LabelButtonProps): JSX.Element => {
  const currentRoute = useSelector<
    LabelReduxState,
    LabelReduxState["currentLabel"]["value"]
  >((state) => state.currentLabel.value);
  const dispatch = useDispatch();

  return (
    <button
      onClick={(event) => handleLabelChange(event, label, dispatch)}
      className="border-b focus:outline-none"
    >
      <h3
        className={`text-center font-montserrat text-gray-750 text-sm ${
          label === currentRoute
            ? "border-blue-500 font-semibold border-b-2"
            : ""
        } `}
      >
        {label}
      </h3>
    </button>
  );
};
