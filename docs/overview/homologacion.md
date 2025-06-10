---
sidebar_position: 4
---
import CopyableBox from '@site/src/components/CopyableBox';

# Homologacion

La etapa de homologación representa el momento en que se ponen a prueba los desarrollos realizados por el aceptador, conectándolos con nuestro sistema en un entorno controlado. Es un paso esencial para garantizar la interoperabilidad y el correcto funcionamiento de los servicios antes de la salida a producción.

## ¿Qué implica esta fase?
- Asignación de credenciales de prueba: se habilita el acceso al entorno de homologación con configuraciones específicas para simular escenarios reales.
- Plan de pruebas estructurado: se entrega un conjunto de casos de prueba que deben ser ejecutados por el aceptador. Estos incluyen:
    - Pagos con transferencia (PCT)
    - Devoluciones totales (DCT)
    - Tipos de QR: estático (open/close amount) y dinámico.
    - API Resolve: Validaciones y estructura de respuesta.
    - QR RAW: Validaciones al estandar EMVco.
- Evidencia de resultados: se solicita el registro de cada prueba realizada, permitiendo su validación por parte del equipo técnico.
- Coordinación de ventana de prueba final: se calendariza sesion con billetera a eleccion y aceptador para ejecutar los flujos de extremo a extremo.

## Nuestro acompañamiento
- Coordinamos reuniones técnicas para resolver dudas y ajustar configuraciones.
- Brindamos soporte continuo durante la ejecución del plan de pruebas.
- Validamos los resultados y emitimos los certificados de interoperabilidad una vez superada la etapa.

Este proceso debe completarse en un plazo no mayor a 14 días hábiles desde la notificación de adhesión, asegurando así una integración ágil y conforme a los estándares del ecosistema.

## Requisito
Para poder operar en nuestro ambiente de homologacion es necesario que complete el siguiente formulario. Una vez que los hayamos dado de alta nos estaremos contactando para brindarles el plan de prueba a completar.

### Pruebas autoasistidas
Para que puedan completar los diferentes casos del plan de pruebas, les proporcionaremos una coleccion de postman con una billetera fantasia ya configurada y lista para usar en pagos de QR de su solucion!

## Ambiente Release

<CopyableBox
  label="Endpoint"
  url="https://acquirer.release.newpay.com.ar"
/>
