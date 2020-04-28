import keyCodes from './keyCodes';

function keyCodeToCodes(keyCode: number): string[] {
  const code = keyCodes[keyCode];

  if (!code) {
    throw new Error(`No codes found for ${keyCode}`);
  }

  return code;
}

export default keyCodeToCodes;
