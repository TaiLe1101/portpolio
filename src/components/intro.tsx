"use client";

import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";

//Animation
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

function Intro() {
  const { ref } = useSectionInView("#home", 0.5);

  return (
    <section
      id="home"
      className="mb-28 max-w-[75rem] text-center sm:mb-0"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >
            <Image
              src={"/boy.png"}
              width={480}
              height={480}
              alt="portrait"
              quality={100}
              priority={true}
              className="rounded-full shadow-xl object-cover"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
            className="text-6xl absolute bottom-8 right-12"
          >
            🖐
          </motion.span>
        </div>
      </div>
      <Fade
        direction="up"
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <h1 className="mb-10 mt-4 text-2xl sm:text-4xl">
          <span className="font-medium !leading-[1.5] ">
            Xin chào! Mình là <b>Lê Trần Tấn Tài</b>, một lập trình viên đầy đam
            mê và sáng tạo
          </span>{" "}
          <p className="text-[14px]">
            Với kinh nghiệm chinh chiến qua nhiều dự án thực tế trong lĩnh vực
            phát triển website, mình luôn sẵn sàng để hiện thực hóa những ý
            tưởng tuyệt vời.
          </p>
        </h1>
      </Fade>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 125,
          damping: 10,
          duration: 0.2,
        }}
        className="flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray950 dark:bg-white/10 active:scale-105 transition"
        >
          Connect <Mail color="#9ca3af" />
        </Link>
        {/* <a
          href="#"
          target="_blank"
          className="bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a> */}
        <a
          href="https://github.com/TaiLe1101"
          target="_blank"
          className="bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
