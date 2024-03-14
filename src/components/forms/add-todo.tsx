import { useState } from 'react';
import { Button, Input } from '../ui';
import { useMutation } from '@apollo/client';
import { ADD_TODO, ALL_TODO } from '@/apollo/todos';
import { AlertCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
} from '../ui/alert-dialog';
import { TodoType } from '@/types';

export const AddTodo = () => {
  const [open, setOpen] = useState(false);
  const [addTodo, { error }] = useMutation(ADD_TODO, {
    refetchQueries: [{ query: ALL_TODO }],
    update: (cache, { data: { newTodo } }) => {
      const { todos } = cache.readQuery({ query: ALL_TODO }) as {
        todos: TodoType[];
      };
      cache.writeQuery({
        query: ALL_TODO,
        data: { todos: [...todos, newTodo] },
      });
    },
  });
  const [title, setTitle] = useState('');

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title.trim().length) {
      addTodo({
        variables: {
          title,
          completed: false,
          userId: 123,
        },
      }).then(() => {
        setTitle('');
        setOpen(false);
      });
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button variant="outline">Create Todo</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Todo</DialogTitle>
            <DialogDescription>Add a new custom todo</DialogDescription>
          </DialogHeader>
          <form className="flex flex-col gap-4" onSubmit={onFormSubmit}>
            <Input
              placeholder="Todo title"
              className="placeholder:capitalize"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Button className="w-full">Create</Button>
          </form>
        </DialogContent>
      </Dialog>
      {error && <AddTodoError message={error.message} />}
    </>
  );
};

const AddTodoError = ({ message }: { message: string }) => {
  const [open, setOpen] = useState(Boolean(message));

  return (
    <div onClick={() => setOpen(false)}>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className="border-destructive text-destructive">
          <div className="flex flex-row items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDialogHeader>Error</AlertDialogHeader>
          </div>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
