import secureLocalStorage from "react-secure-storage";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
import { put, takeEvery } from "redux-saga/effects";

const user_id = secureLocalStorage.getItem("formData");

function* getProducts() {
  let data = yield fetch(
    `http://ec2-3-18-62-57.us-east-2.compute.amazonaws.com/admin/api/v1/wishlist-items?user_id=${user_id}`
  );

  data = yield data.json();

  console.warn("action is called ", data);
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;
