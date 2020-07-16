{
    const taskArray = [
        {
            content: "pierwsze zadanie",
            done: true,
        },
        {
            content: "drugie zadanie",
            done: false,
        },
    ];

    const addNewTask = (newTaskContent) => {
        taskArray.push({
            content: newTaskContent,
        });
        render();
    };

    const removeTask = (index) => {
        taskArray.splice(index, 1);
        render();
    };

    const toggleTaskDone = (index) => {
        taskArray[index].done = !taskArray[index].done;
        render();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTaskInput").value.trim();
        if (newTaskContent === "") {
            return;
        };
        addNewTask(newTaskContent);
    };


    const render = () => {
        let htmlTaskList = "";
        for (const task of taskArray) {
            htmlTaskList += `
        <li class="list__item"
        ${task.done ? " style=\"text-decoration: line-through\"" : ""}
        >
        <button class="list__button list__button--done js-doneButton">
        </button>
        <p class="list__content">${task.content}<p>
        <button class="list__button list__button--remove js-removeButton">
        </button>    
        </li>`
        };
        document.querySelector(".js-tasksList").innerHTML = htmlTaskList;

        const removeButtons = document.querySelectorAll(".js-removeButton");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            })
        });

        const toggleDone = document.querySelectorAll(".js-doneButton");

        toggleDone.forEach((toggleDoneButton,index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();

};