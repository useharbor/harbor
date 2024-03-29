import React from "react";
import Footer from "../components/footer";
import { ReactComponent as SolveImg } from '../assets/solvePattern.svg';
import { ReactComponent as PublishImg } from '../assets/publishPattern.svg';
import { useCurrentUser } from '../UserContext';


export default function Home() {
  const { currentUser, setCurrentUser } = useCurrentUser();
  return (
    <>
      <div className="flex">
        <div className="flex border-r border-white w-1/2 flex-wrap">
          <div className="flex-1 p-20 bg-cobalt-blue text-white">
            <div className="flex flex-col items-left">
              <h1 className="text-[64px] mb-4 font-semibold">Solve</h1>
              <p className="text-[30px] mb-4">Solve translation problems and get paid out in crypto</p>
            </div>
          </div>
          <div className="flex-1 p-14 bg-cobalt-blue text-white">
            <SolveImg
              style={{ width: '300px', height: '300px' }}
            />
          </div>
        </div>
        <div className="flex border-r border-white w-1/2 flex-wrap">
          <div className="flex-1 p-20 bg-cobalt-blue text-white">
            <div className="flex flex-col items-left">
              <h1 className="text-[64px] mb-4 font-semibold">Publish</h1>
              <p className="text-[30px] mb-4">Use crowdsourcing to perform and validate your translation tasks</p>
            </div>
          </div>
          <div className="flex-1 p-14 bg-cobalt-blue">
            <div>
              <PublishImg
                style={{ width: '300px', height: '300px' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-800 p-12">
        <h2 className="text-[30px] mb-8 border-b-2 border-gray-400 pb-2">Harbor is a project to translate text with human validation</h2>
        <p className="mb-10">
        Harbor stands out from traditional online translators like Google Translate 
        by addressing their limitations. While these automated services may offer quick 
        translations, they often lack accuracy and struggle with cultural nuances 
        and context. Harbor combines human validation with advanced technology, 
        engaging native speakers to provide precise and culturally sensitive translations. 
        </p>

        <h2 className="text-[30px] mb-18 mt-10">How it works</h2>
        <p className="mb-4">
          Anyone can publish a translation problem. Input the content you want
          translated and fuel the problem with a cryptocurrency reward. The
          problem will be solved by the community and validated by other
          members. Once the problem is solved and validated, the reward will be
          distributed to the workers.
        </p>

        <h2 className="text-[30px] mb-18 mt-10">Why Harbor</h2>
        <p className="mb-4">
          Traditional translation services are expensive, slow, and unreliable.
          Technologies like Google Translate and LLMs still make frequent
          mistakes. There is no guarantee the output is correct and results
          often miss the idiosyncrasies of a language, which can compromise your
          mission. Through crowdsourcing, Harbor passes your translation through
          hundreds and thousands of native language speakers. This ensures the
          highest quality translation and validation. Harbor is the best way to
          get accurate translations and validation at a fraction of the cost.
        </p>

        <h2 className="text-[30px] mb-18 mt-10">Get started</h2>
        <p>
          As as worker, you can solve a problem by translating the content and
          correcting any mistakes you see. You will be rewarded with
          cryptocurrency, proportional to your impact for your work. As a
          publisher, you can create a problem by inputting the content you want
          to get translated and fueling the problem with a cryptocurrency
          reward. Once the problem is solved and validated, you will receive the
          translated text and the reward will be distributed to the workers.
        </p>
      </div>
      <Footer></Footer>
    </>
  );
}