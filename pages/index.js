import WorkSpace from "../src/components/WorkSpace";

export default function HomeScreen() {
  return (
    <WelcomeBanner />
  );
};

function WelcomeBanner() {
  return (
    <WorkSpace data-banner="welcome">
      <h1>Welcome</h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia distinctio voluptas repellat nam culpa quisquam modi sunt dolore cupiditate voluptatum? </p>
    </WorkSpace>
  );
}
