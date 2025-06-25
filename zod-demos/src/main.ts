// 1. Import Zod
import { z } from 'zod';

// 2. Creating ZOD schema (shape)
const userSchema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.string().email(),
});

// 3. Creating actual data
const userData = {
  name: 'Arpit',
  age: 30,
  email: "arpit@gmail.com"
};

// const validUser = userSchema.parse(userData);
// console.log(validUser)

