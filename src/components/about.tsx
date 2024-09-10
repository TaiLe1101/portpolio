"use client";

import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/lib/useInView";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const About = () => {
  const { ref } = useSectionInView("#about");

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      className="max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28"
    >
      <div className="container mx-auto">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <SectionHeading>Về tôi</SectionHeading>
        </Fade>
        <div className="grid xl:grid-cols-2 lg:text-start">
          <div className="flex-1">
            <div className="text-lg mt-12 xl:mt-3">
              <div className="flex justify-start flex-col">
                <Fade
                  direction="up"
                  delay={400}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className="font-bold mt-6">Sứ mệnh của tôi</h3>
                </Fade>
                <Fade
                  direction="up"
                  delay={600}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                    Tôi tin rằng một website là nền tảng vững chắc của sự hiện
                    diện trực tuyến thành công. Mục tiêu của tôi là giúp các
                    doanh nghiệp xây dựng một dấu ấn số mạnh mẽ. Quá trình của
                    tôi bắt đầu bằng việc thấu hiểu mục tiêu kinh doanh của bạn.
                  </p>
                </Fade>
                <Fade
                  direction="up"
                  delay={800}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className="font-bold mt-6">Tôi là ai ?</h3>
                </Fade>
                <Fade
                  direction="up"
                  delay={1000}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                    Tôi là <b>Lê Trần Tấn Tài</b>, một lập trình viên đam mê
                    sáng tạo và phát triển web với kinh nghiệm làm việc qua các
                    dự án thực tế. Với phương châm luôn học hỏi và cập nhật, tôi
                    sẽ giúp doanh nghiệp của bạn vươn xa hơn trên thị trường số.
                  </p>
                </Fade>
              </div>
            </div>
          </div>

          <div>
            <Fade
              direction="right"
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              {/* Right image */}
              <Image
                src="/about.png"
                alt="About me"
                width={600}
                height={600}
                quality={100}
                priority={true}
                className="rounded-full mt-8 object-cover"
              />
            </Fade>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
