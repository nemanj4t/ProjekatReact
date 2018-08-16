const taskReducer = (state = {
    lastToEdit : null,
    editIme : 0,
    editVreme: 0,
    editProcenjenoVreme: "00:00:00",
    editSeconds: 0,
    editMinutes: 0,
    editHours: 0,
    editOpis : 0,
    number : 3,
    tasks : [
        {
            ime: "first",
            procenjenoVreme: "05:20:20",
            opis: "firstfirst",
            vreme: 19230,
        },
        {
            ime: "second",
            procenjenoVreme: "05:24:20",
            opis: "firstssfirst",
            vreme: 0,
        },
        {
            ime: "third",
            procenjenoVreme: "07:20:20",
            opis: "firstaaafirst",
            vreme: 0
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
            console.log(beforeDeleted.concat(afterDeleted));
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
                editVreme: state.tasks[action.payload].vreme,
                editIme: state.tasks[action.payload].ime,
                editProcenjenoVreme: state.tasks[action.payload].procenjenoVreme,
                editSeconds: Number.parseInt(state.tasks[action.payload].procenjenoVreme.slice(-2), 10),
                editMinutes: Number.parseInt(state.tasks[action.payload].procenjenoVreme.slice(3,5), 10),
                editHours: Number.parseInt(state.tasks[action.payload].procenjenoVreme.slice(0.2), 10),
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
        case "EDIT_ON_CHANGE_SECONDS":
            state = {
                ...state,
                editSeconds: action.payload
            }
            break;
        case "EDIT_ON_CHANGE_MINUTES":
            state = {
                ...state,
                editMinutes: action.payload
            }
            break;
        case "EDIT_ON_CHANGE_HOURS":
            state = {
                ...state,
                editHours: action.payload
            }
            console.log(state.editHours);
            break;
        case "STOPWATCH_INCREMENT":
            const ETasks = state.tasks;
            if(ETasks[action.payload] === undefined) break;
            ETasks[action.payload].vreme += 1;
            state = {
                ...state,
                tasks: ETasks
            }
            break;
        default:
            break;
    }

    return state;
};

export default taskReducer;