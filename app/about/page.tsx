import Link from "next/link";
import TeamMemberCard from "./components/TeamMemberCard";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <header className="w-full flex items-center justify-between px-8 pt-10 pb-10 bg-black/40 rounded-4xl">
                <img src="/NASA_logo.png" alt="NASA" className="h-40 ml-10 " />
                <div className="w-1 h-20 bg-white/70 mx-1 rounded"></div>
                <div className="text-yellow-200 text-4xl md:text-5xl font-bold text-center font-serif drop-shadow-lg">
                    The Ballad Broken <br className="hidden md:block" /> of the Shield
                </div>
                <div className="w-1 h-20 bg-white/70 mx-6 rounded"></div>
                <img src="/SpaceAppChallenge_logo.png" alt="Space Apps" className="h-16" />
            </header>

                <section className="w-full max-w-5xl mb-24 px-4">
                    <h2 className="text-4xl font-extrabold text-yellow-400 mb-10 text-center uppercase tracking-wider">
                        About our Project
                    </h2>
                    <p className="text-gray-300 text-2xl max-w-3xl mb-16 px-4">
                        On this page we tell you a story about...
                    </p>
                </section>

                 <div className="p-8 flex flex-col w-full items-center justify-start pt-20">
                <h1 className="text-4xl font-extrabold text-yellow-400 mb-6 uppercase tracking-widest text-center">
                    About us
                </h1>
                <p className="text-gray-300 text-2xl max-w-4xl mb-16 px-4 text-center">
                    We are a group of students from the Faculty of Engineering, Architecture and Design
                    at the Autonomous University of Baja California, eager to create interesting things and
                    challenge ourselves.
                </p>


                <section className="w-full max-w-6xl">
                    <h2 className="text-4xl font-bold text-yellow-400 mb-10 text-center">
                        The Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <TeamMemberCard
                            name="Kevin"
                            role="Developer"
                            image="kevin.png"
                        />

                        <TeamMemberCard
                            name="Eduardo"
                            role="Developer"
                            image="pelon.jpg"
                        />

                        <TeamMemberCard
                            name="Brandon"
                            role="Developer"
                            image="brandon.jpg"
                        />

                        <TeamMemberCard
                            name="Gael"
                            role="Developer"
                            image="gael.jpg"
                        />

                        <TeamMemberCard
                            name="Isis"
                            role="Designer"
                            image="isis.jpg"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}