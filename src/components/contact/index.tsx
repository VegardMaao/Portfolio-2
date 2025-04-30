import { ContactStyles as S } from '../../styles';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { messageInterface } from '../interfaces/messageInterface';
import { postMessage } from '../API/post/postMessage';

const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const schema = yup
  .object({
    name: yup.string().min(3, 'name is too short').required(),
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
    // const formData = new FormData(e.currentTarget);
    // console.log(formData);
    // const formValues = Object.fromEntries([...formData]);
    // console.log(formValues);
    const formData = getValues();
    console.log(formData);
    postMessage(formData);
  };

  return (
    <>
      <S.ContactSection id='contact'>
        <S.FormHeader>Contact me</S.FormHeader>

        <S.Form onSubmit={(e) => onSubmit(e)}>
          <Controller
            name='name'
            control={control}
            render={() => (
              <>
                <S.FormLabel>Your Name</S.FormLabel>
                <S.FormInput {...register('name')} />
                <S.ErrorMsg o={{ display: errors.name?.message ? 'inline' : 'none' }}>
                  {errors.name?.message}
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
