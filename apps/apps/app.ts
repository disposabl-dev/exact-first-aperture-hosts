import type { Answer } from './app.contract.d.ts';
const origin = import.meta.env.CONVEX_ORIGIN;
export const grants = [`net.websocket ${origin}`, 'device.camera cameraPurpose', 'fs.read app:/tmp', 'fs.write app:/tmp'].join('\n');
export const answer: Answer = (name) => { throw new Error(`Unknown source ${name}`); };
