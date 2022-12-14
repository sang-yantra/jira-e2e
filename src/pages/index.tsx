import { PrismaClient } from "@prisma/client";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { prisma } from "../db/client";
import { trpc } from "../utils/trpc";

const Home: NextPage = (props: any) => {
  const { data, isLoading } = trpc.useQuery(["tasks"]);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="bg-slate-700 rounded-lg p-4 m-auto w-[90%] flex justify-center align-middle">
        your tasks
        {data?.map((task) => {
          return (
            <div key={task.ID} className="">
              <span>task {task.TITLE}</span>
            </div>
          );
        })}
      </div>
    );
  }
};

// export const getServerSideProps = async () => {

//   const questions = await prisma.pollQuestion.findMany();
//   return {
//     props : {
//       questions: JSON.stringify(questions)
//     }
//   }
// }

export default Home;
