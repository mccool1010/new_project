import { FadeIn, SlideIn } from "react-bits"
import "./App.css"

export default function App() {
  return (
    <div>
      <FadeIn duration={600}>
        <header className="header">
          <h1>HARI KRISHNA</h1>
          <p>Computer Science Student & AI/ML Enthusiast</p>
          <p>
            <a href="mailto:harikrishnaarun5@gmail.com">harikrishnaarun5@gmail.com</a> |{" "}
            <a href="tel:9207499037">9207499037</a> |{" "}
            <a href="https://linkedin.com/in/hari-krishna-01378a248" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
        </header>
      </FadeIn>

      <main className="container">
        <SlideIn direction="left" duration={500}>
          <section>
            <h2>Technical Skills</h2>
            <ul>
              <li><b>Programming Languages:</b> C, Java, Python</li>
              <li><b>AI & ML:</b> Supervised Learning, Deep Learning, Computer Vision, Image Classification</li>
              <li><b>Cybersecurity:</b> Malware Analysis, Ethical Hacking, Cuckoo Sandbox</li>
              <li><b>Web & Tools:</b> HTML, CSS, Flask, Figma, OpenCV, TensorFlow, Scikit-learn</li>
            </ul>
          </section>
        </SlideIn>

        <SlideIn direction="right" duration={500}>
          <section>
            <h2>Experience & Projects</h2>
            <ul>
              <li>
                <b>Cybersecurity Internship - CDAC Noida (Aug 2024 - Oct 2024):</b> Analyzed malware samples and learned ethical hacking fundamentals.
              </li>
              <li>
                <b>Cuckoo Sandbox:</b> Built a secure sandbox to detect malicious software behaviors and automate malware analysis.
              </li>
              <li>
                <b>Image Classification Model:</b> Designed a CNN to accurately classify images into multiple categories using TensorFlow.
              </li>
              <li>
                <b>Chatbot with Image Classification:</b> Combined NLP and computer vision to develop an interactive chatbot that interprets image inputs.
              </li>
              <li>
                <b>Sign Detection Model:</b> Real-time hand sign detection using OpenCV and deep learning to support sign language recognition.
              </li>
              <li>
                <b>E-Grievance System:</b> A full-stack platform allowing students to report grievances, with admin and teacher-level workflows.
              </li>
              <li>
                <b>Image-Based Food Nutrition Estimator:</b> AI system estimating calorie and nutrient content from food images.
              </li>
              <li>
                <b>MediHack Healthcare Platform:</b> Created a medicine marketplace with direct video/voice chat, patient consent management, and doctor access to records.
              </li>
              <li>
                <b>Techlift Hackathon - Heart Rate Alert App:</b> Built a responsive frontend for a heart rate monitor and real-time alert app.
              </li>
            </ul>
          </section>
        </SlideIn>

        <FadeIn duration={600}>
          <section>
            <h2>Certifications</h2>
            <ul>
              <li>Machine Learning Specialization - Stanford & DeepLearning.AI</li>
              <li>Foundations of Machine Learning - NPTEL</li>
              <li>Cisco Packet Tracer Badge - Cisco Networking Academy</li>
              <li>Network Basics Badge - Cisco Networking Academy</li>
            </ul>
          </section>
        </FadeIn>

        <SlideIn direction="up" duration={500}>
          <section>
            <h2>Hackathons & Competitions</h2>
            <ul>
              <li>RIBC Hackathon - Participated (entry after cut-off)</li>
              <li>NASA Space Apps Challenge - Game development for space-themed challenge</li>
              <li>MediHack - Developed a full-stack telemedicine platform</li>
              <li>Techlift Hackathon - Created frontend for real-time heart rate monitoring and alerts</li>
            </ul>
          </section>
        </SlideIn>

        <FadeIn duration={600}>
          <section>
            <h2>Education</h2>
            <p><b>B.Tech in Computer Science</b> - LBS College of Engineering, Kasaragod</p>
            <p>October 2022 - Present | 6th Semester</p>
          </section>
        </FadeIn>
      </main>

      <FadeIn duration={600}>
        <footer>
          &copy; 2025 Hari Krishna
        </footer>
      </FadeIn>
    </div>
  )
}
