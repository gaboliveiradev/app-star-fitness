import React from "react";
import Search from "../components/training/Search";
import { EcommerceCard } from "../components/training/Card";

export default function AddTraining() {
  return (
    <>
      <article className="flex-auto h-full mx-auto rounded-md w-full p-4">
        <div>
          <div className="flex-auto pb-[14px]">
            <h1 class="title">Planejar Treino</h1>
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
                <span class="active">Planejar Treino</span>
              </li>
            </ul>
          </div>
          <div className="pt-[20px]">
            <Search />
          </div>
          <div className="pt-[40px]">
            <div className="">
              <EcommerceCard />
            </div>
            
          </div>
          
        </div>
      </article>
    </>
  );
}
