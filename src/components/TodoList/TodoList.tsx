import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';
import { UpdateTodoArgs } from '../../types/UpdateTodoArgs';

interface Props {
  todos: Todo[];
  deleteTodo: (todoId: number) => void;
  tempTodo: Todo | null;
  toggleTodoStatus:(
    todoId: number,
    args: UpdateTodoArgs
  ) => void;
  updatingTodosId: number[];
  updateTodoTitle: (todoId: number, args: UpdateTodoArgs) => void;
}

export const TodoList: React.FC<Props> = ({
  todos,
  deleteTodo,
  tempTodo,
  toggleTodoStatus,
  updatingTodosId,
  updateTodoTitle,

}) => {
  return (
    <section className="todoapp__main">
      <TransitionGroup>
        {todos.map(todo => (
          <CSSTransition
            key={todo.id}
            timeout={300}
            classNames="item"
          >
            <TodoItem
              todo={todo}
              deleteTodo={deleteTodo}
              key={todo.id}
              toggleTodoStatus={toggleTodoStatus}
              updatingTodosId={updatingTodosId}
              updateTodoTitle={updateTodoTitle}
            />
          </CSSTransition>
        ))}

        {tempTodo && (
          <CSSTransition
            key={0}
            timeout={300}
            classNames="temp-item"
          >
            <TodoItem
              todo={tempTodo}
              deleteTodo={deleteTodo}
              key={tempTodo.id}
              toggleTodoStatus={toggleTodoStatus}
              updatingTodosId={[tempTodo.id]}
              updateTodoTitle={updateTodoTitle}
            />
          </CSSTransition>
        )}
      </TransitionGroup>
    </section>
  );
};
