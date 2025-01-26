# ¿Qué es un Código QR para Pagos?

El Código QR para pagos con transferencias en Argentina es una herramienta clave para facilitar transacciones electrónicas seguras y eficientes. Este documento explica en detalle su estructura, composición y funcionamiento, basándose en las normativas del Banco Central de la República Argentina (BCRA) y las especificaciones técnicas de EMVCo.

Un Código QR para pagos es una imagen bidimensional que contiene información estructurada para realizar transacciones electrónicas. En Argentina, estos códigos están estandarizados para permitir pagos mediante transferencias bancarias, cumpliendo con las normativas del BCRA y los estándares internacionales de EMVCo.

# Estructura del Código QR

El Código QR para pagos en Argentina sigue el estándar EMVCo Merchant-Presented QR Code, adaptado a las regulaciones locales. A continuación, se detalla su estructura:

### Data

La "data" es la información codificada dentro del QR. Esta se encuentra estructurada siguiendo el estándar EMVCo y contiene instrucciones precisas para llevar a cabo la transferencia del pago.

- Identificador (ID): Un número que indica el tipo de dato que contiene el objeto. Los IDs pueden ser asignados por EMVCo, reservados para uso futuro o no reservados
- Longitud (Length): Un número que indica la cantidad de caracteres en el campo de valor.
- Valor (Value): La información propiamente dicha, codificada según el tipo de dato.

La estructura del código QR sigue una jerarquía arbol donde algunos objetos de datos son obligatorios, otros condicionales y otros opcionales. Algunos datos son primitivos y otros son templates.

### Componentes claves del QR

*   **Payload Format Indicator (ID "00") (Obligatorio):**
     * Explicación: Indica la versión del estándar. Siempre será “01”.
     * Formato: N (Numerico)
     * Longitud: 02
     *  Ejemplo: "000201"
        * ID: 00
        * Longitud: 02
        * Valor: 01
*   **Point of Initiation Method (ID "01") (Opcional):**
    *   Explicación: Define si el QR es estático o dinámico.
    *   Formato: N (Numerico)
    *   Longitud: 02
    *   Ejemplo:
        *   Estático: "010211"
        *   Dinámico:  "010212"
*    **Merchant Account Information (IDs "02" - "51") (Obligatorio):**
        *   Explicación: Información del comercio a la que se debe realizar la transferencia.
        * Formato: A (Alfanumerico)
        * Longitud: Variable
        *   Ejemplo: "2932...[datos del aceptador]"
        
:::info
Los IDs dentro de este rango (específicamente los IDs "26" a "49") son utilizados por los adquirentes y agregadores para incluir el identificador del aceptador.
- dominio invertido en el subcampo 00.
- CUIT del administrador del esquema en el subcampo 98
- si se usa o no la "API resolve" en el subcampo 99. 

Solicitamos encarecidamente que se utilice el campo 24 o 41 unicamente para esta informacion.
:::