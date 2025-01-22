import React from "react";
import { useForm } from "react-hook-form";
import "../css/formulario.css";

export default function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Cambia esta URL por la de tu webhook de Power Automate
  const webhookUrl = "https://prod-150.westus.logic.azure.com:443/workflows/351c574494564660b17e5c6e0ba09a85/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=iLIW1fX6S9e0D7BV221RwTpTVjyBbA72QxMo_y3vdFA";

  const onSubmit = async (data) => {
    try {
      // Envía la información al webhook usando fetch
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Datos enviados exitosamente!");
      } else {
        alert("Hubo un problema al enviar los datos.");
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      alert("Ocurrió un error al enviar los datos.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="custom-form">
        <div className="form-group">
          <label htmlFor="email">Tu correo corporativo*</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <button type="submit" className="form-button">
          Enviame las credenciales!
        </button>
      </form>
    </div>
  );
}
