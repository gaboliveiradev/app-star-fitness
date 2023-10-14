import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";

export default function MyProfile() {
  return (
    <article>
      <div class="flex">
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar src="/broken-image.jpg" sx={{ width: 85, height: 85 }} />
          </Stack>
        </div>

        <div class="flex-auto pb-[14px] mt-[10px] ml-[20px]">
          <h1 className="title font-Gabarito text-blueProfile ">Jonatan Oliveira</h1>
          <h3 className="mt-[-15px] font-Gabarito text-blueProfile text-opacity-70">Proprietário</h3>
        </div>
      </div>

      <div className="">
        <h1></h1>

      </div>
    </article>
  );
}
