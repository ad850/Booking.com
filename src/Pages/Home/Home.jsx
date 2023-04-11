import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Navbar/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Featured from "../../Components/featured/Featured";
import FeaturedProperties from "../../Components/featuredProperties/FeaturedProperties";
import MailList from "../../Components/mailList/MailList";
import PropertyList from "../../Components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type </h1>
        <PropertyList />
        <h1 className="homeTitle">Stay at our top unique properties</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </>
  );
};
export default Home;
