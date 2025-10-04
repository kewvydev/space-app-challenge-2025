import TeamMemberCard from "./components/TeamMemberCard"

export default function AboutPage() {
    return (
        <div className="p-8 flex flex-col min-h-screen items-center justify-start pt-20">
            <h1 className="text-6xl font-extrabold text-yellow-400 mb-6 uppercase tracking-widest text-center">
                About us
            </h1>
            <p className="text-gray-300 text-xl max-w-4xl mb-16 px-4 text-center">
                We are a group of students from the Faculty of Engineering, Architecture and Design
                at the Autonomous University of Baja California, eager to create interesting things and
                challenge ourselves.
            </p>

            <section className="w-full max-w-5xl mb-24 px-4">
                <h2 className="text-5xl font-extrabold text-yellow-400 mb-10 text-center uppercase tracking-wider">
                    About our Project
                </h2>
                <p className="text-gray-300 text-xl max-w-3xl mb-16 px-4">
                    On this page we tell you a story about...
                </p>
            </section>

            <section className="w-full max-w-6xl">
                <h2 className="text-4xl font-bold text-yellow-400 mb-10 text-center">
                    The Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <TeamMemberCard
                    name = "Kevin"
                    role = "Developer"
                    />

                    <TeamMemberCard
                    name = "Eduardo"
                    role = "Developer"
                    />

                    <TeamMemberCard
                    name = "Brandon"
                    role = "Developer"
                    image="brandon.jpg"
                    />

                    <TeamMemberCard
                    name = "Gael"
                    role = "Developer"
                    />

                    <TeamMemberCard
                    name = "Isis"
                    role = "Designer"
                    />
                </div>
            </section>
        </div>
    )
}
