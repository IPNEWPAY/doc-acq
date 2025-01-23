# QR

:::info
La construccion del QR se basa en el standard [QREMVco](https://www.emvco.com/specifications/emv-qr-code-specification-for-payment-systems-merchant-presented-mode/), [CIMPRA 525](https://www.bcra.gob.ar/pdfs/sistemasfinancierosydepagos/SNP3525.pdf), [CIMPRA 530](https://www.bcra.gob.ar/Pdfs/SistemasFinancierosYdePagos/Boletin_CIMPRA_530.pdf), 
:::

# QR RAW
```
00020101021240250013ar.com.epagos0104SERV41380013ar.com.epagos981130598910045990201501500113071508429152049399530303254031205802AR5907E-Pagos6013Vicente%20Lopez6108CPA1638A80400013ar.com.epagos010725368930208IMPUESTO63046DC5
```


# Tabla de Campos QR EMVCo

| **Campo Principal** | **Subcampo** | **Longitud** | **Contenido**                  | **Descripción**                      |
|----------------------|--------------|--------------|--------------------------------|--------------------------------------|
| 00                   |              | 2            | 1                              |                                      |
| 01                   |              | 2            | 12                             | 11 Estatico,     12 Dinamico                                |
| 40                   |              | 25           | 0013ar.com.epagos0104SERV      | Información del comercio             |
|                      | 00           | 13           | ar.com.epagos                  |                                      |
|                      | 01           | 04           | SERV                           |                                      |
| 41                   |              | 38           | 0013ar.com.epagos981130598910045990201 | Aceptador del QR                    |
|                      | 00           | 13           | ar.com.epagos                  | Dominio invertido del aceptador      |
|                      | 98           | 11           | 30598910045                    | CUIT del aceptador                   |
|                      | 99           | 02           | 01                             | Flag de IEP                          |
| 50                   |              | 15           | 001130715084291                | Número de CUIT del comercio          |
|                      | 00           | 11           | 30715084291                    |                                      |
| 52                   |              | 4            | 9399                           | Categoría del comercio               |
| 53                   |              | 3            | 032                            | Moneda (ARS)                         |
| 54                   |              | 3            | 120                            | Importe                              |
| 58                   |              | 2            | AR                             | País del comercio                    |
| 59                   |              | 7            | E-PAGOS                        | Razón social del comercio            |
| 60                   |              | 13           | Vicente Lopez                  | Ciudad del comercio                  |
| 61                   |              | 08           | CPA1638A                       | Código postal completo (8 dígitos)   |
| 80                   |              | 41           | 0013ar.com.epagos010725368930208IMPUESTO | Información del adquirente          |
|                      | 00           | 13           | ar.com.epagos                  |                                      |
|                      | 01           | 07           | 2536893                        |                                      |
|                      | 02           | 08           | IMPUESTO                       |                                      |
| 63                   |              | 4            | 6DC5                           | CRC                                  |


