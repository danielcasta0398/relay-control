import rpio from 'rpio';

// (por defecto rpio usa 'physical' en tu entorno)
const PIN = 11; // pin físico 11

console.log('Hola desde Raspberry Pi (¡activando relé!)');
rpio.open(PIN, rpio.OUTPUT, rpio.LOW);
rpio.write(PIN, rpio.HIGH);
setTimeout(() => {
  rpio.write(PIN, rpio.LOW);
  console.log('Relé apagado');
  rpio.close(PIN);
  process.exit(0);
}, 5000);