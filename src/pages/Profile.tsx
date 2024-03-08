import AsideProfile from "../components/AsideProfile/AsideProfile";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="min-w-[350px] max-w-[540px] md:max-w-[1200px] xl:max-w-[1192px] mx-auto md:p-6 p-4 mb-[60px]">
        <div className="grid grid-cols-2">
          <AsideProfile />
          <div>
            <h2 className="text-2xl font-bold mb-8">Profile</h2>
            <Form />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
