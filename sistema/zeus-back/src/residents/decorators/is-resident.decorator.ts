import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsResidentConstraint implements ValidatorConstraintInterface {
  validate(role: any) {
    return role === 'MORADOR';
  }

  defaultMessage() {
    return 'O role deve ser "MORADOR".';
  }
}

export function IsResident(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsResidentConstraint,
    });
  };
}