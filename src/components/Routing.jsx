import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/home/Home";

import { ChooseDiamonds } from "./AllRings/ChooseDiamondPage/ChooseDiamonds";
import { DetailRingProduct } from "./AllRings/ChooseSettingPage/ChooseRingProduct/DetailRingProduct";
import ChooseRingSetting from "./AllRings/ChooseSettingPage/ChooseRingSetting";

import { EngagementRing } from "../pages/engagementRing/EngagementRing";
import { WeddingBands } from "../pages/weddingBands/WeddingBands";
import { ForgetPass } from "./forntFiles/ForgetPass";
import { LoginSignup } from "./forntFiles/LoginSignup";

import { ContactUs } from "../pages/contact/ContactUs";
import { Diamond } from "../pages/diamond/Diamond";
import { GemstoneBands } from "../pages/gemstone/GemstoneBands";
import AllWeddingBands from "./alllWeddingBands/AllWeddingBands";
import { WeddingBandsDetail } from "./alllWeddingBands/WeddingBandsDetail";
import { ChooseGemstones } from "./AllRings/ChooseGemstones/ChooseGemstones";
import { ChooseRingGemstone } from "./AllRings/ChooseGemstones/ChooseRingGemstone";
import { FinalGemstone } from "./AllRings/ChooseGemstones/FinalGemstone";
import { GemstonesDetail } from "./AllRings/ChooseGemstones/GemstonesDetail";
import { FinalRing } from "./AllRings/FinalRing";
import CustomizationForm from "./AllRings/reusable_components/CustomizationForm";
import { SelectDiamond } from "./AllRings/SelectDiamond";
import { CartPage } from "./forntFiles/CartPage";
import { CheckOutPage } from "./forntFiles/checkOut/CheckOutPage";
import { MyAccountDashboard } from "./forntFiles/dashboard/MyAccountDashboard";
import { Help } from "./forntFiles/Help";
import { OrderHistory } from "./forntFiles/OrderHistory";
import { PaymentForm } from "./forntFiles/PaymentForm";
import { ReviewConfirm } from "./forntFiles/ReviewConfirm";
import { SearchPage } from "./forntFiles/SearchPage";
import { SuccessPayment } from "./forntFiles/SuccessPayment";
import { WishList } from "./forntFiles/WishList";
import { PagesNotFound } from "./PagesNotFound";
import RingSizer from "./AllRings/reusable_components/RingSizer";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="*" element={<PagesNotFound />} />

      <Route
        path="/engagement-rings/start-with-a-setting"
        element={<ChooseRingSetting />}
      />
      <Route
        path="/engagement-rings/start-with-bridal-set"
        element={<ChooseRingSetting />}
      />
      <Route
        path="/gemstone/start-with-a-setting"
        element={<ChooseRingSetting />}
      />

      <Route
        path="/engagement-rings/shape/:menuShapeName"
        element={<ChooseRingSetting />}
      />
      <Route
        path="/engagement-rings/style/:menuShopStyle"
        element={<ChooseRingSetting />}
      />
      <Route
        path="/engagement-rings/metal/:menuMetal"
        element={<ChooseRingSetting />}
      />
      <Route
        path="/engagement-rings/:trellisRing"
        element={<ChooseRingSetting />}
      />

      <Route
        path="/wedding-band/:bands/:weddingBands"
        element={<AllWeddingBands />}
      />
      <Route path="/detail-wedding-band" element={<WeddingBandsDetail />} />
      <Route
        path="/detail-wedding-band/:productSlug"
        element={<WeddingBandsDetail />}
      />
      <Route
        path="/diamond/shape/:menuShapeName"
        element={<ChooseDiamonds />}
      />
      <Route
        path="engagement-rings/start-with-a-diamond"
        element={<ChooseDiamonds />}
      />
      <Route
        path="engagement-rings/start-with-a-diamond/:diamond_original"
        element={<ChooseDiamonds />}
      />
      <Route
        path="engagement-rings/start-with-a-diamond/:productSlug/:diamond_original"
        element={<ChooseDiamonds />}
      />
      <Route
        path="/diamonds/color-diamonds/start-with-a-diamond"
        element={<ChooseDiamonds />}
      />
      <Route path="/:slug/:slug/lab_grown" element={<ChooseDiamonds />} />
      <Route path="/diamonds" element={<ChooseDiamonds />} />
      <Route path="/diamond/shape" element={<ChooseDiamonds />} />
      <Route
        path="/engagement-rings/start-with-a-diamond/:slug"
        element={<ChooseDiamonds />}
      />

      <Route
        path="gemstone/start-with-a-gemstone"
        element={<ChooseGemstones />}
      ></Route>
      <Route path="/:gemstones/:slug" element={<ChooseGemstones />}></Route>

      <Route
        path="/gemstone/shape/:gemShape"
        element={<ChooseGemstones />}
      ></Route>
      <Route
        path="/gemstone/color/:gemColor"
        element={<ChooseGemstones />}
      ></Route>
      <Route
        path="/gemstone/style/:gemStyle"
        element={<ChooseGemstones />}
      ></Route>

      <Route path="gemstones" element={<ChooseGemstones />}></Route>
      <Route
        path="gemstone/gemstone-shop-all"
        element={<ChooseGemstones />}
      ></Route>
      <Route
        path="/engagement-ring/:productSlug"
        element={<DetailRingProduct />}
      />

      <Route path="/gemstones-detail" element={<GemstonesDetail />}></Route>

      <Route path="/:name" element={<ContactUs />} />
      <Route path="/wishlist" element={<WishList />}></Route>
      <Route path="/engagement-rings" element={<EngagementRing />}></Route>
      <Route path="/wedding-band" element={<WeddingBands />}></Route>
      <Route path="/diamond" element={<Diamond />}></Route>
      <Route path="/gemstone" element={<GemstoneBands />}></Route>
      <Route path="/login" element={<LoginSignup />}></Route>
      <Route path="/password_reset" element={<ForgetPass />}></Route>
      <Route path="/check_out" element={<CheckOutPage />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/help" element={<Help />}></Route>
      <Route path="/final_ring" element={<FinalRing />}></Route>
      <Route path="/final_ring/:slug" element={<FinalRing />}></Route>

      <Route path="/view_diamond" element={<SelectDiamond />}></Route>
      <Route
        path="/view_diamond/:productSlug"
        element={<SelectDiamond />}
      ></Route>
      <Route path="/accounts" element={<MyAccountDashboard />}></Route>
      <Route path="/orders-history" element={<OrderHistory />}></Route>
      <Route
        path="detail-ring-product-gemstone/:productSlug"
        element={<ChooseRingGemstone />}
      />
      <Route path="/final_ring_gemstone" element={<FinalGemstone />}></Route>
      <Route
        path="/final_ring_gemstone/:slug"
        element={<FinalGemstone />}
      ></Route>

      <Route path="/search" element={<SearchPage />}></Route>
      <Route path="/payment/:addressId?" element={<PaymentForm />} />
      <Route path="/confirm" element={<ReviewConfirm />} />
      <Route path="/success/:order_id" element={<SuccessPayment />} />
      <Route path="/custom-concierge" element={<CustomizationForm />} />
      <Route path="/request-ring-sizer" element={<RingSizer />} />
    </Routes>
  );
};
