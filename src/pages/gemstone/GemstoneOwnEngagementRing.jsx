import React, { useContext } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'

export const GemstoneOwnEngagementRing = () => {
    const {imgAssetsUrl} = useContext(UserContext)
    return (
        <section className="own-engagment gemstone">
            <div className="container">
                <div className="inner-own-eng">
                    <div className="heading-sec">
                        <h2 className="heading-text">
                            Preset Gemstone Rings
                        </h2>
                    </div>
                    <div className="ring-grid-sec">
                        <div className="grid-wrapper-bar">
                            <Link to="/gemstone/style/moissanite">
                                <div className="img-bar">
                                    <LazyLoadImage src={`${imgAssetsUrl}/frontend/images/Moissanite-Rings.jpg`} alt='moissanite' effect="blur"  width="auto"  height="auto"  />
                                </div>
                                <div className="contant-bar">
                                    <h5>Moissanite Rings</h5>
                                </div>
                            </Link>
                        </div>
                        <div className="grid-wrapper-bar">
                            <Link to="/gemstone/style/sapphire">
                                <div className="img-bar">
                                    <LazyLoadImage src={`${imgAssetsUrl}/frontend/images/Sapphire-Rings2.png`} alt='sapphire'effect='blur'  width="auto"  height="auto"  />
                                </div>
                                <div className="contant-bar">
                                    <h5>Sapphire Rings</h5>
                                </div>
                            </Link>
                        </div>
                        <div className="grid-wrapper-bar">
                            <Link to="/gemstone/style/morganite">
                                <div className="img-bar">
                                    <LazyLoadImage src={`${imgAssetsUrl}/frontend/images/Morganite-Rings.jpg`} alt="morganite" effect='blur' width="auto"  height="auto"  />
                                </div>
                                <div className="contant-bar">
                                    <h5>Morganite Rings</h5>
                                </div>
                            </Link>
                        </div>
                        <div className="grid-wrapper-bar">
                            <Link to="/gemstone/style/aquamarine">
                                <div className="img-bar">
                                    <LazyLoadImage src={`${imgAssetsUrl}/frontend/images/Aquamarine-Rings.jpg`} alt='aquamarine' effect='blur' width="auto"  height="auto"  />
                                </div>
                                <div className="contant-bar">
                                    <h5>Aquamarine Rings</h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}
