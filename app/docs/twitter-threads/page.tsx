export default function TwitterThreads() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-800 text-white">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-6xl font-bold text-center mb-12">
          Craft Twitter Threads that Spark Conversations
        </h1>
        <p className="text-xl text-center mb-16">
          Leverage the power of AI to build threads that not only grab attention
          but encourage meaningful engagement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Step 1: Choose Your Theme
            </h2>
            <p className="text-gray-300">
              Select a topic or theme that aligns with your brand’s voice or the
              message you want to convey.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Step 2: Use AI to Structure the Thread
            </h2>
            <p className="text-gray-300">
              Our AI suggests a compelling structure and provides engaging hooks
              for each tweet.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Step 3: Edit and Refine
            </h2>
            <p className="text-gray-300">
              Customize the thread to suit your tone of voice and goals. Our
              editor gives you full control.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Step 4: Post and Watch it Spread
            </h2>
            <p className="text-gray-300">
              Hit publish and share your thread with your followers. Track the
              engagement in real time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
