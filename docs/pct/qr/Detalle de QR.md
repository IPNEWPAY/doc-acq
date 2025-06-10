# ¿Qué es un Código QR para Pagos?
:::info
La construccion del QR se basa en el standard [QREMVco](https://www.emvco.com/specifications/emv-qr-code-specification-for-payment-systems-merchant-presented-mode/), [CIMPRA 525](https://www.bcra.gob.ar/pdfs/sistemasfinancierosydepagos/SNP3525.pdf), [CIMPRA 530](https://www.bcra.gob.ar/Pdfs/SistemasFinancierosYdePagos/Boletin_CIMPRA_530.pdf), 
:::

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
        * Estatico: 11
        * Dinamico: 12
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

*    **Merchant Category Code (ID "52"):**
        * Explicación: Código de categoría del comercio [BCRA](https://www.bcra.gob.ar/Pdfs/SistemasFinancierosYdePagos/MCC_VISA_AFIP_2022_6_2.pdf)
        * Formato: Numérico (N)
        * Longitud: 04
        * Presencia: Obligatorio (M)
        * Ejemplo: "2932...[datos del aceptador]"

*    **Transaction Currency (ID "53"):**
        * Explicación: Código de moneda de la transacción, por ejemplo, ARS
        * Formato: Numérico (N)
        * Longitud: "03"
        * Presencia: Obligatorio (M)

*    **Transaction Amount (ID "54"):**
        * Explicación: Monto de la transacción. Está ausente si la aplicación móvil solicita al consumidor que ingrese el monto. De lo contrario, debe estar presente.
        * Formato: Alfanumérico (ans)
        * Longitud: Variable (var.) hasta "13"
        * Presencia: Condicional (C)

*    **Additional Data Field Template (ID "62")**
Este template se utiliza para incluir datos adicionales relacionados con la transacción. Su estructura y los IDs de los data objects dentro de este template se detallan en la Tabla 3.7 del documento QREMVco

*    **Merchant Information—Language Template (ID "64")**
Este template (ID "64") se utiliza para proveer el nombre del comercio en diferentes idiomas. Los data objects dentro de este template se detallan en la Tabla 3.8 del documento QREMVco .
Permite incluir el nombre y ciudad del comercio en un lenguaje alternativo.

*    **CRC (Checksum) (ID "63") (Obligatorio):**
Explicación: Código de verificación para validar la integridad del QR.

:::info
Data Object ID Allocation:

Los IDs de los objetos de datos pueden ser:
* Asignados por EMVCo: Tienen un significado, representación y formato definidos por EMVCo.
* Reservados para uso futuro (RFU) por EMVCo: No deben ser utilizados.
* No reservados: Pueden ser utilizados por otras partes, como sistemas de pago locales y proveedores de servicios de valor agregado.

Se recomienda utilizar los objetos de datos asignados por EMVCo siempre que sea posible para reducir la duplicación de información y el tamaño del código QR.
:::

No te olvide de ver los [QRs de ejemplo, en formatos imagen, parseado y string](/pct/qr/ejemplo).

Es fundamental que los códigos QR generados bajo este estándar sean interoperables entre diferentes billeteras y aplicaciones de pago. Esto garantiza que cualquier billetera debe poder leer y procesar cualquier código QR, independientemente de la marca o el proveedor del mismo.