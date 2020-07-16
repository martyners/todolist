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
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTaskInput").value.trim();
        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent);

    }


    const render = () => {
        let htmlTaskList = "";
        for (const task of taskArray) {
            htmlTaskList += `
        <li class="list__item"
        ${task.done ? " style=\"text-decoration: line-through\"" : ""}
        >
        ${task.content}
        <button class="list__button js-removeButton">Us
        </button>    
        </li> <hr>`
        };
        document.querySelector(".js-tasksList").innerHTML = htmlTaskList;

        const removeButtons = document.querySelectorAll(".js-removeButton");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            })
        });
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();

};