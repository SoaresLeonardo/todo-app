import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { AiOutlineRocket } from 'react-icons/ai';
import { GlobalStyles } from '../assets/styles/globalStyles';
import { Container } from '../assets/styles/styles';
import { Message } from '../assets/styles/tasksContainer';
import { darkTheme, lightTheme } from '../assets/styles/theme';
import { Title, TodoContainer } from '../assets/styles/todoContainer';
import usePersistenState from '../utils/usePersistedState';
import Form from './form';
import Tasks from './tasks';
import Theme from './theme';
import Social from './social';

export default function TodoApp() {
  const [theme, setTheme] = usePersistenState('theme', lightTheme);
  const [input, setInput] = useState('');
  const [tasks, setTasks] = usePersistenState('saveTasks', []);
  const [taskCounter, setTaskCounter] = usePersistenState('taskCounters', 0);
  const deletebtn = (e, index) => {
    const deleteTask = [...tasks];
    deleteTask.splice(index, 1);
    setTasks(deleteTask);
    setTaskCounter(taskCounter - 1);
  };
  const btnDeleteAllTasks = () => {
    const deleteAllTasks = [...tasks];
    if (deleteAllTasks.length < 1) return;
    deleteAllTasks.splice(0, deleteAllTasks.length);
    setTasks(deleteAllTasks);
    setTaskCounter(0);
  };
  // initial message
  const messageCreateTask = (msg) => <Message>{msg}</Message>;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (tasks.indexOf(input) !== -1) return;
    if (!input) return;
    const createTasks = [...tasks];
    createTasks.push(input);
    setTasks(createTasks);
    setInput('');
    setTaskCounter(taskCounter + 1);
  };
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Container>
          <TodoContainer>
            <Theme themeToggler={themeToggler} theme={theme} />
            <Title>
              <AiOutlineRocket />
              todo
            </Title>
            <Form
              input={input}
              setInput={setInput}
              handleSubmit={handleSubmit}
            />

            <Tasks
              taskCounter={taskCounter}
              btnDeleteAllTasks={btnDeleteAllTasks}
              tasks={tasks}
              deletebtn={deletebtn}
              messageCreateTask={messageCreateTask}
            />
          </TodoContainer>
          <Social />
        </Container>
      </ThemeProvider>
    </div>
  );
}
