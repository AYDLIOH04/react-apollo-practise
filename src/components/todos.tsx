import { Alert, AlertDescription, AlertTitle, Skeleton } from './ui';
import { AlertCircle, X } from 'lucide-react';
import { useMutation, useQuery } from '@apollo/client';
import { ALL_TODO, REMOVE_TODO, UPDATE_TODO } from '@/apollo/todos';
import { TodoType } from '@/types';
import { Checkbox } from './ui/checkbox';

export const TodoList = () => {
  const { loading, error, data } = useQuery(ALL_TODO);
  const [updateTodo, { error: updateError }] = useMutation(UPDATE_TODO);
  const [removeTodo, { error: removeError }] = useMutation(REMOVE_TODO, {
    update: (cache, { data: { removeTodo } }) => {
      cache.modify({
        fields: {
          allTodos: (currentTodos = []) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return currentTodos.filter((todo: any) => todo.__ref !== `Todo:${removeTodo.id}`);
          }
        },
      });
    },
  });

  if (loading) return <TodoListSkeleton />;

  if (error || updateError || removeError)
    return (
      <TodoListError
        message={
          error?.message || updateError?.message || removeError?.message || ''
        }
      />
    );

  return (
    <ul className="flex flex-col gap-4">
      {data.todos.map((todo: TodoType) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={updateTodo}
          onDelete={removeTodo}
        />
      ))}
    </ul>
  );
};

const TodoItem = ({
  todo: { id, title, completed },
  onToggle,
  onDelete,
}: {
  todo: TodoType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onToggle: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onDelete: any;
}) => {
  return (
    <li className="flex flex-raw gap-4 items-center">
      <span>{id}.</span>
      <Checkbox
        checked={completed}
        onCheckedChange={() =>
          onToggle({ variables: { id, completed: !completed } })
        }
      />
      <p>{title}</p>
      <button onClick={() => onDelete({ variables: { id } })}>
        <X className="text-destructive" />
      </button>
    </li>
  );
};

const TodoListError = ({ message }: { message: string }) => (
  <Alert variant="destructive">
    <AlertCircle className="h-5 w-5" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>{message}</AlertDescription>
  </Alert>
);

const TodoListSkeleton = () => (
  <div className="flex flex-col gap-4">
    <Skeleton className="w-[300px] h-[20px] rounded-full" />
    <Skeleton className="w-[270px] h-[20px] rounded-full" />
    <Skeleton className="w-[310px] h-[20px] rounded-full" />
    <Skeleton className="w-[320px] h-[20px] rounded-full" />
  </div>
);
