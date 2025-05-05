import { AboutStyles as S } from '../../styles';
import { Portrait } from '../../assets/images/portrait/portrait';

export function AboutMe() {
  return (
    <>
      <S.AboutWrapper id='about'>
        <Portrait />
        <S.DescriptionWrapper>
          <S.HeaderOne>Vegard Maaø</S.HeaderOne>
          <S.HeaderTwo>Front-End Developer</S.HeaderTwo>
          <p>Front-End Developer based in Norway.</p>
          <a href='#contact'>Contact me for more info</a>
        </S.DescriptionWrapper>
      </S.AboutWrapper>
    </>
  );
}
