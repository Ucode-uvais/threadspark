import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <SignUp
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
