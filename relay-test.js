import rpio from 'rpio';

// GPIO17 (pin físico 11)
const pin = 17;

console.log('Hola desde Raspberry Pi (¡activando relé!)');

// Configurar pin como salida
rpio.open(pin, rpio.OUTPUT, rpio.LOW);

// Activar relé
rpio.write(pin, rpio.HIGH);
console.log('Relé activado');

setTimeout(() => {
  // Apagar relé
  rpio.write(pin, rpio.LOW);
  console.log('Relé apagado');
  rpio.close(pin);
  process.exit(0);
}, 5000);