import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="p-4">
      <h1>CMSdash</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default SetupPage;
