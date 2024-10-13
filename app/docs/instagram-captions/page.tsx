export default function InstagramCaptions() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 text-white">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-extrabold text-center mb-12">
          Captivate Your Audience with Engaging Captions
        </h1>
        <p className="text-xl text-center mb-16">
          Create captivating Instagram captions that resonate with your
          followers and boost engagement.
        </p>
        <div className="flex justify-center">
          <ul className="space-y-8 max-w-3xl">
            <li className="bg-gray-900 p-8 rounded-lg shadow-lg hover:bg-gray-800">
              <h2 className="text-2xl font-semibold mb-4">
                Hook Your Audience
              </h2>
              <p>
                Start with a compelling hook that makes your followers stop
                scrolling.
              </p>
            </li>
            <li className="bg-gray-900 p-8 rounded-lg shadow-lg hover:bg-gray-800">
              <h2 className="text-2xl font-semibold mb-4">Keep It Concise</h2>
              <p>
                Our AI helps you create concise, engaging captions that drive
                interaction.
              </p>
            </li>
            <li className="bg-gray-900 p-8 rounded-lg shadow-lg hover:bg-gray-800">
              <h2 className="text-2xl font-semibold mb-4">
                Add a Call to Action
              </h2>
              <p>
                Encourage followers to engage with a strong call to action. Ask
                a question, start a conversation!
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
