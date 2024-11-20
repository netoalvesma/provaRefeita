const cifrarLetras = (letra, chave) => {
    const inicial = 'a'.charCodeAt(0);
    const codigo = letra.charCodeAt(0) - inicial;
    const novoCodigo = (codigo + chave) % 26;
    return String.fromCharCode(inicial + novoCodigo);
  };
  

  const decifrarLetras = (letra, chave) => {
    const inicial = 'a'.charCodeAt(0);
    const codigo = letra.charCodeAt(0) - inicial;
    const novoCodigo = (codigo - chave + 26) % 26; 
    return String.fromCharCode(inicial + novoCodigo);
  };
  
 
  const criptografia = (mensagem, chave, converter) => {
    return mensagem
      .split('')
      .map(letra => (letra >= 'a' && letra <= 'z') ? converter(letra, chave) : letra)
      .join('');
  };
  
  export default { criptografia, cifrarLetras, decifrarLetras };
  