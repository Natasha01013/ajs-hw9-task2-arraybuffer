import {getBuffer} from '../getbuffer.js';
import {ArrayBufferConverter} from '../arraybufferconverter .js';

test('checking ArrayBufferConverter', () => {
    const buffer = getBuffer();
    let bufferConverter = new ArrayBufferConverter()
    bufferConverter.load(buffer);
    let result = bufferConverter.toString();
    expect(result).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
})