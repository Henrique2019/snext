import axios from "axios";

const SSR = (props) => (
  <>
    <h1>GitHub info about {props.login}</h1>

    <ul>
      <li>name: {props.name}</li>
      <li>repos: {props.public_repos}</li>
      <li>followers: {props.followers}</li>
    </ul>
  </>
);

export default SSR;

export async function getServerSideProps({ query }) {
  try {
    const { data } = await axios(`https://api.github.com/users/${query.user}`);

    return {
      props: data,
    };
  } catch (error) {
    console.error(error);
  }
}