import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import React, { Fragment, useState } from "react";

import Modal from "./Modal";

export function EcommerceCard() {
  const [open, setOpen] = useState(false);

console.log(open)

  return (
    <>
      <Card className="w-96 dark:bg-boxdark antialiased font-normal  text-base leading-default text-slate-500">
        {/**<CardHeader shadow={false} floated={false} className="h-96">
            
        </CardHeader>**/}
        <CardBody className="p-0">
          <div className="text-center relative">
            <h1 className="bg-blueProfile text-white rounded font-sans p-4 ">
              SEGUNDA-FEIRA
            </h1>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <div className="flex items-center justify-center mt-[20px]">
            {/**<Button
          ripple={false}
          fullWidth={true}
          className="dark:text-white/80 bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Adicionar Exercício
        </Button>**/}
            <svg
              onClick={() => setOpen(!open)}
              className="h-8 w-8 text-blueProfile transition-transform hover:scale-150"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <circle cx="12" cy="12" r="10" />{" "}
              <line x1="12" y1="8" x2="12" y2="16" />{" "}
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </div>
        </CardFooter>
      </Card>
      <Modal isOpen={open}/>
      </>
  );
}
