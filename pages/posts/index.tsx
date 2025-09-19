import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

const PostsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        <PostCard title="First Post" content="This is the content of the first post." />
      </main>
    </div>
  )
}

export default PostsPage;
