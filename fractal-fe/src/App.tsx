import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import { AppBar } from './components/AppBar/AppBar';
import { Home } from './views/Home';
import { NewPayment } from './views/NewPayment/NewPayment';
import { PaymentHistory } from './views/PaymentHistory/PaymentHistory';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/new-payment" index element={<NewPayment />} />
        <Route path="/payment-history" index element={<PaymentHistory />} />
      </Route>
    </Routes>
  );
}

export default App;

const Layout = () => {
  return (
    <main>
      <AppBar />
      <Outlet />
    </main>
  );
};
