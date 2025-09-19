const PostCard: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  )
}

export default PostCard;
