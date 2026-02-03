import bcrypt from "bcrypt";

const saltRounds = 10;

// Gera o hash da senha
export async function generateHash(plainPassword: string) {
  return await bcrypt.hash(plainPassword, saltRounds);
}

// Compara senha informada com hash armazenado
export async function comparePassword(plainPassword: string, hash: string) {
  return await bcrypt.compare(plainPassword, hash);
}
