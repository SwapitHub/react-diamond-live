import React, { useContext } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'

export const RingExclusive = () => {
    const {imgAssetsUrl} = useContext(UserContext)
    return (
        <section className="own-engagment own-pd-control">
            <div className="container">
                <div className="popular-engagment">
                    <div className="heading-sec">
                        <h2 className="heading-text">
                        Shop Engagement Rings By Style 
                        </h2>
                    </div>
                    <div className="inner-polular-eng">
                        <div className="popular-grid-wrapper">
                            <Link to="/engagement-rings/metal/White">
                                <div className="imgg-sec">
                                    <LazyLoadImage width="auto"  height="auto"   src={`${imgAssetsUrl}/frontend/images/White-gold-ring.png`} alt="white-rings" effect='blur'/>
                                </div>
                                <div className="text-con">
                                    <p>White Gold Rings</p>
                                </div>
                            </Link>
                        </div>
                        <div className="popular-grid-wrapper">
                            <Link to="/engagement-rings/metal/Yellow">
                                <div className="imgg-sec">
                                    <LazyLoadImage width="auto"  height="auto"   src={`${imgAssetsUrl}/frontend/images/Yellow-gold.png`} alt="yellow-rings" effect='blur'/>
                                </div>
                                <div className="text-con">
                                    <p>Yellow Gold Rings</p>
                                </div>
                            </Link>
                        </div>
                        <div className="popular-grid-wrapper">
                            <Link to="/engagement-rings/metal/Pink">
                                <div className="imgg-sec">
                                    <LazyLoadImage width="auto"  height="auto"   src={`${imgAssetsUrl}/frontend/images/Rose-gold.png`} alt="rose-rings" effect='blur'/>
                                </div>
                                <div className="text-con">
                                    <p>Rose Gold Rings</p>
                                </div>
                            </Link>
                        </div>
                        <div className="popular-grid-wrapper">
                            <Link to="/engagement-rings/metal/Platinum">
                                <div className="imgg-sec">
                                    <LazyLoadImage width="auto"  height="auto"   src={`${imgAssetsUrl}/frontend/images/platinumring.png`} alt="platinum-rings" effect='blur'/>
                                </div>
                                <div className="text-con">
                                    <p>Platinum Rings</p>
                                </div>
                            </Link>
                        </div>
                        <div className="popular-grid-wrapper">
                            <Link to="/engagement-rings/start-with-a-setting?bridal-sets=true">
                                <div className="imgg-sec">
                                    <LazyLoadImage width="auto"  height="auto"   src={`${imgAssetsUrl}/frontend/images/Bridal-set-ring.png`} alt="bridal-rings" effect='blur'/>
                                </div>
                                <div className="text-con">
                                    <p>Bridal Set Ring</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
