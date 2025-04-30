import { AboutStyles as S } from '../../styles';

export function AboutMe() {
  return (
    <>
      <S.AboutWrapper id='about'>
        <S.Portrait
          src='https://sellmo.no/Flower_Power/wp-content/uploads/2023/02/loppa-og-skunkus-1.jpg'
          alt='Temp image'
        />
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
