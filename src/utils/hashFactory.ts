import bcrypt from "bcrypt";

const saltRounds = 10;

export async function generateHash(plainPassword: string) {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(plainPassword, salt);
    return hash;
  } catch (error) {
    console.error('Error generating hash:', error);
    throw error;
  }
}

// Compara senha informada com hash armazenado
export async function comparePassword(plainPassword: string, hash: string) {
  try {
    const isMatch = await bcrypt.compare(plainPassword, hash);
    return isMatch;
  } catch (error) {
    console.error('Error comparing password:', error);
    throw error;
  }
}
