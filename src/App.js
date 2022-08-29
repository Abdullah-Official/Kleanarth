// * Imported Libraries
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

// * Imported Components
import { Container } from "react-bootstrap";

// * Imported Pages
import BuyerPage from "./Pages/buyer/BuyerPage";
import BuyerAdmin from "./Pages/Admin/BuyerAdmin";
import ProducerAdmin from "./Pages/Admin/ProducerAdmin";
import CollectorAdmin from "./Pages/Admin/CollectorAdmin";
import BuyerOrder from "./Pages/Admin/BuyerOrder";
import ProducerOrder from "./Pages/Admin/ProducerOrder";
import BuyerRating from "./Pages/Admin/BuyerRating";
import ProducerRating from "./Pages/Admin/ProducerRating";
import CollectorRating from "./Pages/Admin/CollectorRating";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import AvailableProductsBuyer from "./Pages/buyer/AvailableProductsBuyer";
import RegisterPage from "./Pages/RegisterPage";
import CheckOutPlaceOrderBuyer from "./Pages/buyer/CheckOutPlaceOrderBuyer";
import PaymentBuyerToAdmin from "./Pages/Admin/PaymentBuyerToAdmin";
import CollectorInfoToBuyer from "./Pages/buyer/CollectorInfoToBuyer";
import CollectorInfoToProducer from "./Pages/Producer/CollectorInfoToProducer";
import Collector from "./Pages/Collector/Collector";
import ToDoListCollector from "./Pages/Collector/ToDoListCollector";
import OrderCollector from "./Pages/Collector/OrderCollector";
import ShowOrderCollector from "./Pages/Collector/ShowOrderCollector";
import LocationCollector from "./Pages/Collector/LocationCollector";
import IncentiveCollector from "./Pages/Collector/IncentiveCollector";
import ScheduleCollector from "./Pages/Collector/ScheduleCollector";
import ProducerHome from "./Pages/Producer/ProducerHome";
import ProducerOrderPage from "./Pages/Producer/ProducerOrderPage";
import ProducerPreviousOrder from "./Pages/Producer/ProducerPreviousOrder";
import ProducerInprogressOrder from "./Pages/Producer/ProducerInprogressOrder";
import IncentiveProducer from "./Pages/Producer/IncentiveProducer";
import ProducerIncentive from "./Pages/Admin/ProducerIncentive";
import CollectorIncentive from "./Pages/Admin/CollectorIncentive";
import ProducerPayment from "./Pages/Producer/ProducerPayment";
import BuyerPayment from "./Pages/buyer/BuyerPayment";
import PaymentByBuyer from "./Pages/Admin/PaymentByBuyer";
import PaymentByProducer from "./Pages/Admin/PaymentByProducer";
import PickUpScheduleProducer from "./Pages/Producer/PickUpScheduleProducer";
import DeliverScheduleBuyer from "./Pages/buyer/DeliverScheduleBuyer";
import RatingProducer from "./Pages/Producer/RatingProducer";
import RatingBuyer from "./Pages/buyer/RatingBuyer";
import AdminHome from "./Pages/Admin/AdminHome";
import ProducersListAdmin from "./Pages/Admin/ProducersListAdmin";
import BuyersListAdmin from "./Pages/Admin/BuyersListAdmin";
import CollectorsListAdmin from "./Pages/Admin/CollectorsListAdmin";
import NewOrdersAdmin from "./Pages/Admin/NewOrdersAdmin";
import InprogressOrdersAdmin from "./Pages/Admin/InprogressOrdersAdmin";
import CompletedOrdersAdmin from "./Pages/Admin/CompletedOrdersAdmin";
import ProducerPaymentAdmin from "./Pages/Admin/ProducerPaymentAdmin";
import BuyerPaymentAdmin from "./Pages/Admin/BuyerPaymentAdmin";
import ProducerIncentivesAdmin from "./Pages/Admin/ProducerIncentivesAdmin";
import CollectorIncentivesAdmin from "./Pages/Admin/CollectorIncentivesAdmin";
import CollectorRatingAdmin from "./Pages/Admin/CollectorRatingAdmin";
import ProducerRatingAdmin from "./Pages/Admin/ProducerRatingAdmin";
import BuyerRatingAdmin from "./Pages/Admin/BuyerRatingAdmin";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.user);
  console.log(token, " TOken from reducer");
  // let token = true
  return (
    <>
      <Router>
        <Container>
          <Routes>
            {!token ? (
              <>
                <Route path="/login" element={<LoginPage />} exact />
                <Route path="/register" element={<RegisterPage />} exact />

                <Route path="/" element={<HomePage />} exact />
                <Route path="*" element={<HomePage />} />
              </>
            ) : user?.UserType === "collector" ? (
              <>
                {/* Collector  */}
                <Route path="*" element={<Collector />} />
                <Route path="/collector" element={<Collector />} exact />
                <Route
                  path="/todolistcollector"
                  element={<ToDoListCollector />}
                  exact
                />
                <Route
                  path="/orderCollector"
                  element={<OrderCollector />}
                  exact
                />
                <Route
                  path="/ordershowcollector"
                  element={<ShowOrderCollector />}
                />
                <Route
                  path="/livelocationcollector"
                  element={<LocationCollector />}
                />
                <Route
                  path="/incentivecollector"
                  element={<IncentiveCollector />}
                />
                <Route
                  path="/schedulecollector"
                  element={<ScheduleCollector />}
                  exact
                />
              </>
            ) : user?.UserType === "producer" ? (
              <>
                {/* Producer  */}
                <Route path="*" element={<ProducerHome />} />
                <Route path="/producer" element={<ProducerHome />} exact />
                <Route
                  path="/producerPreviousOrder"
                  element={<ProducerPreviousOrder />}
                  exact
                />
                <Route
                  path="/producerInprogressOrder"
                  element={<ProducerInprogressOrder />}
                  exact
                />
                <Route
                  path="/producerOrderPage"
                  element={<ProducerOrderPage />}
                  exact
                />
                <Route
                  path="/producerPayment"
                  element={<ProducerPayment />}
                  exact
                />
                <Route
                  path="/incentiveProducer"
                  element={<IncentiveProducer />}
                  exact
                />
                <Route
                  path="/pickUpScheduleProducer"
                  element={<PickUpScheduleProducer />}
                  exact
                />
                <Route
                  path="/collectorInfoToProducer"
                  element={<CollectorInfoToProducer />}
                  exact
                />
                <Route
                  path="/ratingProducer"
                  element={<RatingProducer />}
                  exact
                />
              </>
            ) : user?.UserType === "buyer" ? (
              <>
                {/* Buyer  */}
                <Route path="*" element={<BuyerPage />} />
                <Route path="/buyer" element={<BuyerPage />} exact />
                <Route
                  path="/availableproducts"
                  element={<AvailableProductsBuyer />}
                  exact
                />
                <Route path="/buyerPayment" element={<BuyerPayment />} exact />
                <Route
                  path="/checkOutPlaceOrder"
                  element={<CheckOutPlaceOrderBuyer />}
                  exact
                />
                <Route
                  path="/collectorInfoToBuyer"
                  element={<CollectorInfoToBuyer />}
                  exact
                />
                <Route
                  path="/deliverScheduleBuyer"
                  element={<DeliverScheduleBuyer />}
                  exact
                />
                <Route path="/ratingBuyer" element={<RatingBuyer />} exact />
              </>
            ) : (
              <>
                {/* Admin  */}

                <Route path="*" element={<AdminHome />} />
                <Route path="/buyerAdmin" element={<BuyerAdmin />} exact />
                <Route
                  path="/producerAdmin"
                  element={<ProducerAdmin />}
                  exact
                />
                <Route
                  path="/collectorAdmin"
                  element={<CollectorAdmin />}
                  exact
                />
                <Route path="/buyerOrder" element={<BuyerOrder />} exact />
                <Route
                  path="/producerOrder"
                  element={<ProducerOrder />}
                  exact
                />
                <Route path="/buyerRating" element={<BuyerRating />} exact />
                <Route
                  path="/producerRating"
                  element={<ProducerRating />}
                  exact
                />
                <Route
                  path="/collectorRating"
                  element={<CollectorRating />}
                  exact
                />

                <Route
                  path="/checkOutPlaceOrder"
                  element={<CheckOutPlaceOrderBuyer />}
                  exact
                />
                <Route
                  path="/paymentBuyerToAdmin"
                  element={<PaymentBuyerToAdmin />}
                  exact
                />

                <Route
                  path="/producerIncentive"
                  element={<ProducerIncentive />}
                  exact
                />
                <Route
                  path="/collectorIncentive"
                  element={<CollectorIncentive />}
                  exact
                />

                <Route
                  path="/paymentByBuyer"
                  element={<PaymentByBuyer />}
                  exact
                />
                <Route
                  path="/paymentByProducer"
                  element={<PaymentByProducer />}
                  exact
                />

                <Route path="/adminHome" element={<AdminHome />} exact />
                <Route
                  path="/producersList"
                  element={<ProducersListAdmin />}
                  exact
                />
                <Route path="/buyersList" element={<BuyersListAdmin />} exact />
                <Route
                  path="/collectorsList"
                  element={<CollectorsListAdmin />}
                  exact
                />

                <Route
                  path="/newOrdersAdmin"
                  element={<NewOrdersAdmin />}
                  exact
                />
                <Route
                  path="/inprogressOrdersAdmin"
                  element={<InprogressOrdersAdmin />}
                  exact
                />
                <Route
                  path="/completedOrdersAdmin"
                  element={<CompletedOrdersAdmin />}
                  exact
                />
                <Route
                  path="/producerPaymentAdmin"
                  element={<ProducerPaymentAdmin />}
                  exact
                />
                <Route
                  path="/buyerPaymentAdmin"
                  element={<BuyerPaymentAdmin />}
                  exact
                />
                <Route
                  path="/producerIncentivesAdmin"
                  element={<ProducerIncentivesAdmin />}
                  exact
                />
                <Route
                  path="/collectorIncentivesAdmin"
                  element={<CollectorIncentivesAdmin />}
                  exact
                />
                <Route
                  path="/collectorRatingAdmin"
                  element={<CollectorRatingAdmin />}
                  exact
                />
                <Route
                  path="/producerRatingAdmin"
                  element={<ProducerRatingAdmin />}
                  exact
                />
                <Route
                  path="/buyerRatingAdmin"
                  element={<BuyerRatingAdmin />}
                  exact
                />
              </>
            )}
          </Routes>
        </Container>
      </Router>
    </>
  );
};

export default App;
