import { footerItems } from '../dataObjects/footerObjects.ts';
import { FooterStyles } from '../../styles/';

function FooterIcons() {
  const arr = footerItems;
  return (
    <FooterStyles.FooterContentWrapper>
      {arr.map((link) => (
        <FooterStyles.IconLink
          key={link.title}
          to={link.link}
          target={link.target}
          dangerouslySetInnerHTML={{ __html: link.title }}
        ></FooterStyles.IconLink>
      ))}
    </FooterStyles.FooterContentWrapper>
  );
}

export default function Footer() {
  return (
    <FooterStyles.FooterWrapper>
      <FooterIcons />
    </FooterStyles.FooterWrapper>
  );
}
