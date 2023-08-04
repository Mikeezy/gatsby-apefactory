import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Typed from "react-typed"
import { InfoService } from '../components/index';
import { graphql } from 'gatsby';


const IndexPage: React.FC<PageProps> = ({ data }: any) => {

  const { allContentfulPage } = data;

  return (
    <main className="w-full" style={{
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
    }} >

      <div className="w-full h-auto laptop:h-screen bg-cover px-6 pt-2.5 flex items-center flex-col" style={{
        backgroundImage: `url("https://assets.website-files.com/5fff751f9a6374e5207723f6/5fff76ca02504b45cae4aef9_home-hero.jpg")`,
      }} >

        <div className="h-[60px] w-full laptop:w-[940px] flex flex-row justify-between items-center"  >
          <img src="https://assets.website-files.com/5fff751f9a6374e5207723f6/5fff76d2175cf846e630abad_logo_white.svg" alt="ape factory - design. develop. repeat." width="250" height="" />

          <div className="flex flex-row space-x-8 laptop:space-x-12" >
            <div>
              <p className="font-bold text-white uppercase" >We're hiring !</p>
            </div>

            <div className="flex flex-row space-x-2" >
              <p className="text-white " >EN</p>
              <p className="text-white " >DE</p>
            </div>
          </div>
        </div>

        <div className="w-full laptop:w-[940px] mt-[10%]" >
          <img src="https://assets.website-files.com/5fff751f9a6374e5207723f6/5fff76d2175cf846e630abad_logo_white.svg" alt="ape factory - design. develop. repeat." width="839" height="" />
        </div>

        <div className="w-full laptop:w-[940px] text-white flex flex-col space-x-1" style={{
          marginTop: "20vh"
        }} >
          <h1 className="font-normal text-[2.5em] laptop:text-[3.5em] leading-[1.4em]" style={{
            fontFamily: "Raleway, sans-serif",
          }} >{allContentfulPage?.nodes[0]?.services?.welcome_title_1}</h1>

          <div className="flex flex-row items-end space-x-3" >
            <h1 className="font-normal text-[2.5em] laptop:text-[3.5em] leading-[1.4em]" style={{
              fontFamily: "Raleway, sans-serif",
            }} >
              {allContentfulPage?.nodes[0]?.services?.welcome_title_2}
            </h1>

            <Typed
              strings={allContentfulPage?.nodes[0]?.services?.welcome_sercices}
              typeSpeed={100}
              backSpeed={50}
              loop
              className="font-bold text-[2.5em] laptop:text-[3.5em] leading-[1.4em]"
            />
          </div>

        </div>

        <div className="flex items-center justify-center w-full mt-[8vh]" >
          <img src="https://assets.website-files.com/5fff751f9a6374e5207723f6/6003fc1fe7800d586a1bf39b_arrow-down.png" loading="lazy" sizes="50px" srcSet="https://assets.website-files.com/5fff751f9a6374e5207723f6/6003fc1fe7800d586a1bf39b_arrow-down-p-500.png 500w, https://assets.website-files.com/5fff751f9a6374e5207723f6/6003fc1fe7800d586a1bf39b_arrow-down.png 807w" alt="Go to services" width="50" />
        </div>


      </div>

      <div className="w-full h-auto bg-cover px-[10vw] pt-[5vh] flex items-center flex-col bg-black text-white" >
        <div className="flex flex-col items-start justify-center w-full laptop:w-[940px]" >
          <h2 className="mt-[10%] opacity-25 font-normal text-[32px] leading-[36px] mb-[10px]">{allContentfulPage?.nodes[0]?.services?.service_data?.title}</h2>
          <h3 className="my-[5vh] font-normal text-left text-[20px] leading-[25px] laptop:text-[24px] laptop:leading-[30px] mb-[10px] mt-[20px]">{allContentfulPage?.nodes[0]?.services?.service_data?.description}</h3>
          <div className="my-[50px] grid grid-cols-2 laptop:grid-cols-4 gap-2 auto-rows-auto" >
            {allContentfulPage?.nodes[0]?.services?.service_data?.services?.map((service: any, index: number) => (
              <InfoService key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Cloud Native Services | Cloud Operations | ape factory</title>

export const query = graphql`
  query {
    allContentfulPage {
      nodes {
        id
        services {
          welcome_title_1
          welcome_title_2
          welcome_sercices
          service_data {
            title
            description
            services {
              title
              icon
              descriptions
            }
          }
        }
      }
    }
  }
`;
