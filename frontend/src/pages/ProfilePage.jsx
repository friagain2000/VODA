import Feed from "../components/Feed";
import ProfileFeed from "../components/ProfileFeed";

// TODO: 사용자 프로필 페이지 구현
const ProfilePage = () => {
  return (
    <div className="text-white px-12 py-16">
      <h1 className="text-3xl font-bold">프로필</h1>
      <Feed
        type="play" // HCard를 사용하는 가로형 피드 타입
        title="시청 중인 콘텐츠"
        sub="이어보기"
        items={popularMovies.slice(0, 5)}
        mediaType="movie"
      />
      <ProfileFeed />
    </div>
  );
};

export default ProfilePage;
