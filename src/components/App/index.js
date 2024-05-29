import AddTaskForm from "../AddTaskForm";
import TaskList from "../TaskList";
import { AppContainer, AppHeader, HeaderTitle } from "./styles";

const App = () => {
  return (
    <>
      <AppContainer>
        <AppHeader>
          <HeaderTitle>★ MAGIC: THE GATHERING ★</HeaderTitle>
          <AddTaskForm />
          <TaskList />
        </AppHeader>
      </AppContainer>
    </>
  );
}

export default App;
