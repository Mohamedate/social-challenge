import { followers } from "../data";
import Follower from "./Follower";

export default function Followers() {
  return (
    <div className="grid-cols-my-grid grid gap-8">
      {followers.map((follower) => (
        <Follower follower={follower} key={follower.code} />
      ))}
    </div>
  );
}
