import { getCsrfToken, getProviders } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function mine() {
  const [providers, setProviders] = useState(null);
  const [csrfToken, setCsrfToken] = useState(null)


  useEffect(async () => {
    if (providers === null) {
        setProviders(await getProviders())
    }
    if (csrfToken === null) {
        setCsrfToken(await getCsrfToken())
    }
  }, [])

  console.log(providers, csrfToken)

  return (
    <div>
      {Object.values(providers).map((provider) => {
        return (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}
