import ProfileTab from "./ProfileTab";
import SectionTitle from "./SectionTitle";
import ProfileCard from "./ProfileCard";

export function ProfileFeed() {
  return (
    <>
      <SectionTitle />

        <ProfileTab />
      <div className="flex">
        <ProfileCard />

        </div>
    </>
  );
}
