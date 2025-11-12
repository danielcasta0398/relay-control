import { Gpio } from 'pigpio';

const relay = new Gpio(17, { mode: Gpio.OUTPUT }); // GPIO17 (pin físico 11)

console.log('Activando relé...');
relay.digitalWrite(1); // encender
setTimeout(() => {
  relay.digitalWrite(0); // apagar
  console.log('Relé apagado');
  process.exit(0);
}, 5000);