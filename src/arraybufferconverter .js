//import {getBuffer} from './getbuffer.js';

export class ArrayBufferConverter {
    constructor() {
        this.buffer = null;
    }

    load(buffer){
        this.buffer = buffer;
    }

    toString() {
        const stringBuffer = new Uint16Array(this.buffer);
        let str = '';
        for(let i = 0; i < stringBuffer.length; i++) {
            str += String.fromCharCode(stringBuffer[i]);
        }
        return str;
    }
}