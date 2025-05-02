import { ContactStyles as S } from '../../styles';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { messageInterface } from '../interfaces/messageInterface';
import { postMessage } from '../API/post/postMessage';

const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const schema = yup
  .object({
    sendername: yup.string().min(3, 'name is too short').required(),
    email: yup
      .string()
      .email()
      .min(7, 'must be a valid email')
      .matches(regEx, 'must be a valid email')
      .required(),
    subject: yup.string().required(),
    message: yup
      .string()
      .min(10, '10 characters or more')
      .max(500, 'max 500 characters')
      .required(),
  })
  .required();

export function ContactSection() {
  const {
    register,
    control,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm<messageInterface>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: messageInterface = getValues();
    const formElement = e.currentTarget;

    try {
      postMessage(formData);
      formElement.innerHTML = `<p>Message has been sent<P>`;
    } catch (error: unknown) {
      console.dir(error);
      return (formElement.innerHTML = `<p>Hm, something went wrong. 
        Try again, or email me at <a href="mailto:vegardmaao@gmail.com">vegardmaao@gmail.com</a></p>`);
    }
  };

  return (
    <>
      <S.ContactSection id='contact'>
        <S.FormHeader>Contact me</S.FormHeader>

        <S.Form onSubmit={(e) => onSubmit(e)}>
          <Controller
            name='sendername'
            control={control}
            render={() => (
              <>
                <S.FormLabel>Your Name</S.FormLabel>
                <S.FormInput {...register('sendername')} />
                <S.ErrorMsg o={{ display: errors.sendername?.message ? 'inline' : 'none' }}>
                  {errors.sendername?.message}
                </S.ErrorMsg>
              </>
            )}
          />
          <Controller
            name='email'
            control={control}
            render={() => (
              <>
                <S.FormLabel>Your Email</S.FormLabel>
                <S.FormInput {...register('email')} />
                <S.ErrorMsg o={{ display: errors.email?.message ? 'inline' : 'none' }}>
                  {errors.email?.message}
                </S.ErrorMsg>
              </>
            )}
          />
          <Controller
            name='subject'
            control={control}
            render={() => (
              <>
                <S.FormLabel>Subject</S.FormLabel>
                <S.FormInput {...register('subject')} />
                <S.ErrorMsg o={{ display: errors.subject?.message ? 'inline' : 'none' }}>
                  {errors.subject?.message}
                </S.ErrorMsg>
              </>
            )}
          />
          <Controller
            name='message'
            control={control}
            render={() => (
              <>
                <S.FormLabel>Message</S.FormLabel>
                <S.TextArea {...register('message')} />
                <S.ErrorMsg o={{ display: errors.message?.message ? 'inline' : 'none' }}>
                  {errors.message?.message}
                </S.ErrorMsg>
              </>
            )}
          />
          <S.SubmitBtn disabled={!isDirty || !isValid}>Send</S.SubmitBtn>
        </S.Form>
      </S.ContactSection>
    </>
  );
}
