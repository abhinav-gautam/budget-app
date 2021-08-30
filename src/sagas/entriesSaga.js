import { take, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { setEntries, deleteEntry, addEntry, editEntries } from '../redux/entriesSlice';

export function* getEntriesSaga() {
    yield take("entries/getEntries")
    const result = yield call(axios, "http://localhost:3001/entries")
    yield put(setEntries(result.data))
}

export function* deleteEntrySaga() {
    while (true) {
        const { payload } = yield take("entries/deleteEntries")
        yield call(deleteEntryDb, payload)
        yield put(deleteEntry(payload))
    }
}

export function* addEntrySaga() {
    yield takeLatest("entries/addEntry", addEntryFork)
}

export function* editEntrySaga() {
    yield takeLatest("entries/editEntry", editEntryFork)
}

function* editEntryFork({ payload }) {
    yield call(editEntryDb, payload)
    yield put(editEntries(payload))
}

async function editEntryDb(entry) {
    await axios.put(`http://localhost:3001/entries/${entry.id}`, entry)
}

async function deleteEntryDb(id) {
    await axios.delete(`http://localhost:3001/entries/${id}`)
}

function* addEntryFork({ payload }) {
    yield call(addEntryDb, payload)
    yield put(addEntry(payload))
}

async function addEntryDb(entry) {
    await axios.post(`http://localhost:3001/entries`, entry)
}