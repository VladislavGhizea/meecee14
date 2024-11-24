import "./sentry";
import server from "./apolloServer";

server.listen().then(({ url }) => {
  console.log(`🚀 Server pronto all'indirizzo ${url}`);
});
