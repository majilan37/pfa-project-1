import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Header";
import Input from "../components/Input";
import { useAppDispatch } from "../redux/hooks";
import { resetQuantity } from "../redux/slices/cartSlice";
import { FormValues } from "../types";
import { simulateReaquest } from "../utils";

function Checkout() {
  const methods = useForm<FormValues>();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    formState: { errors },
    handleSubmit,
    reset,
  } = methods;
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await (async () => {
      setLoading(true);
      await simulateReaquest(3000);
    })();
    setLoading(false);
    toast.success("Achat Confirmée");
    console.log(data);

    reset();
    dispatch(resetQuantity());
    navigate("/");
  };

  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto py-14">
        <h2 className="text-2xl md:text-3xl lg:text-5xl text-center py-14 ">
          Veuillez remplir vos informations
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FormProvider {...methods}>
            <Input
              label="Email"
              name="email"
              type="email"
              error={errors.email}
              helperText={errors.email ? "Email est requis" : ""}
            />
            <Input
              label="Prénom"
              name="firstName"
              error={errors.firstName}
              helperText={errors.firstName ? "Prénom est requis" : ""}
            />
            <Input
              label="Nom"
              name="lastName"
              error={errors.lastName}
              helperText={errors.lastName ? "Nom est requis" : ""}
            />
            <div className="grid xl:grid-cols-2 xl:gap-6 space-y-6">
              <Input
                label="Age"
                name="age"
                type="number"
                error={errors.age}
                helperText={errors.age ? "Age est requis" : ""}
              />
              <Input label="Date de naissance" name="birthDate" date />
              <Input
                label="Téléphone"
                name="phoneNumber"
                type="number"
                error={errors.phoneNumber}
                helperText={errors.phoneNumber ? "Téléphone est requis" : ""}
              />
              <Input
                label="Ville"
                name="city"
                select
                items={[
                  { name: "Agadir", value: "agadir" },
                  { name: "Tiznit", value: "tiznit" },
                  { name: "Marrakech", value: "marrakech" },
                ]}
                // @ts-ignore
                render={(item) => item.name}
                // @ts-ignore
                keyItem="value"
              />
              {/* <Input label="Code postal" name="zip" /> */}
            </div>
          </FormProvider>

          <LoadingButton
            variant="contained"
            type="submit"
            loading={loading}
            className="text-white !capitalize bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Confirmer l'achat
          </LoadingButton>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
