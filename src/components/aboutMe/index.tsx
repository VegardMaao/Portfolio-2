import { AboutStyles as S } from '../../styles';
import { Portrait } from '../../assets/images/portrait/portrait';

export function AboutMe() {
  return (
    <>
      <S.AboutWrapper id='about'>
        <Portrait />
        {/* <S.Portrait src={`src/assets/images/portrait/portrait.jpg`} alt='Image of Vegard Maaø' /> */}
        <S.DescriptionWrapper>
          <S.HeaderOne>Vegard Maaø</S.HeaderOne>
          <S.HeaderTwo>Front-End Developer</S.HeaderTwo>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, reprehenderit, vitae
            ratione vero nemo ad dolore voluptates illo voluptatibus facere excepturi quis suscipit
            quaerat deserunt distinctio nesciunt quas sapiente accusantium?
          </p>
        </S.DescriptionWrapper>
      </S.AboutWrapper>
    </>
  );
}
