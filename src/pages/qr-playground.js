import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react'; // Asegúrate de instalar qrcode.react: `npm install qrcode.react`

const QRPlayground = () => {
  const [fields, setFields] = useState({
    field_00: '01', // Versión
    field_01: '12', // Indica transacción QR
    field_40: '0013ar.com.epagos0104SERV', // Información del comercio
    field_41: '0013ar.com.epagos981130598910045990201', // Aceptador del QR
    field_50: '001130715084291', // CUIT del comercio
    field_52: '9399', // Categoría
    field_53: '032', // Moneda
    field_54: '120', // Importe
    field_58: 'AR', // País
    field_59: 'E-PAGOS', // Razón social
    field_60: 'Vicente Lopez', // Ciudad
    field_61: 'CPA1638A', // Código postal
    field_80: '0013ar.com.epagos010725368930208IMPUESTO', // Información del adquirente
    field_63: '6DC5', // CRC
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const buildRawQR = () => {
    return `
000201010212
40${fields.field_40.length}${fields.field_40}
41${fields.field_41.length}${fields.field_41}
50${fields.field_50.length}${fields.field_50}
52${fields.field_52}
53${fields.field_53}
54${fields.field_54}
58${fields.field_58}
59${fields.field_59.length}${fields.field_59}
60${fields.field_60.length}${fields.field_60}
61${fields.field_61.length}${fields.field_61}
80${fields.field_80.length}${fields.field_80}
63${fields.field_63}
    `.replace(/\s+/g, ''); // Remove newlines
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>QR EMVCo Playground</h1>
      <form>
        {Object.keys(fields).map((key) => (
          <div key={key} style={{ marginBottom: '1rem' }}>
            <label htmlFor={key}>
              {key}:&nbsp;
              <input
                id={key}
                name={key}
                value={fields[key]}
                onChange={handleChange}
                style={{ width: '300px' }}
              />
            </label>
          </div>
        ))}
      </form>
      <h2>QR Raw Data</h2>
      <pre>{buildRawQR()}</pre>
      <h2>QR Code</h2>
      <QRCode value={buildRawQR()} size={256} />
    </div>
  );
};

export default QRPlayground;
