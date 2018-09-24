import { takeEvery } from 'redux-saga/effects'

//workers
export function* editMsg() {
    yield alert('Task is edited!');
}

export function* deleteMsg() {
    yield alert('Task is deleted!');
}

export function* addMsg() {
    yield alert('Task is added!');
}

//watchers
export function* watchEdit() {
    yield takeEvery('EDIT_TASK', editMsg);
}

export function* watchDelete() {
    yield takeEvery('DELETE_TASK', deleteMsg);
}

export function* watchAdd() {
    yield takeEvery('ADD_NEW_TASK', addMsg);
}