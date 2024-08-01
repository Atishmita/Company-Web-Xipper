import { Route, Routes } from "react-router-dom";
import Read from "./Components/SellerPage";
import VerifyUdyogAadhar from "./Components/VerifyUdyogAadhar";
import VerifyTAN from "./Components/verifyTAN";
import VerifyGSTINPAN from "./Components/VerifyGSTINPAN";
import VerifyEmail from "./Components/VerifyEmail";
import VerifyCIN from "./Components/VerifyCIN";
import Orders from "./Components/Orders";
import "./App.css";
import CompanyManagement from "./Components/CompanyManagement";
import RolesandPermissions from "./Components/RolesandPermissions";
import InviteMember from "./Components/InviteMember";
import MemberDetails from "./Components/MemberDetails";
import MemberDetailsEdit from "./Components/MemberDetailsEdit";
import CreateRole from "./Components/CreateRole";
import OrderSummary from "./Components/OrderSummary";
import OrderSummaryedit from "./Components/OrderSummaryedit";
import Analytics from "./Components/Analytics";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Read />} />
        <Route path="/VerifyUdyogAadhar" element={<VerifyUdyogAadhar />} />
        <Route path="/VerifyTAN" element={<VerifyTAN />} />
        <Route path="/VerifyGSTINPAN" element={<VerifyGSTINPAN />} />
        <Route path="/VerifyEmail" element={<VerifyEmail />} />
        <Route path="/VerifyCIN" element={<VerifyCIN />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/CompanyManagement" element={<CompanyManagement />} />
        <Route path="/RolesandPermissions" element={<RolesandPermissions />} />
        <Route path="/inviteMember" element={<InviteMember />} />
        <Route path="/memberdetails" element={<MemberDetails />} />
        <Route path="/memberdetailsEdit" element={<MemberDetailsEdit />} />
        <Route path="/createrole" element={<CreateRole />} />
        <Route path="/orderSummary" element={<OrderSummary />} />
        <Route path="/orderSummaryedit" element={<OrderSummaryedit />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
}

export default App;


