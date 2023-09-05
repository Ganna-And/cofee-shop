import { useClerk } from "@clerk/clerk-react";

export const SignOutButton = () => {
  const { signOut } = useClerk();
  return (
    <button onClick={() => signOut()} >
      Sign out
    </button>
  );
};