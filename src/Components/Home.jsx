import React, { Component } from 'react';
import Nav from './Nav';
import axios from 'axios';

class Home extends Component {

    constructor(){
        super()
        this.state = {
            products : [],
        }
    }
    componentDidMount(){
        this.getProducts();
    }

    getProducts(){
        axios.get('https://dev.hishabee.business/api/customer/online-shop/products?shop_id=18')
            .then((response)=>{
                this.setState({products:response.data.data});
            })
            .catch((e)=>{
                console.log(e);
            })
    }
    
    showAlert = (product) => {
        console.log(product);
        //dataObject = JSON.parse(localStorage.getItem('carts'));
    }

    render() {


        const MyView = this.state.products.map((product)=>{

            return  <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="card product_item">
                    <div className="body">
                        <div className="cp_img">
                        <img src={product.image_url ? product.image_url : 'https://bootdey.com/img/Content/avatar/avatar6.png'} alt="Product" className="img-fluid" />
                            
                            <div className="hover">
                                <a href="javascript:void(0);" onClick={ () => this.showAlert({product}) } className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-shopping-cart"></i></a>
                            </div>
                        </div>
                        <div className="product_details">
                            <h5><a href="ec-product-detail.html">{product.name}</a></h5>
                            <ul className="product_price list-unstyled">
                                <li className="new_price">${product.selling_price}.00</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        })

        return (
            <div>
                <Nav count="0" />
                
                <div className="container">
                    <div className="row clearfix">
                        {MyView}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;