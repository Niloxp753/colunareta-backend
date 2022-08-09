import { UnprocessableEntityException } from "@nestjs/common";

export function handleError(err: Error): undefined {
    const error = err.message?.split('\n');
    const lastErrLine = error[error.length - 1]?.trim();

    if (!lastErrLine) {
      console.error(err);
    }

    throw new UnprocessableEntityException(lastErrLine || 'Algum erro ocorreu ao executar a operação')
  }
