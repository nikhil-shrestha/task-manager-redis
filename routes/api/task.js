const express = require('express');
const redis = require('redis');

const router = express.Router();

// Create Client
const client = redis.createClient();

client.on('connect', function() {
  console.log('Redis Server Connected...');
});

// @route   GET api/task
// @desc    Test Route
// @access  Public
router.get('/', async (req, res) => {
  console.log('Request GET API!!');
  var title = 'Task List';
  client.lrange('tasks', 0, -1, function(err, reply) {
    client.hgetall('call', function(err, call) {
      res.json({
        title: title,
        tasks: reply,
        call: call
      });
    });
  });
});

// @route   Post api/task
// @desc    Post Task
// @access  Public
router.post('/add', async (req, res) => {
  const task = req.body.task;

  client.rpush('tasks', task, function(err, reply) {
    if (err) {
      console.log(err);
      res.status(500).send('Server Error');
    }
    console.log('Task Added...');
    res.json(task);
  });
});

// @route   Post api/task
// @desc    Post Task
// @access  Public
router.post('/delete', async (req, res) => {
  const tasksToDel = req.body.tasks;
  console.log('tasksToDel::', tasksToDel);

  client.lrange('tasks', 0, -1, function(err, tasks) {
    for (var i = 0; i < tasks.length; i++) {
      if (tasksToDel.indexOf(tasks[i]) > -1) {
        client.lrem('tasks', 0, tasks[i], function() {
          if (err) {
            console.log(err);
            res.status(500).send('Server Error');
          }
        });
      }
    }
    res.json({ message: 'Task Deleted...' });
  });
});

// @route   Post api/task
// @desc    Post Task
// @access  Public
router.post('/call/add', async (req, res) => {
  console.log('body::', req.body);
  var newCall = {
    name: req.body.name,
    company: req.body.company,
    phone: req.body.phone,
    time: req.body.time
  };

  client.hmset(
    'call',
    [
      'name',
      newCall.name,
      'company',
      newCall.company,
      'phone',
      newCall.phone,
      'time',
      newCall.time
    ],
    function(err, reply) {
      if (err) {
        console.log(err);
        res.status(500).send('Server Error');
      }
      console.log(reply);
      res.json(newCall);
    }
  );
});

module.exports = router;
