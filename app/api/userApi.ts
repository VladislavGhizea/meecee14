interface UserDetails {
  role: string;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  fiscalCode: string;
  address: string;
  postalCode: string;
  city: string;
}

async function signupUser(userDetails: UserDetails) {
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
                mutation {
                    signup(
                        role: "${userDetails.role}",
                        username: "${userDetails.username}",
                        password: "${userDetails.password}",
                        email: "${userDetails.email}",
                        firstName: "${userDetails.firstName}",
                        lastName: "${userDetails.lastName}",
                        fiscalCode: "${userDetails.fiscalCode}",
                        address: "${userDetails.address}",
                        postalCode: "${userDetails.postalCode}",
                        city: "${userDetails.city}"
                    )
                }
            `,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to sign up");
  }
}
async function loginUser(username: string, password: string) {
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
                mutation {
                    login(
                        username: "${username}",
                        password: "${password}"
                    ) {
                        token
                        user {
                            id
                            username
                            role
                            email
                            firstName
                            lastName
                            fiscalCode
                            address
                            postalCode
                            city
                        }
                    }
                }
            `,
    }),
  });
  const data = await response.json();
  console.log(data);
}

async function logoutUser() {
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
                mutation {
                    logout {
                        message
                    }
                }
            `,
    }),
  });

  const data = await response.json();
  console.log(data);
}

export { signupUser, loginUser, logoutUser };
