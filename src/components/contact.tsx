"use client";

import SectionHeading from "@/components/section-heading";
import SubmitBtn from "@/components/submit-btn";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

export default function Contact() {
  const { ref } = useSectionInView("#contact");
  return (
    <motion.section id="contact" ref={ref}>
      <Fade
        direction="up"
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <SectionHeading>Liên hệ tôi</SectionHeading>
      </Fade>

      <Fade
        direction="up"
        delay={600}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <p className="text-gray-700 -mt-6 dark:text-white/80">
          Liên hệ với tôi bằng cách để lại mail cho tôi
        </p>
      </Fade>
      <Fade
        direction="up"
        delay={800}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <form action="#" className="mt-10 flex flex-col dark:text-black">
          <input
            className="h-14 px-4 rounded-lg border-black dark:bg-white dark:text-black"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Nhập email của bạn..."
          />
          <textarea
            className="h-52 my-3 rounded-lg resize-none border-black p-4 dark:bg-white dark:text-black"
            name="message"
            required
            maxLength={500}
            placeholder="Nội dung..."
          ></textarea>
          <SubmitBtn text="Gửi" />
        </form>
      </Fade>
    </motion.section>
  );
}
