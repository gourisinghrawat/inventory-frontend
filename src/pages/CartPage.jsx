import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FrameComponent from "../components/FrameComponent";
import "./CartPage.css";

const CartPage = () => {
  const navigate = useNavigate();

  const onLogoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPersonIconClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="cart-page">
      <Navbar
        onLogoTextClick={onLogoTextClick}
        onPersonIconClick={onPersonIconClick}
      />
      <img className="blurbg-icon10" alt="" src="/blurbg.svg" />
      <FrameComponent />
    </div>
  );
};

export default CartPage;
