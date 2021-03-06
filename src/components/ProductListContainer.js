import React from 'react'
import {loadProducts} from '../actions/products'
import {connect} from 'react-redux'
import ProductsList from './ProductsList'

class ProductsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadProducts()
  }

  render() {
    return <ProductsList key={this.props.id} products={this.props.products} />
  }
}

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps, {loadProducts})(ProductsListContainer)