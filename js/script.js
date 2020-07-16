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
        <li
        ${task.done ? " style=\"text-decoration: line-through\"" : ""}
        >
            ${task.content}
        </li>`
        };
        document.querySelector(".js-tasksList").innerHTML = htmlTaskList;
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        
        form.addEventListener("submit", onFormSubmit);
    };

    init();

};