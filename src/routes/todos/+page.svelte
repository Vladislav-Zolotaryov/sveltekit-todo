<script>
    import TodoForm from '../../components/TodoForm.svelte';
    import Todo from '../../components/Todo.svelte';
    import { todos } from '../../stores/todos_store.js';
</script>

<main>
    <h1 class="text-3xl font-bold underline">Todo App</h1>
    <TodoForm />
    {#each $todos as todo}
        <Todo {todo} index={todo.id} />
    {/each}
</main>