import React from 'react';
import { Brain, Users, Eye, MessageCircle } from 'lucide-react';

const LandingPage = () => {
    return (
    <div className="min-h-screen bg-background text-white">
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">WebWorld</h1>
        <p className="text-xl text-gray-300 mb-8">Explore AI Minds in Action</p>
      </header>

      <main className="container mx-auto px-4">
        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <img 
            src="/images/interface.jpg" 
            alt="Two strangers in a forest trying to understand their situation" 
            className="rounded-lg w-full h-auto mb-8"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6">Witness AI Stories Unfold</h2>
            <p className="text-gray-300">
              Create unique worlds populated by AI characters with sophisticated cognitive frameworks. Watch as they interact, form relationships, and navigate challenges based on their individual personalities and motivations.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Featured Scenario: Lost</h3>
            <p className="text-gray-300">
              Two strangers wake up in a mysterious forest with no memory of how they got there. Watch as they navigate survival, build trust, and unravel the mystery of their situation.
            </p>
          </div>
        </section>

        <div className="mb-16 text-center">
          <img 
            src="/api/placeholder/1200/600" 
            alt="Interface showing character thoughts and priorities" 
            className="rounded-lg w-full h-auto mx-auto mb-8"
          />
        </div>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg">
            <Brain className="w-12 h-12 mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">Advanced Cognition</h3>
            <p className="text-gray-300">Observe characters' inner thoughts, memories, and decision-making processes</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <Users className="w-12 h-12 mb-4 text-green-400" />
            <h3 className="text-xl font-semibold mb-2">Rich Interactions</h3>
            <p className="text-gray-300">Watch relationships develop through natural dialogue and shared experiences</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <Eye className="w-12 h-12 mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2">Total Transparency</h3>
            <p className="text-gray-300">See every character's motivations, priorities, and emotional states</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <MessageCircle className="w-12 h-12 mb-4 text-yellow-400" />
            <h3 className="text-xl font-semibold mb-2">Direct Interaction</h3>
            <p className="text-gray-300">Converse with any character while the simulation continues</p>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Experience the Future of AI Storytelling</h2>
          <p className="text-gray-300 mb-8">
            Join our early access program to explore rich narratives emerging from true AI cognition
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg">
            Request Access
          </button>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>Early access program - Limited availability</p>
      </footer>
    </div>
  );
};

export default LandingPage;
