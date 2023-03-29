import Navbar from "../components/Navbar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleConfig from "../particles/particlesjs-config.json";
import AchievementsItem from "../components/AchievementsItem";
import SemantikLogo from "../img/Semantik6.0-Logo.png";
import PekanITLogo from "../img/PekanITLogo.png";
import DigitalentLogo from "../img/DigitalentLogo.png";
import BugHuntingLogo from "../img/BugHuntingLogo.png";
import OuseanLogo2 from "../img/OuseanLogo2.webp";

const Achievements = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };
    const element = (
        <>
            <Navbar />

            <div className="w-full h-full flex justify-center bg-white">
                <Particles id="tsparticles" options={ParticleConfig} init={particlesInit} />
                <div className="bg-white flex justify-center font-poppins mt-20 pt-16 w-3/4 h-3/4">
                    <div className="bg-white w-full flex flex-wrap justify-center font-poppins">
                        <AchievementsItem logo={DigitalentLogo} title="BNSP Certified Junior Web Developer @2021" issuer="Digital Talent • Kementrian Komunikasi and Informatika Republik Indonesia" link="https://drive.google.com/file/d/1kZDZGjG56a_IuR7jBwSj1FtalWTYzu_I/view?usp=sharing" />
                        <AchievementsItem logo={DigitalentLogo} title="BNSP Certified Junior Web Developer @2022" issuer="Digital Talent • Kementrian Komunikasi and Informatika Republik Indonesia" link="https://drive.google.com/file/d/1N2bcl9qojryDtZIWU96qxjeOfADujoAm/view?usp=sharing" />
                        <AchievementsItem logo={SemantikLogo} title="1st Place Winner of Web Development Competition" issuer="SEMANTIK 6.0 • Himpunan Teknik Informatika Universitas Singaperbangsa Karawang" link="https://drive.google.com/file/d/1eNFMbIHjJR0porNKPEbx9FiA24wHKgn8/view?usp=sharing" />
                        <AchievementsItem logo={PekanITLogo} title="1st Place Winner of Software Development Competition" issuer="PEKAN IT 4.0 • Himpunan Teknik Informatika Universitas Singaperbangsa Karawang" link="https://drive.google.com/file/d/1JhO9ikHLYSfEvBqP-3s36HyLyq-FCZg3/view?usp=sharing" />
                        <AchievementsItem logo={BugHuntingLogo} title="Found Critical Website Bugs" issuer="Direktorat Teknik Informatika Universitas Brawijaya" link="https://drive.google.com/file/d/1S6gghTlEAo9VqFogiH4nhbt3Cj6NgEfp/view?usp=sharing" />
                        <AchievementsItem logo={OuseanLogo2} title="Best Web Developer Intern" issuer="PT. Ousean Global Digital • Internship Program Batch 4" link="https://drive.google.com/file/d/1qEV35AHvnnJ-cLb-4iVc45O6NzhgoLse/view?usp=sharing" />
                    </div>
                </div>
            </div>
        </>
    );

    return element;
}

export default Achievements;