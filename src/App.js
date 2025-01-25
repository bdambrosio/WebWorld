import React from 'react';
import { Brain, Users, Eye, MessageCircle } from 'lucide-react';
import './App.css';

const SCENARIO_CODE = `import sys, os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
import sim.worldsim as worldsim
import sim.context as context, sim.agh as agh

# Create characters
S = agh.Agh("Samantha", """You are a young woman. 
You love the outdoors and hiking.
You are intelligent, introspective, philosophical and a bit of a romantic, but keep this mostly to yourself. 
You have a painful history, maybe it is just as well you don't remember it.
You are very informal, chatty, and think and speak in teen slang, and are a playful and flirty when relaxed. 
You are comfortable on long treks, and are unafraid of hard work. 
You are suspicious by nature, and wary of strangers. 
Your name is Samanatha""")

S.set_drives([
    "solving the mystery of how they ended up in the forest with no memory.",
    "love and belonging, including home, acceptance, friendship, trust, intimacy.",
    "immediate physiological needs: survival, shelter, water, food, rest."
])

S.add_to_history("You think This is very very strange. Where am i? I'm near panic. Who is this guy? How did I get here? Why can't I remember anything?")

J = agh.Agh("Joe", """You are a young man, intelligent and self-sufficient. 
You are informal and somewhat impulsive. 
You are strong, and think you love the outdoors, but are basically a nerd.
You yearn for something more, but don't know what it is.
You are socially awkward, especially around strangers. 
You speak in informal teen style.
Your name is Joe.""")

J.set_drives([
    "communication and coordination with Samantha, gaining Samantha's trust.",
    "solving the mystery of how they ended up in the forest with no memory.",
    "immediate physiological needs: survival, shelter, water, food, rest."
])

J.add_to_history("You think Ugh. Where am I?. How did I get here? Why can't I remember anything? Who is this woman?")

W = context.Context([S, J],
                """A temperate, mixed forest-open landscape with no buildings, roads, or other signs of humananity. 
It is a early morning on what seems like it will be a warm, sunny day.
""")`;

const App = () => {
    return (
        <div className="landing-page">
            <header className="header">
                <h1>WebWorld</h1>
                <p className="subtitle">Explore AI Minds in Action</p>
            </header>

            <main className="main-content">
                <section className="hero-section">
                    <div className="screenshot-container">
                        <img 
                            src="/images/interface.jpg" 
                            alt="Two strangers in a forest trying to understand their situation" 
                            className="hero-image"
                        />
                    </div>
                    <div className="hero-content">
                        <h2>Witness AI Stories Unfold</h2>
                        <p>
                            Create unique worlds populated by AI characters with sophisticated cognitive frameworks. 
                            Watch as they interact, form relationships, and navigate challenges based on their 
                            individual personalities and motivations.
                        </p>
                    </div>
                </section>

                <section className="featured-scenario">
                    <h3>Featured Scenario: Lost</h3>
                    <pre className="code-display">
                        <code>
                            {/* Your Python code will go here */}
                        </code>
                    </pre>
                    <p>
                        Two strangers wake up in a mysterious forest with no memory of how they got there. 
                        Watch as they navigate survival, build trust, and unravel the mystery of their situation.
                    </p>
                </section>

                <div className="interface-preview">
                    <pre className="code-window">
                        <code>{SCENARIO_CODE}</code>
                    </pre>
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
