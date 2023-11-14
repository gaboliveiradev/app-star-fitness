import React from "react";
import { IntroductoryCard } from "../components/training/IntroductoryCard";

export default function IntroductoryTraining() {
  return (
    <>
      <article className="flex-auto h-full mx-auto rounded-md w-full p-4">
        <div>
          <div className="flex-auto pb-[14px]">
            <h1 class="title">Treinos de Introdução</h1>
            <ul class="breadcrumbs">
              <li>
                <span>Principal</span>
              </li>
              <li class="divider">/</li>
              <li>
                <span class="active">Ficha de Treino</span>
              </li>
              <li class="divider">/</li>
              <li>
                <span class="active">Treinos de Introdução</span>
              </li>
            </ul>
          </div>
          
          <div class="pb-[20px] scrollbarConfig flex flex-row flex-wrap justify-center items-center overflow-x-scroll">
            <div className="mt-[30px]">
              <IntroductoryCard title="DOMINGO" />
            </div>
            <div className="mt-[30px]">
              <IntroductoryCard title="SEGUNDA-FEIRA" />
            </div>
            <div className="mt-[30px]">
              <IntroductoryCard title="TERÇA-FEIRA" />
            </div>
            <div className="mt-[30px]">
              <IntroductoryCard title="QUARTA-FEIRA" />
            </div>
            <div className="mt-[30px]">
              <IntroductoryCard title="QUINTA-FEIRA" />
            </div>
            <div className="mt-[30px]">
              <IntroductoryCard title="SEXTA-FEIRA" />
            </div>
            <div className="mt-[30px]">
              <IntroductoryCard title="SÁBADO" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
