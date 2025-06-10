---
sidebar_position: 7
---
# FAQ

Para implementar un sistema de producción en el contexto de **Billeteras PCT**, **Aceptadores** y **PCP/Wallet PULL**, es necesario cumplir con una serie de requisitos que garantizan el correcto funcionamiento del sistema, la integración técnica y el cumplimiento normativo. Estos requisitos se dividen en diferentes etapas, desde la homologación hasta la configuración, pasando por pruebas operativas y notificaciones regulatorias.

| Requisitos                          | **Billetera PCT**                 | **Aceptador**                                                                                     | **PCP/Wallet PULL**                                                                 |
| -------------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Alta Formulario Homologacion                     | ✔️                           | ✔️                                                                              | ✔️                                                                               |
| Plan de Pruebas                    | ✔️                                    | ✔️                                                                                                         | ✔️                                                                                 |
| Configuracion para Integracion                | ✔️                                    | ✔️                                                                                                         | ✔️                                                                                 |
| Integracion Parcial                       | ❌ | ❌ | ✔️ |
| Integracion Total (1 a 1)                          | ✔️                                  | ✔️                                                                                           | ❌                                                   |
| Alta Formulario Produccion                          | ✔️                     | ✔️                                                                                           | ✔️                                                                    |
| Manual Operativo                | ¹✔️                                    | ¹✔️                                                                                                        | ¹✔️                                                                                 |
| -                | ❌                                    | ❌                                                                                                         | ✔️                                                                                 |
| -           | ✔️                                    | ✔️                                                                                                         | ❌                                                                                 |
| Notificacion BCRA  | ✔️                                    | ✔️                                                                                                         | ❌                                                                                 |



A continuación, se describen cada uno de los requisitos necesarios:

## Alta de Formulario de Homologación

Este requisito implica completar y presentar el formulario correspondiente a la etapa de homologación. Este formulario permite a las entidades iniciar el proceso de integración en el entorno de pruebas. Aplica para:

* Billetera PCT: Requisito obligatorio.
* Aceptador: Requisito obligatorio.
* PCP/Wallet PULL: Requisito obligatorio.

## Plan de Pruebas

El plan de pruebas es un documento detallado que define los escenarios que deben ejecutarse para garantizar la calidad y el cumplimiento de las integraciones técnicas. Este requisito incluye pruebas funcionales y de interoperabilidad. Aplica para:

* Billetera PCT: Requisito obligatorio.
* Aceptador: Requisito obligatorio.
* PCP/Wallet PULL: Requisito obligatorio.

## Configuración para la Integración

Este paso asegura que la configuración técnica necesaria esté preparada antes de realizar cualquier prueba. Incluye configuraciones en los sistemas de los participantes, como las credenciales y parámetros de conexión. Aplica para:

* Billetera PCT: Requisito obligatorio.
* Aceptador: Requisito obligatorio.
* PCP/Wallet PULL: Requisito obligatorio.

## Integración Parcial

La integración parcial es opcional y se utiliza únicamente en el caso de PCP/Wallet PULL. Este requisito permite realizar una conexión inicial con funcionalidades limitadas para garantizar que los elementos básicos del sistema operen correctamente. No aplica para:

* PCP/Wallet PULL

## Integración Total (1 a 1)

La integración total asegura que cada entidad participante pueda operar de forma completa e independiente. En este caso, las billeteras y aceptadores deben integrarse directamente con los sistemas necesarios para garantizar la operación. Aplica para:

* Billetera PCT.
* Aceptador.

## Alta de Formulario de Producción

Este formulario es necesario para mover el sistema al entorno de producción una vez que se han completado las pruebas y configuraciones. Aplica para:

* Billetera PCT: Requisito obligatorio.
* Aceptador: Requisito obligatorio.
* PCP/Wallet PULL: Requisito obligatorio.


## Manual Operativo

El manual operativo es un documento que describe los procedimientos de uso y las mejores prácticas para garantizar una operación fluida. Este manual es obligatorio para todas las entidades, pero su contenido puede variar según los roles. Aplica para:

* Billetera PCT: Requisito obligatorio.
* Aceptador: Requisito obligatorio.
* PCP/Wallet PULL: Requisito obligatorio.

## Notificación al BCRA
El Banco Central de la República Argentina (BCRA) debe ser notificado una vez que la integración esté lista para operar en producción. Este requisito aplica para:

* Billetera PCT: Requisito obligatorio.
* Aceptador: Requisito obligatorio.

