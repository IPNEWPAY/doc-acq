# API Resolve

:::info
La construccion del API Resolve se basa en la, [CIMPRA 525](https://www.bcra.gob.ar/pdfs/sistemasfinancierosydepagos/SNP3525.pdf), [CIMPRA 530](https://www.bcra.gob.ar/Pdfs/SistemasFinancierosYdePagos/Boletin_CIMPRA_530.pdf), [CIMPRA 535](https://www.bcra.gob.ar/Pdfs/SistemasFinancierosYdePagos/Boletin_CIMPRA_535.pdf) 
:::

La API Resolve es un componente fundamental en el ecosistema de pagos con transferencia en Argentina, especialmente dentro del marco de Transferencias 3.0. Su función principal es proveer información adicional sobre una transacción de pago cuando esta no se encuentra completamente contenida en el código QR. Esta API se activa cuando un código QR dinámico indica que requiere información adicional para completar la transacción.

## Indicador en el codigo QR
El código QR incluye un subcampo (99) dentro del campo de "Merchant Account Information" que indica si se utiliza o no la API Resolve. Un valor de "01" en este subcampo indica que la API debe ser llamada. Si el valor es "00", la API no se debe usar.

## Ausencias de datos en el QR
Si el código QR no incluye toda la información necesaria (como el monto exacto en un pago de monto abierto) para completar el pago, la API Resolve se utiliza para obtener los datos faltantes

## ¿Que informacion proporciona API Resolve?

La API Resolve proporciona una variedad de datos que complementan la información del código QR para permitir que una billetera digital procese un pago correctamente. Los datos se reciben en formato JSON y entre la información que se retorna se encuentra:

* **status**: Indica si el monto del pago es abierto o cerrado.
        *    open_amount: El monto del pago es abierto y debe ser ingresado por el usuario.
        * closed_amount: El monto del pago está predefinido en el código QR o en la información que devuelve la API.
        *   pending: La información no está disponible, y se debe intentar de nuevo más tarde.
        *   empty_order: La orden está vacía (por ejemplo, en un estacionamiento sin tiempo transcurrido).
        *   unsupported_qr_code: El QR escaneado no es válido. 

* **Administrator**:  Incluye datos sobre el administrador del esquema de pago.
        *    identification_number: El CUIT del administrador del esquema de pago.
        *    name: Nombre del administrador del esquema de pago.

* **Collector**:  Proporciona detalles sobre el comercio que recibe el pago.
        *    identification_number: El CUIT del administrador del esquema de pago.
        *    name: Nombre del comercio.
        *    identification_number: Número de identificación del comercio (CUIT).
        *    account: Número de cuenta del comercio (CBU o CVU).
        *    mcc: Código de categoría del comercio (Merchant Category Code) según [BCRA](https://www.bcra.gob.ar/Pdfs/SistemasFinancierosYdePagos/MCC_VISA_AFIP_2022_6_2.pdf)
        *    image: URL de la imagen del comercio (opcional).
        *   postal_code: Código postal del comercio.

* **Order**:  Detalles sobre la orden de compra.
        *    id: Identificador único de la orden.
        *    items:  Un array con información sobre los productos o servicios adquiridos, incluyendo título, cantidad, precio unitario y descripción.
        *    total_amount: Monto total de la orden (cuando el monto es cerrado).

* **Payment Methods Allowed**:  Especifica los métodos de pago aceptados.

* **URL del comercio**:   La API tambien sirve para obtener la url del adquirente que procesa el pago para obtener la informacion del comercio.

* **Otros campos**:    La API puede retornar otro campos dependiendo de la necesidad del adquirente.

## Ejemplo

```json
{
    "status": "open_amount",
    "administrator": {
        "identification_number": "30598910045",
        "name": "PRISMA"
    },
    "collector": {
        "name": "E-Pagos",
        "identification_number": "30715084291",
        "account": "3220001805006298690016",
        "mcc": "9399",
        "postal_code": "CPA1638A",
        "image": ""
    },
    "order": {
        "items": [
            {
                "title": "E-Pagos",
                "description": "E-Pagos - 2536923",
                "quantity": 1,
                "unit_price": 1,
                "currency_id": "ARS"
            }
        ],
        "id": "BF5C7C20-EC21-4B14-BD77-930BB10CAD79",
        "min_amount": 1
    },
    "additional_info": []
}
```
