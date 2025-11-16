// components/Terminal.js
"use client";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

// Import data from existing components
const projectsData = {
  en: [
    {
      title: "E-commerce Platform + Custom Admin",
      description: "Full-stack e-commerce solution with admin dashboard, product management, and order system",
      tech: ["Next.js", "Firebase", "Tailwind", "Stripe"],
      status: "Working Product",
      role: "Full Stack Developer",
    },
    {
      title: "Woman SOS App",
      description: "Emergency mobile app with location sharing and quick alert system",
      tech: ["Flutter", "Firebase", "Google Maps API"],
      status: "Hackathon Project",
      role: "Mobile Developer",
    },
    {
      title: "Level Up Today",
      description: "Habit and goal tracking mobile app with daily streaks and progress dashboard",
      tech: ["Flutter", "Firebase", "Provider"],
      status: "In Development",
      role: "Full Stack Developer",
    },
    {
      title: "IoT Smart Home System",
      description: "Mini IoT project for home automation and monitoring",
      tech: ["Arduino", "Node.js", "React"],
      status: "Completed",
      role: "IoT Developer",
    },
  ],
  mn: [
    {
      title: "E-commerce платформ + админ систем",
      description: "Админ самбар, бүтээгдэхүүн болон захиалгын удирдлагатай иж бүрэн e-commerce шийдэл",
      tech: ["Next.js", "Firebase", "Tailwind", "Stripe"],
      status: "Ажиллаж буй бүтээгдэхүүн",
      role: "Full Stack хөгжүүлэгч",
    },
    {
      title: "Woman SOS апп",
      description: "Байршил хуваалцах, яаралтай дохио илгээх боломжтой хамгаалалтын мобайл апп",
      tech: ["Flutter", "Firebase", "Google Maps API"],
      status: "Хакатоны төсөл",
      role: "Мобайл хөгжүүлэгч",
    },
    {
      title: "Level Up Today",
      description: "Зорилго болон зуршлын хяналттай, өдөр тутмын статистик, ахицын самбартай мобайл апп",
      tech: ["Flutter", "Firebase", "Provider"],
      status: "Хөгжүүлэлт үргэлжилж байна",
      role: "Full Stack хөгжүүлэгч",
    },
    {
      title: "IoT Ухаалаг гэрийн систем",
      description: "Гэрийн автоматжуулалт болон хяналтын мини IoT төсөл",
      tech: ["Arduino", "Node.js", "React"],
      status: "Дууссан",
      role: "IoT хөгжүүлэгч",
    },
  ],
};

const experienceData = {
  en: [
    {
      role: "Software Developer",
      company: "Your Company Name",
      period: "2024–2025",
      description: [
        "Built landing pages and internal tools using Next.js",
        "Created custom admin panels for clients",
        "Improved performance and UI/UX",
        "Collaborated with a small engineering team",
      ],
    },
    {
      role: "Mobile App Developer",
      company: "Freelance",
      period: "2023–2024",
      description: [
        "Developed Flutter applications for various clients",
        "Implemented Firebase integration",
        "Published apps on Play Store",
        "Worked with REST APIs and state management",
      ],
    },
    {
      role: "Web Developer",
      company: "Freelance",
      period: "2022–2023",
      description: [
        "Created responsive websites using React/Next.js",
        "Implemented modern UI/UX designs",
        "Deployed applications on various platforms",
        "Collaborated with designers and clients",
      ],
    },
  ],
  mn: [
    {
      role: "Програм хангамжийн инженер",
      company: "Таны компани",
      period: "2024–2025",
      description: [
        "Next.js-ээр лэндинг болон дотоод хэрэгсэл хөгжүүлсэн",
        "Захиалагч бүрт зориулсан админ самбар бүтээсэн",
        "Гүйцэтгэл, UI/UX-ийг тасралтгүй сайжруулсан",
        "Жижиг инженерийн багтай нягт хамтран ажилласан",
      ],
    },
    {
      role: "Мобайл апп хөгжүүлэгч",
      company: "Фриланс",
      period: "2023–2024",
      description: [
        "Олон төрлийн захиалагчдад Flutter апп хөгжүүлсэн",
        "Firebase интеграци хэрэгжүүлсэн",
        "Play Store дээр апп нийтэлсэн",
        "REST API болон state management-тай ажилласан",
      ],
    },
    {
      role: "Вэб хөгжүүлэгч",
      company: "Фриланс",
      period: "2022–2023",
      description: [
        "React/Next.js ашиглан responsive вэбсайт бүтээсэн",
        "Орчин үеийн UI/UX дизайн хэрэгжүүлсэн",
        "Олон платформ дээр апп deploy хийсэн",
        "Дизайнер болон захиалагчтай хамтран ажилласан",
      ],
    },
  ],
};

const terminalCopy = {
  en: {
    welcome: "Welcome to Temuulen's Portfolio Terminal",
    prompt: "visitor@portfolio:~$", // Always English
    help: {
      title: "Available Commands:",
      commands: [
        { cmd: "help", desc: "Show this help message" },
        { cmd: "clear", desc: "Clear the terminal" },
        { cmd: "projects", desc: "List all projects" },
        { cmd: "experience", desc: "Show work experience" },
        { cmd: "about", desc: "About me" },
        { cmd: "skills", desc: "List technical skills" },
        { cmd: "contact", desc: "Contact information" },
        { cmd: "exit", desc: "Exit terminal mode" },
      ],
    },
    about: {
      title: "About Temuulen Norovpel",
      content: [
        "Full-Stack & Mobile App Developer",
        "",
        "I'm a passionate developer who turns ideas into real products.",
        "Specializing in Web, Mobile, and Automation solutions.",
        "",
        "Skills: Next.js, React, Flutter, Node.js, Firebase, and more.",
      ],
    },
    skills: {
      title: "Technical Skills",
      categories: {
        frontend: ["Next.js", "React", "Tailwind CSS", "HTML/CSS/JS", "TypeScript"],
        backend: ["Node.js", "Express.js", "REST API", "MongoDB", "Firebase"],
        mobile: ["Flutter", "Dart", "Firebase Integration", "Real-time Apps"],
        other: ["UI/UX Design", "IoT Basics", "Project Management", "Deployment"],
      },
    },
    contact: {
      title: "Contact Information",
      content: [
        "Email: [Your Email]",
        "LinkedIn: [Your LinkedIn]",
        "GitHub: [Your GitHub]",
        "",
        "Feel free to reach out!",
      ],
    },
    error: "Command not found. Type 'help' to see available commands.",
    exit: "Exiting terminal... Redirecting to home.",
  },
  mn: {
    welcome: "Тэмүүлэний Портфолио Терминалд тавтай морил",
    prompt: "visitor@portfolio:~$", // Always English even in Mongolian
    help: {
      title: "Боломжтой командууд:",
      commands: [
        { cmd: "help", desc: "Энэ тусламжийн мэссэж харуулах" },
        { cmd: "clear", desc: "Терминалыг цэвэрлэх" },
        { cmd: "projects", desc: "Бүх төслүүдийг жагсаах" },
        { cmd: "experience", desc: "Ажлын туршлага харуулах" },
        { cmd: "about", desc: "Миний тухай" },
        { cmd: "skills", desc: "Техникийн ур чадварууд" },
        { cmd: "contact", desc: "Холбоо барих мэдээлэл" },
        { cmd: "exit", desc: "Терминал горимоос гарах" },
      ],
    },
    about: {
      title: "Тэмүүлэн Норовпэлийн тухай",
      content: [
        "Full-Stack болон Мобайл апп хөгжүүлэгч",
        "",
        "Би санааг бодит бүтээгдэхүүн болгодог хөгжүүлэгч юм.",
        "Вэб, Мобайл, Автоматжуулалтын шийдлээр мэргэшсэн.",
        "",
        "Ур чадвар: Next.js, React, Flutter, Node.js, Firebase, болон бусад.",
      ],
    },
    skills: {
      title: "Техникийн ур чадвар",
      categories: {
        frontend: ["Next.js", "React", "Tailwind CSS", "HTML/CSS/JS", "TypeScript"],
        backend: ["Node.js", "Express.js", "REST API", "MongoDB", "Firebase"],
        mobile: ["Flutter", "Dart", "Firebase интеграци", "Real-time Apps"],
        other: ["UI/UX дизайн", "IoT үндэс", "Төслийн менежмент", "Deployment"],
      },
    },
    contact: {
      title: "Холбоо барих мэдээлэл",
      content: [
        "Имэйл: [Таны имэйл]",
        "LinkedIn: [Таны LinkedIn]",
        "GitHub: [Таны GitHub]",
        "",
        "Холбогдохыг урьж байна!",
      ],
    },
    error: "Команд олдсонгүй. 'help' гэж бичээд боломжтой командуудыг харна уу.",
    exit: "Терминалаас гараж байна... Нүүр хуудас руу шилжиж байна.",
  },
};

export default function Terminal() {
  const { language } = useLanguage();
  const copy = terminalCopy[language];
  // Always use English prompt regardless of language
  const prompt = "visitor@portfolio:~$";
  const [history, setHistory] = useState([
    { type: "output", content: copy.welcome },
    { type: "output", content: `Type 'help' to see available commands.` },
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [history]);

  const executeCommand = (cmd) => {
    const command = cmd.trim().toLowerCase();
    const parts = command.split(" ");
    const mainCmd = parts[0];

    setHistory((prev) => [
      ...prev,
      { type: "input", content: `${prompt} ${cmd}` },
    ]);

    switch (mainCmd) {
      case "help":
        setHistory((prev) => [
          ...prev,
          { type: "output", content: copy.help.title },
          ...copy.help.commands.map((c) => ({
            type: "output",
            content: `  ${c.cmd.padEnd(12)} - ${c.desc}`,
          })),
        ]);
        break;

      case "clear":
        setHistory([]);
        break;

      case "projects":
        setHistory((prev) => [
          ...prev,
          { type: "output", content: "\n=== Projects ===\n" },
          ...projectsData[language].map((project, idx) => ({
            type: "output",
            content: [
              `${idx + 1}. ${project.title}`,
              `   Status: ${project.status}`,
              `   Role: ${project.role}`,
              `   Description: ${project.description}`,
              `   Tech: ${project.tech.join(", ")}`,
              "",
            ].join("\n"),
          })),
        ]);
        break;

      case "experience":
      case "exp":
        setHistory((prev) => [
          ...prev,
          { type: "output", content: "\n=== Work Experience ===\n" },
          ...experienceData[language].map((exp) => ({
            type: "output",
            content: [
              `${exp.role} @ ${exp.company}`,
              `Period: ${exp.period}`,
              "Responsibilities:",
              ...exp.description.map((d) => `  • ${d}`),
              "",
            ].join("\n"),
          })),
        ]);
        break;

      case "about":
        setHistory((prev) => [
          ...prev,
          { type: "output", content: `\n=== ${copy.about.title} ===\n` },
          ...copy.about.content.map((line) => ({
            type: "output",
            content: line,
          })),
        ]);
        break;

      case "skills":
        setHistory((prev) => [
          ...prev,
          { type: "output", content: `\n=== ${copy.skills.title} ===\n` },
          ...Object.entries(copy.skills.categories).map(([cat, skills]) => ({
            type: "output",
            content: `${cat.toUpperCase()}: ${skills.join(", ")}`,
          })),
        ]);
        break;

      case "contact":
        setHistory((prev) => [
          ...prev,
          { type: "output", content: `\n=== ${copy.contact.title} ===\n` },
          ...copy.contact.content.map((line) => ({
            type: "output",
            content: line,
          })),
        ]);
        break;

      case "exit":
        setHistory((prev) => [
          ...prev,
          { type: "output", content: copy.exit },
        ]);
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
        break;

      case "":
        break;

      default:
        setHistory((prev) => [
          ...prev,
          { type: "error", content: copy.error },
        ]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setCommandHistory((prev) => [...prev, input]);
      setHistoryIndex(-1);
      executeCommand(input);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4 md:p-8 overflow-x-hidden">
      <div
        ref={terminalRef}
        className="max-w-4xl mx-auto h-[calc(100vh-2rem)] overflow-y-auto overflow-x-hidden"
      >
        <div className="space-y-1">
          {history.map((item, index) => (
            <div
              key={index}
              className={`${
                item.type === "input"
                  ? "text-blue-400"
                  : item.type === "error"
                  ? "text-red-400"
                  : "text-green-400"
              } whitespace-pre-wrap break-words`}
            >
              {item.content}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="mt-2">
          <div className="flex items-center">
            <span className="text-blue-400 mr-2">{prompt}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-green-400 outline-none caret-green-400"
              autoFocus
            />
          </div>
        </form>
      </div>
    </div>
  );
}

