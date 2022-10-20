import React from "react";
import { getSession, signIn, signOut } from "next-auth/react";

export default function home(props) {
    console.log(props)
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      props: { session },
      redirect: { destination: "/" },
    };
  } else {
    return { props: { session } };
  }
};
