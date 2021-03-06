export function addNewTask(task) {
    return {
        type: "ADD_NEW_TASK",
        payload: task
    };
}

export function deleteTask(index) {
    return {
        type: "DELETE_TASK",
        payload: index
    };
}

export function editTask(task, index) {
    return {
       type: "EDIT_TASK",
       payload: task,
       index: index
    };
}

export function findLastToEdit(index) {
    return {
        type: "LAST_TO_EDIT",
        payload: index
    };
}

export function stopwatchIncrement(index) {
    return {
        type: "STOPWATCH_INCREMENT",
        payload: index
    };
}

export function editOnChangeIme(event) {
    return {
        type: "EDIT_ON_CHANGE_IME",
        payload: event.target.value
    };
}

export function editOnChangeOpis(event) {
    return {
        type: "EDIT_ON_CHANGE_OPIS",
        payload: event.target.value
    };
}

export function editOnChangeProcenjenoVreme(event) {
    return {
        type: "EDIT_ON_CHANGE_PROCENJENO_VREME",
        payload: event.target.value
    };
}

export function editOnChangeSeconds(event) {
    return {
        type: "EDIT_ON_CHANGE_SECONDS",
        payload: event.target.value
    };
}

export function editOnChangeMinutes(event) {
    return {
        type: "EDIT_ON_CHANGE_MINUTES",
        payload: event.target.value
    };
}

export function editOnChangeHours(event) {
    return {
        type: "EDIT_ON_CHANGE_HOURS",
        payload: event.target.value
    };
}

export function editOnChangePausePlay(index) {
    return {
        type: "EDIT_ON_CHANGE_PAUSE_PLAY",
        payload: index
    };
}

