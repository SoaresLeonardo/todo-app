import { MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
import { BtnDeleteAll, DeleteBtn } from '../assets/styles/btnContainer';
import { TasksContainer, TotalTasks } from '../assets/styles/tasksContainer';

export default function Tasks({
  taskCounter,
  btnDeleteAllTasks,
  tasks,
  deletebtn,
  messageCreateTask,
}) {
  return (
    <div>
      <TasksContainer>
        <ul>
          {tasks.length >= 1
            ? tasks.map((task, index) => (
                <li key={task}>
                  {task}
                  <div>
                    <DeleteBtn>
                      <MdDelete onClick={(e) => deletebtn(e, index)} />
                    </DeleteBtn>
                  </div>
                </li>
              ))
            : messageCreateTask('create your tasks :)')}
        </ul>
        <TotalTasks>
          total tasks: {taskCounter}
          <BtnDeleteAll onClick={btnDeleteAllTasks}>Delete all</BtnDeleteAll>
        </TotalTasks>
      </TasksContainer>
    </div>
  );
}
Tasks.propTypes = {
  taskCounter: PropTypes.number.isRequired,
  btnDeleteAllTasks: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  deletebtn: PropTypes.func.isRequired,
  messageCreateTask: PropTypes.func.isRequired,
};
