---
sidebar_position: 3
---
import Formulario from '@site/src/pages/formulario';
import CopyableBox from '@site/src/components/CopyableBox';
import { QRCodeCanvas } from 'qrcode.react';
import Link from '@docusaurus/Link';


# Desarrollos

Durante esta etapa, trabajamos junto al aceptador en la implementación de los desarrollos necesarios para garantizar una integración técnica exitosa con el ecosistema de Transferencias 3.0.

## ¿Qué se aborda en esta fase?

- Relevamiento técnico: se identifican los flujos a implementar, APIs requeridas y particularidades del modelo de negocio.
- Entrega de documentación: se comparten manuales operativos, especificaciones técnicas y ejemplos de integración.
- Configuración de ambientes: se habilitan entornos de prueba (sandbox) y se generan credenciales OAuth para comenzar el desarrollo.
- Desarrollo de funcionalidades: el aceptador implementa los servicios necesarios para iniciar pagos, recibir notificaciones, consultar estados y gestionar devoluciones.
- Firma de documentación: se formaliza la adhesión al esquema mediante la firma del manual operativo y la validación de datos administrativos.

## Acompañamiento durante el desarrollo

- Asignamos un equipo técnico de soporte para consultas funcionales y técnicas.
- Coordinamos sesiones de revisión de avances y resolución de bloqueos.
- Brindamos capacitaciones específicas sobre APIs, flujos de pago y herramientas de prueba.

Esta etapa es clave para asegurar que el aceptador cuente con una integración robusta, segura y alineada con los estándares definidos por el administrador del sistema



## Ambiente Sandbox

<CopyableBox
  label="Endpoint"
  url="https://sandbox.release.newpay.com.ar"
/>

:::tip
Puedes solicitar las credenciales de nuestro ambiente Sandbox aqui. Es importante que hayas participado del [kickoff](/overview/kickoff) con nuestro equipo comercial para estar habilitado en esta etapa.
:::

## API Playground
Nosotros proveemos la siguiente documentación API:

<div className="cards__container">
  <div className="card margin--md padding--lg shadow--md">
    <h3>⚡ API para Aceptador</h3>
    <p>Documentación de servicios a construir por el Aceptador para que Newpay se conecte a él.</p>
    <Link to="/developers/portalApi/pct_for_acquirer">Ir a API Aceptador →</Link>
  </div>
  <div className="card margin--md padding--lg shadow--md">
    <h3>⚡ API para Newpay</h3>
    <p>Documentación de la API de Newpay donde debe conectarse el Aceptador.</p>
    <Link to="/developers/portalApi/pct_for_newpay">Ir a API Newpay →</Link>
  </div>
  <div className="card margin--md padding--lg shadow--md">
    <h3>⚡ API para Reportes</h3>
    <p>Consulta y administración de reportes de transacciones.</p>
    <Link to="/developers/portalApi/pct_for_reports">Ir a API Reportes →</Link>
  </div>
</div>
