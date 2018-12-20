import request from '../util/request';

const dealy = (millisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });
};

export default {
  namespace: 'puzzlecards',
  state: {
    data: [],
    counter: 0,
  },
  effects:{
    *queryInitCards(_,sagaEffects) {
      const {call,put} = sagaEffects;
      //const endPointURI = 'http://114.116.89.193:8999/test/cardList';
      const endPointURI='/dev/random_joke';

      const puzzle = yield call(request,endPointURI);
      yield put({type:'addNewCard',payload:puzzle});

      yield call(dealy,3000);

      const puzzl2 = yield call(request,endPointURI);
      yield put({type:'addNewCard',payload:puzzl2});
    }
  },
  reducers: {
    addNewCard(state, { payload: newCard }) {
      const nextCounter = state.counter + 1;
      const newCardWithId = { ...newCard, id: nextCounter };
      const nextData = state.data.concat(newCardWithId);
      return {
        data: nextData,
        counter: nextCounter,
      };
    }
  },
};