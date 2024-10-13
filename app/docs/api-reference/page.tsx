export default function APIReference() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold text-center mb-12">
          API Reference Documentation
        </h1>
        <p className="text-lg text-center mb-16">
          Detailed documentation for integrating our AI content generation into
          your applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
            <p className="text-gray-300">
              Learn how to authenticate your requests using API keys.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Endpoints</h2>
            <p className="text-gray-300">
              Detailed descriptions of each API endpoint and how to use them.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Rate Limiting</h2>
            <p className="text-gray-300">
              Understand how to manage your API usage and avoid hitting rate
              limits.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Error Handling</h2>
            <p className="text-gray-300">
              Learn how to handle errors and ensure smooth user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
