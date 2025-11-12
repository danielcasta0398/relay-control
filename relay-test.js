import { Gpio } from 'pigpio';

const relay = new Gpio(11, { mode: Gpio.OUTPUT });

console.log('Hola desde Raspberry Pi (¡pronto relé activo!)');
relay.digitalWrite(1);           // si tu módulo es activo-bajo, usa 0 aquí
setTimeout(() => {
  relay.digitalWrite(0);         // apaga (o 1 si es activo-bajo)
  console.log('Relé apagado');
  process.exit(0);
}, 5000);