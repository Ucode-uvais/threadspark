export default function GettingStarted() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-gray-100">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-6xl font-extrabold text-center text-white mb-8">
          Welcome to Your Journey
        </h1>
        <p className="text-lg text-center text-gray-200 mb-16">
          Setting up is a breeze. Follow these simple steps to unlock the power
          of AI-generated content.
        </p>
        <div className="flex justify-center">
          <ul className="space-y-6 max-w-2xl">
            <li className="text-xl bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700">
              <strong>Step 1:</strong> Create an account to personalize your
              experience.
            </li>
            <li className="text-xl bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700">
              <strong>Step 2:</strong> Choose your first template and start
              experimenting with content generation.
            </li>
            <li className="text-xl bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700">
              <strong>Step 3:</strong> Customize your content and hit
              “Generate.”
            </li>
            <li className="text-xl bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700">
              <strong>Step 4:</strong> Share your creation with the world!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
