import { categories, CategoriesMenu } from "../../Components/CategoriesMenu";
import { Header } from "../../Components/Header";
import { StyledDashboard } from "./styled";
import { CardDonor } from "../../Components/CardDonor";
import { SearchItens } from "../../Components/SearchItens";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { DonationContext } from "../../contexts/DonationContext";
import { ProductDonor } from "../../Components/ProductDonor";
import { Modal } from "../../Components/Modal";
import { Footer } from "../../Components/Footer";
import { useState } from "react";
import { Loader } from "../../Components/Loader";
import { AddDonarionForm } from "../../Components/Forms/FormAddDonation";
import { Button } from "../../Components/Button";
import { ModalProductUpdate } from "../../Components/Modal/modalProductsUpdate";

export const DashboardDonor = () => {
  const [modalProductDonor, setModalProductDonor] = useState(false);
  const [modalEditDonor, setModalEditDonor] = useState(false);
  const [modalAddDonarionForm, setAddDonarionForm] = useState(false);
  const { myDonations, filteredMyDonations, setFilteredMyDonations } =
    useContext(DonationContext);
  const { isDonor } = useContext(UserContext);

  const changeCategory = (cat: string) => {
    if (cat === "Todas as Categorias") {
      setFilteredMyDonations(myDonations);
    } else {
      setFilteredMyDonations(
        myDonations.filter((donation) => donation.category === cat)
      );
    }
  };

  return isDonor ? (
    <>
      {modalProductDonor && (
        <Modal
          name={""}
          state={modalProductDonor}
          setState={setModalProductDonor}
        >
          <ProductDonor />
        </Modal>
      )}
      {modalAddDonarionForm && (
        <Modal
          name={"Adicionar Doação"}
          state={modalAddDonarionForm}
          setState={setAddDonarionForm}
        >
          <AddDonarionForm />
        </Modal>
      )}
      {modalEditDonor && (
        <Modal
          name="Perfil"
          state={modalEditDonor}
          setState={setModalEditDonor}
        >
          <ModalProductUpdate />
        </Modal>
      )}
      <StyledDashboard>
        <Header />
        <main>
          <section className="container">
            <SearchItens />
            <CategoriesMenu />
            <ul>
              {filteredMyDonations.length === 0 ? (
                <div className="waring-my-donations">
                  <p>Você ainda não fez doações</p>
                </div>
              ) : (
                filteredMyDonations.map((element) => (
                  <CardDonor
                    element={element}
                    key={element.id}
                    setModal={setModalProductDonor}
                    setEditDonor={setModalEditDonor}
                  />
                ))
              )}
            </ul>
            <select
              id="categorys"
              onChange={(event) => changeCategory(event.target.value)}
            >
              {categories.map((ele) => (
                <option value={ele}>{ele}</option>
              ))}
            </select>
            <Button
              size={"md"}
              theme={"primary"}
              type={"button"}
              onclick={() => {
                setAddDonarionForm(true);
              }}
            >
              +
            </Button>
          </section>
        </main>
      </StyledDashboard>
    </>
  ) : (
    <Navigate to="/DashboardReceiver" />
  );
};
