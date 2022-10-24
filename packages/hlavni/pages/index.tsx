import React from "react"
import IconRight from "../public/icons/arrow_right.svg"
import Test from "@next/vedlejsi/components/test"
import styled from "styled-components"
import Banner from "@next/vedlejsi/public/icons/banner.svg"

// console.log(Banner)

const TestImage = styled.div`
  width: 100px;
  height: 100px;
    &:after {
      content: "";
      display: block;
      background: url(${Banner}) no-repeat left bottom;
      width: 100px;
      height: 100px;
    }
`

const Wrapper = styled.div`
  width: 50px;
  height: 50px;
`

const Home: React.FC = () => (
  <>
    <>tst
    <Wrapper>
      {/* <IconRight /> */}
      </Wrapper>
      <TestImage>OBRÁZEK</TestImage>
      <Test/>
    </>
  </>
)

export default Home


// import React from "react"
// import Layout from "../components/layout"
// import {
//   H2,
//   Link,
//   ReferencesWithoutBorder,
//   Banner,
//   SectionWrapper,
//   SectionWrapperBackgroundStyle,
//   IconTextIntroductionSection,
//   InnerFloeContainer,
//   TopBottomFloeWrapper,
//   BannerStyle,
// } from "@igloonet-web/shared-ui"
// import CertificatePanel from "../components/index/certificate-panel"
// import BlogSection from "../components/blog-section"

// import { useRssBlogFeed } from "../hooks/use-rss-blog-feed"
// import { LIST_REFERENCES } from "../model/list-references-hp"
// import { ICON_TEXT_INTRODUCTION_INDEX } from "../model/icon-text-introduction-index"

// const IndexPage: React.FC = () => {
//   const rss = useRssBlogFeed()
//   return (
//     <Layout>
//       <Banner
//         style={BannerStyle.HP}
//         orangeHeading="Jediná firma,"
//         blackHeading="kterou budete v on-line světě potřebovat"
//         text="Nejsme továrna, pracujeme raději pro menší množství klientů pořádně. Nebudeme se na vás učit, naši specialisté mají průměrně 6 let zkušeností v oboru."
//       />

//       <TopBottomFloeWrapper>
//         <InnerFloeContainer>
//           <IconTextIntroductionSection
//             negativeMargin
//             heading="Co pro vás zařídíme"
//             data={ICON_TEXT_INTRODUCTION_INDEX}
//           />
//         </InnerFloeContainer>
//       </TopBottomFloeWrapper>

//       <CertificatePanel />

//       <SectionWrapper backgroundStyle={SectionWrapperBackgroundStyle.PrimaryBG}>
//         <H2>Můžete se na nás spolehnout</H2>
//         <ReferencesWithoutBorder anotherReferences={LIST_REFERENCES} />
//         <div className="d-flex justify-content-center mt-3">
//           <Link to="/reference">Další reference</Link>
//         </div>
//       </SectionWrapper>

//       <BlogSection rss={rss} />
//     </Layout>
//   )
// }

// export default IndexPage
