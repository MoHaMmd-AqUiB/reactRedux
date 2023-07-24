import axios from 'axios';

export function fetchItems() {
  return axios.get(' http://localhost:8080/cart')
}
// Making a POST request in Axios requires two parameters: the URI of the service endpoint and an object that contains the properties you wish to send to the server.
export function addItems(item) {
  return axios.post( ' http://localhost:8080/cart',item)
}
export function deleteItem(id) {
  return axios.delete(`http://localhost:8080/cart/${id}`)
}

export function updateItem(id,itemUpdate) {
  return axios.patch(`http://localhost:8080/cart/${id}`,itemUpdate)
}
