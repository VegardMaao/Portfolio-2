import { ContactStyles as S } from '../../styles';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { MessageInterface } from '../interfaces/messageInterface';
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
  } = useForm<MessageInterface>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = getValues();
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

        <S.Form onSubmit={onSubmit}>
          <Controller
            name='sendername'
            control={control}
            render={() => (
              <>
                <S.FormLabel htmlFor='sendername'>Your Name</S.FormLabel>
                <S.FormInput id='sendername' {...register('sendername')} />
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
                <S.FormLabel htmlFor='email'>Your Email</S.FormLabel>
                <S.FormInput id='email' {...register('email')} />
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
                <S.FormLabel htmlFor='subject'>Subject</S.FormLabel>
                <S.FormInput id='subject' {...register('subject')} />
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
                <S.FormLabel htmlFor='message'>Message</S.FormLabel>
                <S.TextArea id='message' {...register('message')} />
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
