const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Generate 1200x630 PNG with branded gradient for OpenGraph
function createPng(width, height) {
  const buffer = Buffer.alloc(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      // Dark slate/charcoal gradient #08090d to #121624
      const ratioY = y / height;
      const ratioX = x / width;

      let r = Math.floor(8 + 10 * ratioX + 6 * ratioY);
      let g = Math.floor(9 + 13 * ratioX + 9 * ratioY);
      let b = Math.floor(13 + 25 * ratioX + 23 * ratioY);

      // Subtle cyan accent glow at top-left
      const dist1 = Math.hypot(x - 200, y - 150);
      if (dist1 < 300) {
        const factor = (1 - dist1 / 300) * 0.35;
        r = Math.min(255, Math.floor(r + 14 * factor * 10));
        g = Math.min(255, Math.floor(g + 165 * factor));
        b = Math.min(255, Math.floor(b + 233 * factor));
      }

      // Subtle violet accent glow at bottom-right
      const dist2 = Math.hypot(x - 1000, y - 480);
      if (dist2 < 350) {
        const factor = (1 - dist2 / 350) * 0.3;
        r = Math.min(255, Math.floor(r + 99 * factor));
        g = Math.min(255, Math.floor(g + 102 * factor));
        b = Math.min(255, Math.floor(b + 241 * factor));
      }

      buffer[idx] = r;
      buffer[idx + 1] = g;
      buffer[idx + 2] = b;
      buffer[idx + 3] = 255;
    }
  }

  // Format into PNG raw scanlines (filter type 0 = None)
  const rowSize = width * 4 + 1;
  const rawData = Buffer.alloc(height * rowSize);
  for (let y = 0; y < height; y++) {
    rawData[y * rowSize] = 0; // Filter byte: None
    buffer.copy(rawData, y * rowSize + 1, y * width * 4, (y + 1) * width * 4);
  }

  const compressed = zlib.deflateSync(rawData);

  // PNG Signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  function makeChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const crcVal = crc32(Buffer.concat([typeBuf, data]));
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crcVal, 0);
    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }

  // CRC32 table
  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    crcTable[n] = c;
  }

  function crc32(buf) {
    let crc = 0 ^ (-1);
    for (let i = 0; i < buf.length; i++) {
      crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xff];
    }
    return (crc ^ (-1)) >>> 0;
  }

  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // 8-bit depth
  ihdrData[9] = 6; // RGBA
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace

  const ihdrChunk = makeChunk('IHDR', ihdrData);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const png = createPng(1200, 630);
const outPath = path.join(__dirname, '..', 'public', 'og-image.png');
fs.writeFileSync(outPath, png);
console.log('Generated OG image at:', outPath, 'Bytes:', png.length);

