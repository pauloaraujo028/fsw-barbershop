import Header from "../_components/header";
import { CreateBarbershopForm } from "./_components/create-barbershop-form";
import { CreateServiceForm } from "./_components/create-service-form";

const Dashboard = () => {
  return (
    <>
      <Header />

      <div className="px-5 py-6">
        <h1 className="text-xl font-bold">Dashboard</h1>

        <div className="pt-6">
          <CreateBarbershopForm />
        </div>

        <div className="pt-6">
          <CreateServiceForm />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
