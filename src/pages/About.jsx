import { FaReact, FaNodeJs, FaPhp, FaHtml5, FaCss3Alt, FaJs, FaFigma, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiPostman, SiCanva, SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const About = () => {
    return (
        <div className="bg-gray-900 text-white py-20 px-6 md:px-12 flex justify-center">
            <div className="max-w-6xl w-full text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-blue-500">
                    About Me
                </h2>

                <p className="text-lg md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
                    I’m Bhanu Sharma, a Full-Stack Developer passionate about building modern, scalable web applications.
                    I have experience in frontend & backend development and am currently exploring the MERN stack.
                </p>

                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mt-4">
                    I also have basic knowledge of Figma and UI/UX design, which helps me craft user-friendly interfaces.
                </p>

                <div className="mt-12 space-y-10">
                    
                    {/* Frontend Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">🎨 Frontend Development</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-lg text-gray-300">
                            <Skill icon={FaHtml5} name="HTML" color="text-orange-500" />
                            <Skill icon={FaCss3Alt} name="CSS" color="text-blue-400" />
                            <Skill icon={FaJs} name="JavaScript" color="text-yellow-400" />
                            <Skill icon={FaReact} name="React.js" color="text-blue-400" />
                        </div>
                    </div>

                    {/* Backend Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-green-400 mb-4">⚙️ Backend Development</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-lg text-gray-300">
                            <Skill icon={FaNodeJs} name="Node.js" color="text-green-500" />
                            <Skill icon={SiExpress} name="Express.js" color="text-gray-400" />
                            <Skill icon={FaPhp} name="PHP" color="text-indigo-500" />
                        </div>
                    </div>

                    {/* Database Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-yellow-400 mb-4">🗄️ Database</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-lg text-gray-300">
                            <Skill icon={SiMongodb} name="MongoDB" color="text-green-400" />
                            <Skill icon={SiMysql} name="MySQL" color="text-blue-500" />
                        </div>
                    </div>

                    {/* UI/UX Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-pink-400 mb-4">🎨 UI/UX & Design</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-lg text-gray-300">
                            <Skill icon={FaFigma} name="Figma" color="text-pink-400" />
                            <Skill icon={SiCanva} name="Canva" color="text-blue-500" />
                        </div>
                    </div>

                    {/* Tools & Technologies Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-purple-400 mb-4">🛠️ Tools & Technologies</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-lg text-gray-300">
                            <Skill icon={FaGitAlt} name="Git" color="text-orange-400" />
                            <Skill icon={VscVscode} name="VS Code" color="text-blue-400" />
                            <Skill icon={SiPostman} name="Postman" color="text-orange-400" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

// Reusable Skill Component
const Skill = ({ icon: Icon, name, color }) => {
    return (
        <div className="flex items-center gap-2 bg-gray-800 p-3 rounded-lg">
            <Icon className={`${color} text-2xl`} />
            <span>{name}</span>
        </div>
    );
};

export default About;
