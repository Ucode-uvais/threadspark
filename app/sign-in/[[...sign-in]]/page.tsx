import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-orange-500 hover:bg-orange-600 text-sm normal-case",
          },
        }}
      />
    </div>
  );
}
