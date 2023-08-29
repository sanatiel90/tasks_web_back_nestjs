import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDTO {
  @IsEmail(
    {},
    {
      message: 'E-mail deve ter um formato válido',
    },
  )
  @IsNotEmpty({
    message: 'E-mail é obrigatório',
  })
  email: string;

  @IsNotEmpty({
    message: 'Senha é obrigatória',
  })
  password: string;
}
