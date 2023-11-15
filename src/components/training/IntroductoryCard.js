import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import React, { Fragment, useState } from "react";
  
  import IntroductoryModal from "./IntroductoryModal";
  
  export function IntroductoryCard({title}) {
    const [open, setOpen] = useState(false);
  
  console.log(open)
  
    return (
      <>
        <Card className="shadow-md mr-8 w-96 h-[400px] dark:bg-boxdark antialiased font-normal text-base leading-default text-slate-500">
          <CardBody className="p-0">
            <div className="text-center relative">
              <h1 className="bg-blueProfile text-white rounded font-sans p-4 ">
                {title}
              </h1>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <div className="flex items-center justify-center mt-[20px]">
              <svg
                onClick={() => setOpen(!open)}
                className="h-8 w-8 text-blueProfile transition-transform hover:scale-110"
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
        <IntroductoryModal isOpen={open}/>

        </>
    );
  }
  