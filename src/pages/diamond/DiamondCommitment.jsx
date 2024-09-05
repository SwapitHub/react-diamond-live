import React from 'react'
import { Link } from 'react-router-dom'

export const DiamondCommitment = () => {
    return (
        <>
            <section className="enviromental-sec wedding">
                <div className="container">
                    <div className="enviromental-inner">
                        <div className="heading-sec">
                            <h2 className="heading-text">
                                Beyond Conflict Free™ Diamonds
                            </h2>
                        </div>
                        <div className="contentwrapper">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book.</p>
                            <div className="btn-bar">
                                <Link to="/engagement-rings/start-with-a-diamond" className="btn-custom">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
