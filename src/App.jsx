import { gapi } from "gapi-script";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./app/feature/getProductSlice";
import { fetchUser } from "./app/feature/userInfoSlice";
import Routers from "./Routes/Routers";

function App() {
  const { product } = useSelector((state) => state.cardList);
  const { wishlist } = useSelector((state) => state.wishlists);
  const dispatch = useDispatch();

  useEffect(() => {
    //save card item and wishlist in localstorage
    window.localStorage.setItem("item", JSON.stringify(product));
    window.localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [product, wishlist]);

  //fetch all prodduct
  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchUser());
  }, []);

  // google auth login
  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
        "343936071408-obrb4v65plpvd3f3v1qufcb2bq70nf14.apps.googleusercontent.com",
      plugin_name: "chat",
    });
  });

  return (
    <div className="max-w-[1440px] mx-auto">
      <Routers />
    </div>
  );
}

export default App;
