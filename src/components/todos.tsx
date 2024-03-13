import { Alert, AlertDescription, AlertTitle, Skeleton } from './ui';
import { AlertCircle } from 'lucide-react';
import { useQuery } from '@apollo/client';
import { ALL_TODO } from '@/apollo/todos';
import { TodoType } from '@/types';

export const TodoList = () => {
  const { loading, error, data } = useQuery(ALL_TODO);

  if (loading) return <TodoListSkeleton />;

  if (error) return <TodoListError message={error.message} />;

  return (
    <ul className="flex flex-col gap-4">
      {data.todos.map((todo: TodoType) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

const TodoItem = ({ id, title, completed }: TodoType) => {
  return (
    <li className="flex">
      <div className="flex flex-row gap-4">
        <span>{id}.</span>
        <p>{title}</p>
      </div>
      <button>{completed}</button>
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
    <Skeleton className="w-[370px] h-[20px] rounded-full" />
    <Skeleton className="w-[410px] h-[20px] rounded-full" />
    <Skeleton className="w-[320px] h-[20px] rounded-full" />
  </div>
);
