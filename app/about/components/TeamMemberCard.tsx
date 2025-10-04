type Props = {
    name: string;
    role: string;
    image?: string;
};

export default function TeamMemberCard({ name, role, image }: Props) {
    return (
        <div className="
            bg-white/20 p-6 rounded-xl backdrop-blur-md shadow-2xl
            border border-white/30 
            transition-all duration-300 
            hover:scale-[1.03] hover:shadow-yellow-500/60 cursor-pointer
            text-center
        ">
            
            <div className="w-32 h-32 mx-auto mb-4 border-4 border-yellow-400 rounded-full overflow-hidden shadow-lg">
                {image ? (
                    <img
                        src={image}
                        alt={`Foto de ${name}`}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-700 text-white text-3xl">
                        🥵
                    </div>
                )}
            </div>
            
            <h3 className="text-3xl font-extrabold text-white uppercase tracking-wider mb-1">
                {name}
            </h3>
            
            <p className="text-lg text-yellow-300 font-medium mb-4">
                {role}
            </p>
        </div>
    );
}