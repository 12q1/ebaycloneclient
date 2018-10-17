import React from 'react'
import {connect} from 'react-redux'
import {createProduct} from '../actions/products'
import ProductForm from './ProductForm'

class CreateProductFormContainer extends React.Component {
  state = {
    title: '',
    description: '',
    price: '',
    sellerMail: '',
    sellerPhone: ''
  }

  onChange = (product) => {
    this.setState({
      [product.target.name]: product.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
      title: '',
      description: '',
      price: '',
      sellerMail: '',
      sellerPhone: ''
    })
    this.props.createProduct(this.state)
  }

  render() {
    console.table(this.state)
    return (<ProductForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, {createProduct})(CreateProductFormContainer)