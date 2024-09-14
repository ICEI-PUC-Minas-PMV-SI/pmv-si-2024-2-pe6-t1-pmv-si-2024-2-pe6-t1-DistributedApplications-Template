import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsEmployeeConstraint implements ValidatorConstraintInterface {
  validate(role: any) {
    return role === 'PORTEIRO';
  }

  defaultMessage() {
    return 'O role deve ser "PORTEIRO".';
  }
}

export function IsEmployee(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmployeeConstraint,
    });
  };
}
