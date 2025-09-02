"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'highlight' }}>
      <NavbarLayoutSplitBottom
        logoSrc="/images/logo.svg"
        logoWidth={100}
        logoHeight={100}
        buttonText="Join the Meme"
        onButtonClick={() => {}}
        navItems={[
          { name: 'Hero', id: 'hero' },
          { name: 'About', id: 'about' },
          { name: 'How to Buy', id: 'how-to-buy' },
          { name: 'Tokenomics', id: 'tokenomics' },
          { name: 'Footer', id: 'footer' }
        ]}
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to MemeSpark Coin"
          subtitle="Join the community of meme lovers"
          contractAddress="0x1234567890"
          copyButtonText="Copy Address"
          copiedText="Address copied!"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About MemeSpark"
          descriptions={["A fun and engaging way to propagate memes.", "Join us in our hilarious journey!"]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Tokenomics Overview"
          description="Understanding the distribution and use of our tokens."
          tokenData={[
            { value: "1M", description: "Total Supply" },
            { value: "500K", description: "Circulating Supply" },
            { value: "50K", description: "Marketing Funding" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="MemeSpark Logo"
          logoText="MemeSpark"
          columns={[
            { items: [{ label: 'Privacy Policy', onClick: () => {} }, { label: 'Terms of Service', onClick: () => {} }] },
            { items: [{ label: 'Support', onClick: () => {} }, { label: 'Contact Us', onClick: () => {} }] },
            { items: [{ label: 'FAQ', onClick: () => {} }, { label: 'Blog', onClick: () => {} }] },
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}