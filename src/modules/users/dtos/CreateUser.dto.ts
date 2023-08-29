import { IsEmail, IsNotEmpty, IsNumber, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({
    message: 'Nome é obrigatório',
  })
  name: string;

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
  @MinLength(8, {
    message: 'Senha deve ter no mínimo 8 caracteres',
  })
  password: string;

  @IsNotEmpty({
    message: 'Perfil é obrigatório',
  })
  @IsNumber()
  profileId: number;

  avatar: string;
}
