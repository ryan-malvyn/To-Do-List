# Personal To Do List App

This to do list app runs on vanilla javascript. It relies on 2 main functions:

1.newTask

    The newTask function relies on an eventListener, to see if the correct button is clicked. It also checks if the text input for the new task has not been filled. If :
        1. The task input is empty, 
            an alert will be prompted, saying ('Please input a new task!')

        2. The task input is filled,
            the task will be logged into the to do list.

2.deleteOrComplete

    The deleteOrComplete function checks if either the checkmark button or the cross button is clicked. If :
        1. The checkmark button is clicked,
            the task name will be given a ~~strike through~~ and will be given a 0.6 opacity.
        2. The cross button is clicked,
            the cross button's parent element will be removed.

To run the app, simply run index.html