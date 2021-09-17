import React from 'react';
import { Button, TextInput } from 'components';
import { validateEmail, validateConfirmEmail, validateName, isEmpty } from './validation';
import type { TError } from './types';
import styles from './Form.module.css';

type TProps = {
  onSubmit(data: { name: string; email: string }): Promise<void>;
  onSuccess(): void;
};

export const Form: React.FC<TProps> = ({ onSubmit, onSuccess }) => {
  const [loading, setLoading] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [confirmEmail, setConfirmEmail] = React.useState('');
  const [nameError, setNameError] = React.useState<TError | null>(null);
  const [emailError, setEmailError] = React.useState<TError | null>(null);
  const [confirmEmailError, setConfirmEmailError] = React.useState<TError | null>(null);

  const handleChangeName = React.useCallback((event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.trim();
    setName(value);
    setNameError(null);
  }, []);

  const handleChangeEmail = React.useCallback((event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.trim();
    setEmail(value);
    setEmailError(null);
  }, []);

  const handleChangeConfirmEmail = React.useCallback((event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.trim();
    setConfirmEmail(value);
    setConfirmEmailError(null);
  }, []);

  const validateNameField = React.useCallback(() => setNameError(validateName(name)), [setNameError, name]);
  const validateEmailField = React.useCallback(() => {
    setEmailError(validateEmail(email));
    if (!isEmpty(confirmEmail)) {
      setConfirmEmailError(validateConfirmEmail(confirmEmail, email));
    }
  }, [setEmailError, email, confirmEmail]);
  const validateConfirmEmailField = React.useCallback(
    () => setConfirmEmailError(validateConfirmEmail(confirmEmail, email)),
    [setConfirmEmailError, confirmEmail, email],
  );

  const handleSubmit = React.useCallback(
    (event: React.SyntheticEvent) => {
      event.preventDefault();
      setSubmitError(null);
      const errorName = validateName(name);
      const errorEmail = validateEmail(email);
      const errorEmailConfirm = validateConfirmEmail(confirmEmail, email);
      const valid = !errorName && !errorEmail && !errorEmailConfirm;
      if (valid) {
        setLoading(true);
        onSubmit({ name, email })
          .then(() => {
            onSuccess();
          })
          .catch(error => {
            setSubmitError(error.message);
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        setNameError(errorName);
        setEmailError(errorEmail);
        setConfirmEmailError(errorEmailConfirm);
      }
    },
    [name, email, confirmEmail, onSubmit, onSuccess],
  );

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        name="name"
        label="Name"
        value={name}
        onChange={handleChangeName}
        onBlur={validateNameField}
        invalid={!!nameError}
        meta={nameError?.message}
      />
      <TextInput
        name="email"
        label="Email"
        inputMode="email"
        value={email}
        onChange={handleChangeEmail}
        onBlur={validateEmailField}
        invalid={!!emailError}
        meta={emailError?.message}
      />
      <TextInput
        name="confirmEmail"
        label="Email Confirmation"
        inputMode="email"
        value={confirmEmail}
        onChange={handleChangeConfirmEmail}
        onBlur={validateConfirmEmailField}
        invalid={!!confirmEmailError}
        meta={confirmEmailError?.message}
      />
      <Button loading={loading} className={styles.submit} fullWidth type="submit">
        Submit
      </Button>
      {submitError && <div className={styles.meta}>{submitError}</div>}
    </form>
  );
};
