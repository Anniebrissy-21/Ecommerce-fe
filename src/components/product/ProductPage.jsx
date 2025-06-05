import React from 'react'

const ProductPage = () => {
    return (
        <div>
            <section className='py-3'>
                <div className='container px-4 px-lg-5 my-5'>
                    <div className='row gx-4 gx-lg-5 align-items-center'>
                        <div className="col-md-6">
                            <img className='card-img-top mb-5 mb-md-0' src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." />
                        </div>
                        <div className='col-md-6'>
                            <div className="small mb-1"> SKU: BST-496</div>
                            <h1 className='display-5 fw-bolder'>Shop item template</h1>
                            <div className="fs-5 mb-5">
                                <span className='text-decoration-line-through'>$40.00</span>
                                <span>$40.00</span>
                            </div>
                            <p className='lead'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quis esse velit,
                                labore consequuntur nam ipsum animi, assumenda quo eum saepe veritatis doloribus maiores, vitae quam.
                                Veritatis consequuntur quibusdam officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi eveniet,
                                fugit neque quaerat aut sequi harum voluptates doloribus explicabo pariatur aspernatur necessitatibus.
                                Fugit sed sequi, animi aperiam odio vero eos.
                            </p>
                            <div className="d-flex">
                                <input type="num" className='form-control text-center me-3'
                                    id='inputQuantity' value='1' style={{ maxWidth: '3rem' }} />

                                <button className='btn btn-outline-dark flex-shrink-0' type='button'>
                                    <i className='bi-cart-fill me-1'></i>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>

                </div>


            </section>
        </div>
    )
}

export default ProductPage