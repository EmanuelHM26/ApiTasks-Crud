import {useForm} from 'react-hook-form'
import { useTasks } from '../context/TasksContext';
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react';
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

function TaskFormPage() {

  const {register, handleSubmit, setValue} = useForm();
  const { createTask, getTask, updateTask } = useTasks()
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    async function loadTask() {
      if(params.id) {
        const task = await getTask(params.id)
        setValue('title', task.title)
        setValue('description', task.description)
      }
      
    }
    loadTask()
  }, [])

  const onSubmit = handleSubmit((data) => {

    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format()
    }


    if(params.id) {
      updateTask(params.id, dataValid);
    }else{
      createTask(dataValid);
    }
    navigate('/tasks')
  });

  return (
    <div className='bg-zinc-800 w-full max-w-md p-10 rounded-md mx-auto my-25'>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" placeholder="Title" 
          {...register('title', {required: true})}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          autoFocus
        />
        <label htmlFor="title">Description</label>

        <textarea rows="3" name="description" placeholder="Description"
          {...register('description', {required: true})}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'


        ></textarea>
        <label htmlFor="date">Date</label>
        <input type="date" name="date" {...register('date')} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'/>

        <button type="submit"
            className="bg-blue-600 pt-2 pb-2 pr-15 pl-15 rounded-md mt-3 "

        >Add Task</button>
      </form>
    </div>
  )
}

export default TaskFormPage
