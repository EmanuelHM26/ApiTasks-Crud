import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest, deleteTaskRequest, getTaskRequest, updateTaskRequest } from "../api/tasks";
import { set } from "mongoose";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }

  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async (task) => {
    const res = await createTaskRequest(task);
    console.log(res);
  };

  const deleteTask = async (id) => {
    try {
      await deleteTaskRequest(id);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }

  const updateTask = async (id, task) => { 
    try {
      const res = await updateTaskRequest(id, task);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask, getTasks, deleteTask, getTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
}
