import { isEmpty, validateName, validateEmail, validateConfirmEmail } from '../validation';

describe('"isEmpty" function test suite', function () {
  it('isEmpty should return "true"', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty('test')).toBe(false);
  });
});

describe('"validateName" subscription form', () => {
  it('validateName should return null', () => {
    expect(validateName('misha')).toBe(null);
  });

  it('"validateName" should return error', () => {
    const invalidInputLessThanMinLength = 'mi';

    const result = validateName(invalidInputLessThanMinLength);
    expect(result).toHaveProperty('type', 'name');
    expect(result).toHaveProperty('message');
  });
});

describe('"validateEmail" subscription form', () => {
  it('"validateEmail" should return null', () => {
    const emailInput = 'test@test.com';

    expect(validateName(emailInput)).toBe(null);
  });

  it('"validateEmail" should return error', () => {
    const invalidEmptyInput = '';

    const result = validateEmail(invalidEmptyInput);
    expect(result).toHaveProperty('type', 'email');
    expect(result).toHaveProperty('message');
  });
});

describe('"validateConfirmEmail" subscription form', () => {
  it('"validateConfirmEmail" should return null', () => {
    const emailInput = 'test@test.com';
    const confirmEmailInput = 'test@test.com';

    expect(validateConfirmEmail(confirmEmailInput, emailInput)).toBe(null);
  });

  it('"validateConfirmEmail" should return error', () => {
    const emailInput = 'test@test.com';
    const confirmEmailInput = 'test@test1.com';

    const result = validateConfirmEmail(confirmEmailInput, emailInput);
    expect(result).toHaveProperty('type', 'confirmEmail');
    expect(result).toHaveProperty('message');
  });
});
