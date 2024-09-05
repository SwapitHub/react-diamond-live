import React, { useContext } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'

export const WeddingReadyShip = () => {
    const {imgAssetsUrl} = useContext(UserContext)
    return (
        <>
            <section className="ready-ship-banner">
                <div className="container">
                    <div className="inner-banner-wrapped"                    
                    >
                         <div className='Bespoke-banner'>
                            <div className='desktop'>
                        <LazyLoadImage  src={`${imgAssetsUrl}/frontend/images/readyBands.jpg`} alt="wedding-ship" effect='blur' width="auto"  height="auto"  />
                            </div>
                            <div className='mobile'>

                        <LazyLoadImage   src={`${imgAssetsUrl}/frontend/images/band-mob.jpg`} alt="wedding-ship" effect='blur' width="auto"  height="auto"  />
                            </div>

                    </div>
                        <div className="banner-content">
                            <h2>Looking for a matching wedding band?</h2>
                            <p>Select your engagement ring, then discover the perfect wedding ring to match.</p>
                            <div className="btn-bar">
                                <Link to="/engagement-rings/start-with-a-setting?bridal-sets=true" className="btn-custom">Get Started</Link>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>
        </>
    )
}
