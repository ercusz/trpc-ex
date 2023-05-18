/**
 * This is a Next.js page.
 */
import { trpc } from "../utils/trpc";

// 👇🏻 NO LONGER NEEDED!
// type UserType = {
//   id: number;
//   firstName: string;
//   lastname: string;
// }

const Home = () => {
  const { data: user } = useUser();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <h1>
      Hello, {`${user.name} ${user.lastName}`}
    </h1>
  );
};

export default Home;

export const useUser = () => trpc.user.useQuery();
