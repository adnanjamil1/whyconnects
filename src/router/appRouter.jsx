import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PreLoginTemplate from "../templates/preLoginTemplate";
import MainLayout from "../templates/mainLayout";
import LoginWithNum from "../components/authentication/login/loginWithNum";
import Calldailyreport from "../components/call details/dailyReport";
import Callhourlyreport from "../components/call details/hourlyReport";
import Calldetailreport from "../components/call details/detailReport";
import Smsdailyreport from "../components/sms details/dailyReport";
import Smsdetailreport from "../components/sms details/detailReport";
import Subscriber from "../components/subscriber/subscriber";
import Dashboard from "../components/dashboard";
import { useSelector } from "react-redux";



const MainRouter = () => {
    let isLoggedIn = useSelector((state) => state.token);
    // let isLoggedIn = false;
    if (isLoggedIn) {
        return (
            <Router>
                <Routes>
                    <Route path="/wiconnect-portal/*" element={
                        <MainLayout >
                            <Dashboard />
                        </MainLayout>
                    }
                    />
                    <Route path="/wiconnect-portal/dashboard/*" element={
                        <MainLayout >
                            <Dashboard />
                        </MainLayout>
                    }
                    />
                    <Route path="/wiconnect-portal/subscribers/*" element={
                        <MainLayout >
                            <Subscriber />
                        </MainLayout>
                    }
                    />

                    <Route path="/wiconnect-portal/call_daily_report/*" element={
                        <MainLayout >
                            <Calldailyreport />
                        </MainLayout>
                    }
                    />
                    <Route path="/wiconnect-portal/call_hourly_report/*" element={
                        <MainLayout >
                            <Callhourlyreport />
                        </MainLayout>
                    }
                    />
                    <Route path="/wiconnect-portal/call_detail_report/*" element={
                        <MainLayout >
                            <Calldetailreport />
                        </MainLayout>
                    }
                    />
                    <Route path="/wiconnect-portal/sms_daily_report/*" element={
                        <MainLayout >
                            <Smsdailyreport />
                        </MainLayout>
                    }
                    />
                    <Route path="/wiconnect-portal/sms_detail_report/*" element={
                        <MainLayout >
                            <Smsdetailreport />
                        </MainLayout>
                    }
                    />
                    <Route path="*"
                        element={<Navigate to={"/wiconnect-portal/"} replace />} />
                </Routes>
            </Router>)
    } else {
        return (
            <Router>
                <Routes>
                    <Route path="/wiconnect-portal/" element={
                        <PreLoginTemplate >
                            <LoginWithNum />
                        </PreLoginTemplate>
                    }
                    />
                    <Route path="*"
                        element={<Navigate to={"/wiconnect-portal/"} replace />} />
                </Routes>
            </Router>)
    }

}
export default MainRouter;




