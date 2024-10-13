export default function LinkedInPosts() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold text-center mb-12">
          Professional LinkedIn Posts in Minutes
        </h1>
        <p className="text-lg text-center mb-16">
          Learn how to create impactful LinkedIn posts that showcase your
          expertise and professionalism.
        </p>
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-10">
            <li className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">
                Create Thought Leadership
              </h2>
              <p className="text-gray-300">
                Position yourself as a thought leader with AI-generated insights
                that resonate with your audience.
              </p>
            </li>
            <li className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Tell Your Story</h2>
              <p className="text-gray-300">
                Share your personal or professional journey in a way that is
                both authentic and engaging.
              </p>
            </li>
            <li className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">
                Engage with Your Network
              </h2>
              <p className="text-gray-300">
                Include calls to action or thought-provoking questions to spark
                meaningful conversations.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
