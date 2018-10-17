import React from 'react';

export default function ProductForm(props){

  return (
    <div>
    <form onSubmit={()=>props.onSubmit(this.product)}>
        <label>Your Product: </label><br/>
        <input type="submit" onChange={props.onChange} name="title"/><br/>
        <label>Product Price: </label><br/>
        <input type="text" onChange={props.onChange} name="date"/><br/>
        <label>Description: </label><br/>
        <input type="text" onChange={props.onChange} name="description"/><br/>
        <label>Email: </label><br/>
        <input type='text' onChange={props.onChange} name='email'/><br/>
        <label>Phone Number:</label><br/>
        <input type='text' onChange={props.onChange} name='Phone Number'/><br/>
      </form>

    </div>
  )
}
