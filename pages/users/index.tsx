import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const UsersPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        <Button title="Add User" />
      </main>
    </div>
  )
}

export default UsersPage;
