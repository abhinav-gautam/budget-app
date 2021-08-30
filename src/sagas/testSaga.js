// import { delay, put, take, call, fork, takeEvery, cancelled, cancel, takeLatest } from 'redux-saga/effects';

// Delay Effect - Provides delay in ms
// export function* delayEffect() {
//     while (true) {
//         console.log("Starting a delay of 1000ms");
//         yield delay(1000)
//         console.log("Delay completed");
//     }
// }

// // Put Effect - It acts as dispatcher, it triggers action
// export function* putEffect() {
//     console.log("Put effect start");
//     yield delay(2000)
//     console.log("Triggering TEST_ACTION_1");
//     yield put({ type: "TEST_ACTION_1" })
// }

// // Take Effect - This will be triggered when a particular action is triggered
// export function* takeEffect() {
//     console.log("Wating for TEST_ACTION_1");
//     yield take("TEST_ACTION_1")
//     console.log("TEST_ACTION_1 is triggered");
// }

// // Call Effect - This calls a function either normal or generator
// export function* callEffect() {
//     console.log("Call effect start");
//     yield call(callFunction)
// }

// // Call function
// function callFunction() {
//     console.log("Call effect called me");
// }

// Fork Effect - It start a separate thread for every fork call. 
// All fork calls will run in parallel
// export function* forkEffect() {
//     yield take("FORK_EFFECT")
//     while (true) {
//         yield delay(2000)
//         yield fork(forkFunction)
//         yield fork(forkFunction)
//         yield fork(forkFunction)
//     }
// }
// function* forkFunction() {
//     console.log("Start of fork function");
//     yield delay(1000)
//     console.log("Fork function completed");
// }

// // Take Every Effect - Combination of take and fork. 
// // Fork a function when a particular action is triggered.
// function* takeEveryFunction({ payload }) {
//     console.log("Starting process for index ", payload);
//     yield delay(3000)
//     console.log("----Finished process for index ", payload);
// }
// export function* takeEveryEffect() {
//     yield takeEvery("TAKE_EVERY_EFFECT", takeEveryFunction)
// }
// export function* takeEveryTrigger() {
//     let index = 0
//     while (true) {
//         yield delay(500)
//         yield put({ type: "TAKE_EVERY_EFFECT", payload: index })
//         index++
//     }
// }

// // Cancel Effect - Used to cancel a fork. Comes with cancelled function, it returns whether 
// // fork is cancelled.
// function* inifiniteFunction() {
//     let index = 0
//     console.log("----String infinite loop");
//     while (true) {
//         try {
//             console.log("Inside infinite loop for index ", index);
//             yield delay(500)
//         } catch (err) {
//             console.log("Error:", err);
//         } finally {
//             console.log("Fork cancelled? ", yield cancelled());
//         }
//         index++
//     }
//     console.log("Ending inifinite loop");
// }
// export function* cancelEffect() {
//     const forkHandle = yield takeEvery("CANCEL_EFFECT", inifiniteFunction)
//     yield delay(10000)
//     yield cancel(forkHandle)
// }

// // Take Latest Effect - It cancels the previous fork and calls new for every new action
// export function* takeLatestEffect() {
//     yield takeLatest("TAKE_EVERY_EFFECT", inifiniteFunction)
// }
// export function* takeLatestTrigger() {
//     let index = 0
//     while (true) {
//         yield delay(5000)
//         yield put({ type: "TAKE_EVERY_EFFECT", payload: index })
//         index++
//     }
// }

// // This is used for demo. It triggers particular effect
// export function* sagaTrigger() {
//     yield put({ type: "CANCEL_EFFECT" })
// }