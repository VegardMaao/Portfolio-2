import { portfolioItems } from '../dataObjects/portfolioObjects';
import { PortfolioCardStyles as S } from '../../styles';

/**
 * @description creates an overview of the current portfolio as defined in portfolioObjects.ts
 */
export function DisplayPortfolio() {
  return (
    <>
      <S.AllCardWrapper id='portfolio'>
        {portfolioItems.map((item) => (
          <S.SingleCardWrapper key={item.title}>
            <h2>{item.title}</h2>
            <a href={item.websiteLink} target='_blank'>
              <S.Thumbnail src={item.imageUrl} alt={item.title} />
            </a>
            <p>{item.description}</p>

            <S.LinkBox>
              <a href={item.gitHubLink} target='_blank'>
                GitHub
              </a>
              <a href={item.websiteLink} target='_blank'>
                Live Site
              </a>
            </S.LinkBox>
          </S.SingleCardWrapper>
        ))}
      </S.AllCardWrapper>
    </>
  );
}
