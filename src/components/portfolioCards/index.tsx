import { portfolioItems } from '../dataObjects/portfolioObjects';

/**
 * @description creates an overview of the current portfolio as defined in portfolioObjects.ts
 */
export function DisplayPortfolio() {
  console.log(portfolioItems);

  return (
    <>
      {portfolioItems.map((item) => (
        <div key={item.title}>
          <h2>{item.title}</h2>
          <img src={item.imageUrl} alt={item.title} />
          <p>{item.description}</p>
        </div>
      ))}
    </>
  );
}
