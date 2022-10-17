import Head from "next/head";
import { getSession, useSession } from "next-auth/react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const createGoal = async (testtt) => {
    const randomNum = Math.floor(Math.random() * 1000);
    const res = await fetch("/api/goals/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `Test ${randomNum}`,
        email: `test${randomNum}@test.com`,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <h1>Next App</h1>
      <button
        onClick={() =>
          createGoal({
            title: "My super secret goal",
            description: "Shhh, its a secret!",
          })
        }
      >
        Click me!
      </button>
    </div>
  );
}

// export const getServerSideProps = async ({ params }) => {
//   const res = await axios.get(`http://localhost:3000/api/goals/${params.id}`);
//   return {
//     props: { goals: res.data },
//   };
// };

// export const getServerSideProps = async (context) => {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       props: {},
//       redirect: { destination: "/login" },
//     };
//   } else {
//     return { props: { session } };
//   }
// };