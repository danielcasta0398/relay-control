import { Gpio } from 'onoff';

// ⚙️ Configura el pin GPIO que controla tu relé
// Si lo conectaste al pin físico 11 → GPIO17
// (Cambia el número si tu pin es distinto)
const relay = new Gpio(11, 'out');

console.log('Hola desde Raspberry Pi (¡pronto relé activo!)');

// 🔴 Activa el relé
relay.writeSync(1);
console.log('Relé activado');

setTimeout(() => {
  // 🔵 Apaga el relé
  relay.writeSync(0);
  console.log('Relé apagado');

  // 🧹 Libera el GPIO
  relay.unexport();
}, 5000);