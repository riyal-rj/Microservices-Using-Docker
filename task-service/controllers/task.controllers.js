import { Task } from "../models/Tasks.js";
import { channel } from "../message.queue.js";
export const createTask = async (req, res) => {
    const { taskTitle, taskDescription, userId } = req.body;
    try {
        if (!taskTitle || !taskDescription || !userId) {
            return res.status(400).json(
                {
                    status: 'Failed',
                    message: 'All fields are required'
                }
            );
        }
        const newTask = new Task({
            taskTitle,
            taskDescription,
            userId
        });
        await newTask.save();
        const msg={taskId:newTask._id,taskTitle:newTask.taskTitle,userId:newTask.userId};
        if(!channel)
        {
            return res.status(503).json(
                {
                    status: 'Failed',
                    message: 'RabbitMQ Service Unavailable'
            });
        }
        channel.sendToQueue('taskQueue', Buffer.from(JSON.stringify(msg)));
        return res.status(201).json(
            {
                status: 'Success',
                message: 'Task created successfully',
                newTask
            });
    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                status: 'Failed',
                message: 'Something went wrong'
            }
        );
    }
}

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        return res.status(200).json(
            {
                status: 'Success',
                message: 'Tasks fetched successfully',
                tasks
            }
        );
    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                status: 'Failed',
                message: 'Something went wrong'
            }
        );
    }
}