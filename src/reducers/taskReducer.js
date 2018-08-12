const taskReducer = (state = {
    lastToEdit : null,
    editIme : 0,
    editProcenjenoVreme: 0,
    editOpis: 0,
    number : 3,
    tasks : [
        {
            ime: "first",
            procenjenoVreme: 10,
            opis: "firstfirst"
        },
        {
            ime: "second",
            procenjenoVreme: 10,
            opis: "firstssfirst"
        },
        {
            ime: "third",
            procenjenoVreme: 10,
            opis: "firstaaafirst"
        },
    ]
}, action) => {
    switch (action.type) {
        case "ADD_NEW_TASK":
            state = {
                ...state,
                number: state.number + 1,
                tasks: [...state.tasks, action.payload]
            }
            break;
        case "DELETE_TASK":
            const beforeDeleted = state.tasks.slice(0, action.payload)
            const afterDeleted = state.tasks.slice(action.payload + 1, state.number)
            
            state = {
                ...state,
                number: state.number - 1,
                tasks: beforeDeleted.concat(afterDeleted)
            }
            break;
        case "LAST_TO_EDIT":
            state = {
                ...state,
                lastToEdit: action.payload,
                editIme: state.tasks[action.payload].ime,
                editProcenjenoVreme: state.tasks[action.payload].procenjenoVreme,
                editOpis: state.tasks[action.payload].opis
            }
            break;
        case "EDIT_TASK":
            const editedTasks = state.tasks;
            editedTasks[action.index] = action.payload
            state = {
                ...state,
                tasks: editedTasks
            }
            console.log(action.index, action.payload, editedTasks);
            break;
        case "EDIT_ON_CHANGE_IME":
            state = {
                ...state,
                editIme: action.payload
            }
            break;
        case "EDIT_ON_CHANGE_OPIS":
            state = {
                ...state,
                editOpis: action.payload
            }
            break;
        case "EDIT_ON_CHANGE_PROCENJENO_VREME":
            state = {
                ...state,
                editProcenjenoVreme: action.payload
            }
            break;
    }

    return state;
};

export default taskReducer;