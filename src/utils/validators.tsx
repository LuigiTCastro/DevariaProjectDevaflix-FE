/**
 * Valida um nome.
 */
const validarNome = (name: string | undefined): boolean => {
  return name !== undefined && name.length > 3;
};

/**
 * Valida um endereço de e-mail.
 */
const validarEmail = (email: string): boolean => {
  const emailPattern: RegExp =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailPattern.test(email);
};

/**
 * Valida uma senha.
 */
const validarSenha = (senha: string | undefined): boolean => {
  if (!senha) return false;

  // Pelo menos 8 caracteres
  if (senha.length < 8) return false;

  // Pelo menos uma letra minúscula
  if (!/[a-z]/.test(senha)) return false;

  // Pelo menos uma letra maiúscula
  if (!/[A-Z]/.test(senha)) return false;

  // Pelo menos um número
  if (!/[0-9]/.test(senha)) return false;

  // Pelo menos um caractere especial
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) return false;

  return true;
};

/**
 * Valida a confirmação de senha.
 */
const validarConfirmacaoSenha = (
  senha: string | undefined,
  confirmacao: string | undefined
): boolean => {
  return validarSenha(senha) && senha === confirmacao;
};

export { validarNome, validarEmail, validarSenha, validarConfirmacaoSenha };
