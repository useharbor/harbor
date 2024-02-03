import React from "react";
import Footer from "../components/footer";
import { ReactComponent as SolveImg } from '../assets/solvePattern.svg';
import { ReactComponent as PublishImg } from '../assets/publishPattern.svg';

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="flex border-r border-white w-1/2 flex-wrap">
          <div className="flex-1 p-20 bg-cobalt-blue text-white">
            <div className="flex flex-col items-left">
              <h1 className="text-[64px] mb-4 font-semibold">Solve</h1>
              <p className="text-[28px] mb-4">Solve translation problems and get paid out in crypto</p>
            </div>
          </div>
          <div className="flex-1 p-12 bg-cobalt-blue text-white">
            <SolveImg
              style={{ width: '300px', height: '300px' }}
            />
          </div>
        </div>
        <div className="flex border-r border-white w-1/2 flex-wrap">
          <div className="flex-1 p-20 bg-cobalt-blue text-white">
            <div className="flex flex-col items-left">
              <h1 className="text-[64px] mb-4 font-semibold">Publish</h1>
              <p className="text-[28px] mb-4">Use crowdsourcing to perform and validate your translation tasks</p>
            </div>
          </div>
          <div className="flex-1 p-12 bg-cobalt-blue text-white">
            <div>
              <PublishImg
                style={{ width: '300px', height: '300px' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Harbor is a project to translate text with human validation</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>

        <h2>How it works</h2>
        <p>
          Anyone can publish a translation problem. Input the content you want
          translated and fuel the problem with a cryptocurrency reward. The
          problem will be solved by the community and validated by other
          members. Once the problem is solved and validated, the reward will be
          distributed to the workers.
        </p>

        <h2>Why Harbor</h2>
        <p>
          Traditional translation services are expensive, slow, and unreliable.
          Technologies like Google Translate and LLMs still make frequent
          mistakes. There is no guarantee the output is correct and results
          often miss the idiosyncrasies of a language, which can compromise your
          mission. Through crowdsourcing, Harbor passes your translation through
          hundreds and thousands of native language speakers. This ensures the
          highest quality translation and validation. Harbor is the best way to
          get accurate translations and validation at a fraction of the cost.
        </p>

        <h2>Get started</h2>
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
