import React from 'react';
import { Brain, Users, Eye, MessageCircle } from 'lucide-react';
import './App.css';

const App = () => {
    return (
        <div className="landing-page">
            <header className="header">
                <h1>WebWorld</h1>
                <p className="subtitle">Explore AI Minds in Action</p>
            </header>

            <main className="main-content">
                <section className="hero-section">
                    <img 
                        src="/images/interface.jpg" 
                        alt="Two strangers in a forest trying to understand their situation" 
                        className="hero-image"
                    />
                    <div className="hero-text">
                        <h2>Witness AI Stories Unfold</h2>
                        <p>
                            Create unique worlds populated by AI characters with sophisticated cognitive frameworks. 
                            Watch as they interact, form relationships, and navigate challenges based on their 
                            individual personalities and motivations.
                        </p>
                    </div>
                    <div className="featured-scenario">
                        <h3>Featured Scenario: Lost</h3>
                        <p>
                            Two strangers wake up in a mysterious forest with no memory of how they got there. 
                            Watch as they navigate survival, build trust, and unravel the mystery of their situation.
                        </p>
                    </div>
                </section>

                <div className="interface-preview">
                    <img 
                        src="/api/placeholder/1200/600" 
                        alt="Interface showing character thoughts and priorities" 
                        className="interface-image"
                    />
                </div>

                <section className="features-grid">
                    <div className="feature-card">
                        <Brain className="feature-icon blue" />
                        <h3>Advanced Cognition</h3>
                        <p>Observe characters' inner thoughts, memories, and decision-making processes</p>
                    </div>
                    <div className="feature-card">
                        <Users className="feature-icon green" />
                        <h3>Rich Interactions</h3>
                        <p>Watch relationships develop through natural dialogue and shared experiences</p>
                    </div>
                    <div className="feature-card">
                        <Eye className="feature-icon purple" />
                        <h3>Total Transparency</h3>
                        <p>See every character's motivations, priorities, and emotional states</p>
                    </div>
                    <div className="feature-card">
                        <MessageCircle className="feature-icon yellow" />
                        <h3>Direct Interaction</h3>
                        <p>Converse with any character while the simulation continues</p>
                    </div>
                </section>

                <section className="cta-section">
                    <h2>Experience the Future of AI Storytelling</h2>
                    <p>Join our early access program to explore rich narratives emerging from true AI cognition</p>
                    <button className="cta-button">Request Access</button>
                </section>
            </main>

            <footer className="footer">
                <p>Early access program - Limited availability</p>
            </footer>
        </div>
    );
};

export default App;
