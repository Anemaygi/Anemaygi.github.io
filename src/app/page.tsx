import ImageG from "@/components/ImageG";

import { FaLinkedin } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ImageG
          src="/cracha.png"
          alt="Me"
          width={360}
          height={72}
          priority
        />
        

        <h1 className="text-2xl font-semibold">  Hi, I'm Giane Mayumi! 👋 </h1>
        <p>
          I am currently pursuing a Master’s degree in Computer Science at <b>McGill University</b> 🇨🇦,
          where I am part of the <a className="text-red-800 hover:text-red-500 transition delay-100 duration-300 " href="https://www.cs.mcgill.ca/~martin/students.html" target="_blank">
             <b>McGill Software Technology Lab</b>
          </a>, under the supervision of Professors Jin Guo and Martin Robillard.
        </p>
        <p className="pb-6">
          I hold a Bachelor’s degree in Information Systems from the University of São Paulo 🇧🇷
          and a Web Computing Technician diploma from the Federal Institute of São Paulo 🇧🇷.
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 min-w-44"
            href="https://www.linkedin.com/in/gianemayumi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} className="text-white" />
            LinkedIn
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 min-w-44"
            href="./CV_GianeMayumi_MS.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            My CV
          </a>
        </div>
      </main>

    </div>
  );
}
