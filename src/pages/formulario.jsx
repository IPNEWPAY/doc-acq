import React from "react";
import { useForm } from "react-hook-form";

export default function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
    alert(`Datos enviados:\nNombre: ${data.nombre}\nCorreo: ${data.correo}`);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            {...register("nombre", { required: "Este campo es obligatorio" })}
          />
          {errors.nombre && (
            <p style={{ color: "red" }}>{errors.nombre.message}</p>
          )}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="correo">Correo electrónico:</label>
          <input
            id="correo"
            type="email"
            {...register("correo", {
              required: "Este campo es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Correo no válido",
              },
            })}
          />
          {errors.correo && (
            <p style={{ color: "red" }}>{errors.correo.message}</p>
          )}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
