import { AboutStyles as S } from '../../../styles';
import portrait from './portrait.jpg';

export function Portrait() {
  return (
    <>
      <S.Portrait src={portrait} alt='Image of Vegard Maaø' />
    </>
  );
}
