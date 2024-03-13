import { TodoList } from '@/components';
import { AddTodo } from '@/components/forms';

export const TodosPage = () => {
  return (
    <section>
      <div className='flex flex-col gap-4'>
        <AddTodo />
        <TodoList />
      </div>
    </section>
  );
};
