import request from 'superagent'

export const PRODUCTS_FETCHED = 'PRODUCTS_FETCHED'

const baseUrl = 'https://fathomless-mountain-26826.herokuapp.com'

const productsFetched = products => ({
  type: PRODUCTS_FETCHED,
  products
})

export const loadProducts = () => (dispatch, getState) => {
  // when the state already contains products, we don't fetch them again
  if (getState().products) return

  // a GET /products request
  request(`${baseUrl}/products`)
    .then(response => {
      // dispatch an PRODUCTS_FETCHED action that contains the products
      dispatch(productsFetched(response.body))
    })
    .catch(console.error)
}

//---Create Product---

export const PRODUCT_CREATE_SUCCESS = 'PRODUCT_CREATE_SUCCESS'

const productCreateSuccess = product => ({
  type: PRODUCT_CREATE_SUCCESS,
  product
})

export const createProduct = (data) => dispatch => {
  request
    .post(`${baseUrl}/products`)
    .send(data)
    .then(response => {
      dispatch(productCreateSuccess(response.body))
    })
    .catch(console.error)
}