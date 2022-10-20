import { getSession, signIn } from "next-auth/react";
import React from "react";

export default function login() {
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          signIn();
        }}
      >
        Login
      </button>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!!session) {
    return {
      props: { session },
      redirect: { destination: "/" },
    };
  } else {
    return { props: { session } };
  }
};
