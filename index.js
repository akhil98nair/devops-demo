const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [];

// Create a task

//create a sample curl request to test the API
// curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d '{"title": "Sample Task", "completed": false}'

app.post('/tasks', (req, res) => {
    const task = { id: tasks.length + 1, ...req.body };
    tasks.push(task);
    res.status(201).json(task);
});

// Read all tasks

//create a sample curl request to test the API
// curl -X GET http://localhost:3000/tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Read a single task by ID

//create a sample curl request to test the API
// curl -X GET http://localhost:3000/tasks/1
app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
});

// Update a task by ID

//create a sample curl request to test the API
//curl -X PUT http://localhost:3000/tasks/1 -H "Content-Type: application/json" -d '{"title": "Updated Task", "completed": true}'
app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ message: 'Task not found' });

    Object.assign(task, req.body);
    res.json(task);
});

// Delete a task by ID
//create a sample curl request to test the API
// curl -X DELETE http://localhost:3000/tasks/1
app.delete('/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) return res.status(404).json({ message: 'Task not found' });

    tasks.splice(taskIndex, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});