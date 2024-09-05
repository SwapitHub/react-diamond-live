import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../App'

export const CartPageJewellery = () => {
  const {imgAssetsUrl} = useContext(UserContext)
  return (
    <section className="add-matching-wedding-band">
    <div className="container">
      <div
        className="loves-inner"
        style={{
          backgroundImage: `url(${imgAssetsUrl}/frontend/images/cartBanner.png)`,
        }}
      >
        <div className="love-left-image">
          <img
            className="mobile"
            src={`${imgAssetsUrl}/frontend/images/mobileCartBanner.png`}
            alt="mobileCartBanner"
width="auto"
height="auto"

          />
        </div>

        <div className="love-right-content">
          <h4>wedding jewellery</h4>
          <h3>Add a Matching Wedding Band</h3>
         

          <Link
            class="btn explore"
            to="/wedding-band"
          >
            Add a Matching Wedding Band
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}
