// "use client";

// import { useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   Bot,
//   X,
//   Send,
//   Sparkles,
//   ArrowRight,
// } from "lucide-react";

// const quickQuestions = [
//   "How do I use this website?",
//   "What services do you provide?",
//   "I need help with my research",
// ];

// const getReply = (message) => {
//   const text = message.toLowerCase();

//   if (
//     text.includes("website") ||
//     text.includes("how do i use")
//   ) {
//     return (
//       <>
//         <p>
//           You can explore the website through the main navigation.
//         </p>

//         <div className="mt-3 space-y-2 text-neutral-400">
//           <p>
//             <strong className="text-white">Services</strong> — explore
//             our research support services.
//           </p>

//           <p>
//             <strong className="text-white">Insights</strong> — explore
//             research concepts and guidance.
//           </p>

//           <p>
//             <strong className="text-white">About</strong> — learn about
//             our company.
//           </p>

//           <p>
//             <strong className="text-white">Contact</strong> — discuss
//             your research with us.
//           </p>
//         </div>
//       </>
//     );
//   }

//   if (
//     text.includes("service") ||
//     text.includes("provide")
//   ) {
//     return (
//       <>
//         <p>
//           We provide research-focused support including:
//         </p>

//         <div className="mt-3 space-y-1.5 text-neutral-400">
//           <p>• PhD Research Support</p>
//           <p>• Thesis Writing & Editing</p>
//           <p>• Research Implementation</p>
//           <p>• Data Analysis</p>
//           <p>• Publication Support</p>
//           <p>• Research Documentation</p>
//           <p>• Research Presentation Support</p>
//         </div>
//       </>
//     );
//   }

//   if (
//     text.includes("research") ||
//     text.includes("phd") ||
//     text.includes("thesis")
//   ) {
//     return (
//       <>
//         <p>
//           Absolutely. I can help you understand which part of our
//           research support may fit your project.
//         </p>

//         <p className="mt-3 text-neutral-400">
//           Tell me whether you are at the idea, implementation,
//           analysis, documentation or publication stage.
//         </p>
//       </>
//     );
//   }

//   if (
//     text.includes("contact") ||
//     text.includes("human") ||
//     text.includes("person")
//   ) {
//     return (
//       <>
//         <p>
//           You can speak directly with our team.
//         </p>

//         <p className="mt-3 text-neutral-400">
//           Use the Contact page or the WhatsApp button for direct
//           communication.
//         </p>
//       </>
//     );
//   }

//   return (
//     <>
//       <p>
//         I can help you understand this website and our research
//         support services.
//       </p>

//       <p className="mt-3 text-neutral-400">
//         Try asking about our services, thesis support, data analysis,
//         implementation, publication or website navigation.
//       </p>
//     </>
//   );
// };

// export default function ResearchSupport() {
//   const [isOpen, setIsOpen] = useState(false);

//   const [message, setMessage] = useState("");

//   const [rocketPosition, setRocketPosition] = useState({
//     x: 120,
//     y: 180,
//   });

//   const [chatPosition, setChatPosition] = useState({
//     x: 24,
//     y: 180,
//   });

//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       type: "bot",
//       content: (
//         <>
//           <p>Hello 👋</p>

//           <p className="mt-2">
//             I'm your research support assistant. How can I help?
//           </p>
//         </>
//       ),
//     },
//   ]);

//   /*
//   ============================================================
//   CONTINUOUS FLIGHT
//   ============================================================
//   */

//   const animationRef = useRef(null);

//   const flight = useRef({
//     x: 120,
//     y: 180,

//     targetX: 600,
//     targetY: 300,

//     angle: 0,

//     speed: 1.8,
//   });

//   /*
//     Create a new destination.
//     The robot never stops.
//   */

//   const createNewTarget = () => {
//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     const padding = 45;

//     flight.current.targetX =
//       padding +
//       Math.random() *
//         Math.max(width - padding * 2, 100);

//     flight.current.targetY =
//       padding +
//       Math.random() *
//         Math.max(height - padding * 2, 100);
//   };

//   /*
//     Smooth continuous movement.
//   */

//   useEffect(() => {
//     if (isOpen) return;

//     const animateFlight = () => {
//       const current = flight.current;

//       const dx = current.targetX - current.x;
//       const dy = current.targetY - current.y;

//       const distance = Math.sqrt(
//         dx * dx + dy * dy
//       );

//       /*
//         When approaching the destination,
//         immediately choose another one.

//         There is NO waiting.
//       */

//       if (distance < 70) {
//         createNewTarget();
//       }

//       /*
//         Normalize direction.
//       */

//       const angle = Math.atan2(dy, dx);

//       /*
//         Smooth turning.
//       */

//       let angleDifference =
//         angle - current.angle;

//       while (angleDifference > Math.PI) {
//         angleDifference -= Math.PI * 2;
//       }

//       while (angleDifference < -Math.PI) {
//         angleDifference += Math.PI * 2;
//       }

//       current.angle +=
//         angleDifference * 0.025;

//       /*
//         Move continuously.
//       */

//       current.x +=
//         Math.cos(current.angle) *
//         current.speed;

//       current.y +=
//         Math.sin(current.angle) *
//         current.speed;

//       /*
//         Keep inside viewport.
//       */

//       const width = window.innerWidth;
//       const height = window.innerHeight;

//       if (current.x < 30) {
//         current.x = 30;
//         createNewTarget();
//       }

//       if (current.x > width - 30) {
//         current.x = width - 30;
//         createNewTarget();
//       }

//       if (current.y < 30) {
//         current.y = 30;
//         createNewTarget();
//       }

//       if (current.y > height - 30) {
//         current.y = height - 30;
//         createNewTarget();
//       }

//       setRocketPosition({
//         x: current.x,
//         y: current.y,
//       });

//       animationRef.current =
//         requestAnimationFrame(animateFlight);
//     };

//     createNewTarget();

//     animationRef.current =
//       requestAnimationFrame(animateFlight);

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(
//           animationRef.current
//         );
//       }
//     };
//   }, [isOpen]);

//   /*
//   ============================================================
//   SEND MESSAGE
//   ============================================================
//   */

//   const sendMessage = (value = message) => {
//     const cleanMessage = value.trim();

//     if (!cleanMessage) return;

//     setMessages((previous) => [
//       ...previous,
//       {
//         id: Date.now(),
//         type: "user",
//         content: cleanMessage,
//       },
//       {
//         id: Date.now() + 1,
//         type: "bot",
//         content: getReply(cleanMessage),
//       },
//     ]);

//     setMessage("");
//   };

//   /*
//   ============================================================
//   OPEN CHAT
//   ============================================================
//   */

//   const openChat = () => {
//     const chatbotWidth =
//       window.innerWidth < 640
//         ? window.innerWidth - 32
//         : 330;

//     const chatbotHeight = 460;

//     let x =
//       rocketPosition.x -
//       chatbotWidth / 2;

//     let y =
//       rocketPosition.y -
//       chatbotHeight / 2;

//     x = Math.max(
//       16,
//       Math.min(
//         x,
//         window.innerWidth -
//           chatbotWidth -
//           16
//       )
//     );

//     y = Math.max(
//       16,
//       Math.min(
//         y,
//         window.innerHeight -
//           chatbotHeight -
//           16
//       )
//     );

//     setChatPosition({
//       x,
//       y,
//     });

//     setIsOpen(true);
//   };

//   /*
//   ============================================================
//   CLOSE CHAT
//   ============================================================
//   */

//   const closeChat = () => {
//     const chatbotWidth =
//       window.innerWidth < 640
//         ? window.innerWidth - 32
//         : 330;

//     const chatbotHeight = 460;

//     /*
//       Robot reappears at the EXACT
//       CENTER of the chatbot.
//     */

//     const x =
//       chatPosition.x +
//       chatbotWidth / 2;

//     const y =
//       chatPosition.y +
//       chatbotHeight / 2;

//     /*
//       Update both visible position
//       and flight engine position.
//     */

//     flight.current.x = x;
//     flight.current.y = y;

//     flight.current.angle =
//       Math.random() * Math.PI * 2;

//     createNewTarget();

//     setRocketPosition({
//       x,
//       y,
//     });

//     setIsOpen(false);
//   };

//   return (
//     <>
//       {/* =====================================================
//           FLYING ROBOT
//       ====================================================== */}
      
//       {/* =====================================================
//     FLYING ROCKET
// ====================================================== */}

// <AnimatePresence>
//   {!isOpen && (
//     <motion.div
//       initial={{
//         opacity: 0,
//         scale: 0,
//       }}
//       animate={{
//         opacity: 1,
//         scale: 1,
//       }}
//       exit={{
//         opacity: 0,
//         scale: 0,
//       }}
//       transition={{
//         duration: 0.25,
//       }}
//       className="
//         fixed
//         z-[9998]
//         flex
//         h-24
//         w-24
//         cursor-pointer
//         items-center
//         justify-center
//       "
//       style={{
//         left: rocketPosition.x - 48,
//         top: rocketPosition.y - 48,
//       }}
//       onPointerDown={(event) => {
//         event.preventDefault();
//       }}
//       onClick={openChat}
//     >
//       {/* =================================================
//           LARGE CLICK AREA

//           The whole 96 × 96 area is clickable.
//       ================================================== */}

//       <div
//         className="
//           absolute
//           inset-0
//           rounded-full
//           bg-transparent
//         "
//       />

//       {/* =================================================
//           SHOOTING STAR TRAIL
//       ================================================== */}

//       <motion.div
//         className="
//           absolute
//           right-8
//           top-1/2
//           h-[4px]
//           w-28
//           origin-right
//           -translate-y-1/2
//           rotate-[-12deg]
//           rounded-full
//           bg-gradient-to-l
//           from-violet-300
//           via-violet-500/60
//           to-transparent
//           blur-[1.5px]
//         "
//         animate={{
//           opacity: [
//             0.25,
//             0.85,
//             0.25,
//           ],
//           scaleX: [
//             0.65,
//             1.25,
//             0.65,
//           ],
//         }}
//         transition={{
//           duration: 0.8,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* SECONDARY TRAIL */}

//       <motion.div
//         className="
//           absolute
//           right-10
//           top-1/2
//           h-[8px]
//           w-16
//           origin-right
//           -translate-y-1/2
//           rotate-[-12deg]
//           rounded-full
//           bg-violet-500/20
//           blur-md
//         "
//         animate={{
//           opacity: [
//             0.15,
//             0.5,
//             0.15,
//           ],
//           scaleX: [
//             0.7,
//             1.15,
//             0.7,
//           ],
//         }}
//         transition={{
//           duration: 1,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* =================================================
//           ROCKET GLOW
//       ================================================== */}

//       <div
//         className="
//           absolute
//           h-14
//           w-14
//           rounded-full
//           bg-violet-500/20
//           blur-xl
//         "
//       />

//       {/* =================================================
//           ROCKET
//       ================================================== */}

//       <motion.div
//         animate={{
//           y: [
//             0,
//             -4,
//             0,
//             4,
//             0,
//           ],

//           scale: [
//             1,
//             1.08,
//             1,
//             1.05,
//             1,
//           ],
//         }}
//         transition={{
//           duration: 1.2,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           relative
//           z-10
//           flex
//           h-12
//           w-12
//           items-center
//           justify-center
//           rounded-full
//           border
//           border-violet-400/40
//           bg-neutral-950
//           text-violet-300
//           shadow-[0_0_22px_rgba(139,92,246,0.8)]
//         "
//       >
//         <span
//           className="
//             text-2xl
//             drop-shadow-[0_0_8px_rgba(167,139,250,0.9)]
//           "
//         >
//           🚀
//         </span>
//       </motion.div>
//     </motion.div>
//   )}
// </AnimatePresence>
      
//       {/* =====================================================
//           DRAGGABLE CHATBOT
//       ====================================================== */}

//     </>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
} from "framer-motion";

import {
  X,
  Send,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const quickQuestions = [
  "How do I use this website?",
  "What services do you provide?",
  "I need help with my research",
];

const getReply = (message) => {
  const text = message.toLowerCase();

  if (
    text.includes("website") ||
    text.includes("how do i use")
  ) {
    return (
      <>
        <p>
          You can explore the website through the main navigation.
        </p>

        <div className="mt-3 space-y-2 text-neutral-400">
          <p>
            <strong className="text-white">Services</strong> — explore
            our research support services.
          </p>

          <p>
            <strong className="text-white">Insights</strong> — explore
            research concepts and guidance.
          </p>

          <p>
            <strong className="text-white">About</strong> — learn about
            our company.
          </p>

          <p>
            <strong className="text-white">Contact</strong> — discuss
            your research with us.
          </p>
        </div>
      </>
    );
  }

  if (
    text.includes("service") ||
    text.includes("provide")
  ) {
    return (
      <>
        <p>
          We provide research-focused support including:
        </p>

        <div className="mt-3 space-y-1.5 text-neutral-400">
          <p>• PhD Research Support</p>
          <p>• Thesis Writing & Editing</p>
          <p>• Research Implementation</p>
          <p>• Data Analysis</p>
          <p>• Publication Support</p>
          <p>• Plagiarism & Similarity Checking</p>
          <p>• Research Documentation</p>
          <p>• Research Presentation Support</p>
        </div>
      </>
    );
  }

  if (
    text.includes("research") ||
    text.includes("phd") ||
    text.includes("thesis")
  ) {
    return (
      <>
        <p>
          Absolutely. I can help you understand which part of our
          research support may fit your project.
        </p>

        <p className="mt-3 text-neutral-400">
          Tell me whether you are at the idea, implementation,
          analysis, documentation or publication stage.
        </p>
      </>
    );
  }

  if (
    text.includes("contact") ||
    text.includes("human") ||
    text.includes("person")
  ) {
    return (
      <>
        <p>
          You can speak directly with our team.
        </p>

        <p className="mt-3 text-neutral-400">
          Use the Contact page or the WhatsApp button for direct
          communication.
        </p>
      </>
    );
  }

  return (
    <>
      <p>
        I can help you understand this website and our research
        support services.
      </p>

      <p className="mt-3 text-neutral-400">
        Try asking about our services, thesis support, data analysis,
        implementation, publication or website navigation.
      </p>
    </>
  );
};

export default function ResearchSupport() {
  const [isOpen, setIsOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [rocketPosition, setRocketPosition] = useState({
    x: 120,
    y: 180,
  });

  const [chatPosition, setChatPosition] = useState({
    x: 24,
    y: 180,
  });

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content: (
        <>
          <p>Hello 👋</p>

          <p className="mt-2">
            I'm your research support assistant. How can I help?
          </p>
        </>
      ),
    },
  ]);

  /*
  ============================================================
  CHAT MOTION VALUES
  ============================================================
  */

  const chatX = useMotionValue(chatPosition.x);
  const chatY = useMotionValue(chatPosition.y);

  /*
  ============================================================
  CONTINUOUS ROCKET FLIGHT
  ============================================================
  */

  const animationRef = useRef(null);

  const flight = useRef({
    x: 120,
    y: 180,
    targetX: 600,
    targetY: 300,
    angle: 0,
    speed: 1.8,
  });

  /*
  ============================================================
  CREATE NEW DESTINATION
  ============================================================
  */

  const createNewTarget = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const padding = 45;

    flight.current.targetX =
      padding +
      Math.random() *
        Math.max(width - padding * 2, 100);

    flight.current.targetY =
      padding +
      Math.random() *
        Math.max(height - padding * 2, 100);
  };

  /*
  ============================================================
  CONTINUOUS MOVEMENT
  ============================================================
  */

  useEffect(() => {
    if (isOpen) return;

    const animateFlight = () => {
      const current = flight.current;

      const dx =
        current.targetX - current.x;

      const dy =
        current.targetY - current.y;

      const distance = Math.sqrt(
        dx * dx + dy * dy
      );

      /*
      When approaching destination,
      immediately choose another one.
      */

      if (distance < 70) {
        createNewTarget();
      }

      /*
      Calculate direction
      */

      const angle = Math.atan2(dy, dx);

      /*
      Smooth turning
      */

      let angleDifference =
        angle - current.angle;

      while (angleDifference > Math.PI) {
        angleDifference -= Math.PI * 2;
      }

      while (angleDifference < -Math.PI) {
        angleDifference += Math.PI * 2;
      }

      current.angle +=
        angleDifference * 0.025;

      /*
      Continuous movement
      */

      current.x +=
        Math.cos(current.angle) *
        current.speed;

      current.y +=
        Math.sin(current.angle) *
        current.speed;

      /*
      Keep rocket inside viewport
      */

      const width = window.innerWidth;
      const height = window.innerHeight;

      if (current.x < 30) {
        current.x = 30;
        createNewTarget();
      }

      if (current.x > width - 30) {
        current.x = width - 30;
        createNewTarget();
      }

      if (current.y < 30) {
        current.y = 30;
        createNewTarget();
      }

      if (current.y > height - 30) {
        current.y = height - 30;
        createNewTarget();
      }

      setRocketPosition({
        x: current.x,
        y: current.y,
      });

      animationRef.current =
        requestAnimationFrame(animateFlight);
    };

    createNewTarget();

    animationRef.current =
      requestAnimationFrame(animateFlight);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(
          animationRef.current
        );
      }
    };
  }, [isOpen]);

  /*
  ============================================================
  SEND MESSAGE
  ============================================================
  */

  const sendMessage = (value = message) => {
    const cleanMessage = value.trim();

    if (!cleanMessage) return;

    setMessages((previous) => [
      ...previous,

      {
        id: Date.now(),
        type: "user",
        content: cleanMessage,
      },

      {
        id: Date.now() + 1,
        type: "bot",
        content: getReply(cleanMessage),
      },
    ]);

    setMessage("");
  };

  /*
  ============================================================
  OPEN CHAT
  ============================================================
  */

  const openChat = () => {
    const chatbotWidth =
      window.innerWidth < 640
        ? window.innerWidth - 32
        : 330;

    const chatbotHeight = 460;

    let x =
      rocketPosition.x -
      chatbotWidth / 2;

    let y =
      rocketPosition.y -
      chatbotHeight / 2;

    /*
    Keep chatbot inside viewport
    */

    x = Math.max(
      16,
      Math.min(
        x,
        window.innerWidth -
          chatbotWidth -
          16
      )
    );

    y = Math.max(
      16,
      Math.min(
        y,
        window.innerHeight -
          chatbotHeight -
          16
      )
    );

    setChatPosition({
      x,
      y,
    });

    /*
    Set exact motion position
    */

    chatX.set(x);
    chatY.set(y);

    setIsOpen(true);
  };

  /*
  ============================================================
  CLOSE CHAT
  ============================================================
  */

  const closeChat = () => {
    /*
    Get the EXACT current chatbot position.
    */

    const x = chatX.get();
    const y = chatY.get();

    const chatbotWidth =
      window.innerWidth < 640
        ? window.innerWidth - 32
        : 330;

    const chatbotHeight = 460;

    /*
    Rocket appears at the
    center of chatbot.
    */

    const rocketX =
      x + chatbotWidth / 2;

    const rocketY =
      y + chatbotHeight / 2;

    /*
    Update flight engine
    */

    flight.current.x = rocketX;
    flight.current.y = rocketY;

    flight.current.angle =
      Math.random() * Math.PI * 2;

    createNewTarget();

    /*
    Save chatbot position
    */

    setChatPosition({
      x,
      y,
    });

    /*
    Save rocket position
    */

    setRocketPosition({
      x: rocketX,
      y: rocketY,
    });

    setIsOpen(false);
  };

  return (
    <>
      {/* =====================================================
          FLYING ROCKET
      ====================================================== */}

      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              z-[9998]
              flex
              h-24
              w-24
              cursor-pointer
              items-center
              justify-center
            "
            style={{
              left: rocketPosition.x - 48,
              top: rocketPosition.y - 48,
            }}
            onPointerDown={(event) => {
              event.preventDefault();
            }}
            onClick={openChat}
          >
            {/* =================================================
                LARGE CLICK AREA
            ================================================== */}

            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-transparent
              "
            />

            {/* =================================================
                MAIN SHOOTING STAR TRAIL
            ================================================== */}

            <motion.div
              className="
                absolute
                right-8
                top-1/2
                h-[4px]
                w-28
                origin-right
                -translate-y-1/2
                rotate-[-12deg]
                rounded-full
                bg-gradient-to-l
                from-violet-300
                via-violet-500/60
                to-transparent
                blur-[1.5px]
              "
              animate={{
                opacity: [
                  0.25,
                  0.85,
                  0.25,
                ],

                scaleX: [
                  0.65,
                  1.25,
                  0.65,
                ],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* =================================================
                SECONDARY TRAIL
            ================================================== */}

            <motion.div
              className="
                absolute
                right-10
                top-1/2
                h-[8px]
                w-16
                origin-right
                -translate-y-1/2
                rotate-[-12deg]
                rounded-full
                bg-violet-500/20
                blur-md
              "
              animate={{
                opacity: [
                  0.15,
                  0.5,
                  0.15,
                ],

                scaleX: [
                  0.7,
                  1.15,
                  0.7,
                ],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* =================================================
                ROCKET GLOW
            ================================================== */}

            <div
              className="
                absolute
                h-14
                w-14
                rounded-full
                bg-violet-500/20
                blur-xl
              "
            />

            {/* =================================================
                ROCKET
            ================================================== */}

            <motion.div
              animate={{
                y: [
                  0,
                  -4,
                  0,
                  4,
                  0,
                ],

                scale: [
                  1,
                  1.08,
                  1,
                  1.05,
                  1,
                ],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-violet-400/40
                bg-neutral-950
                text-violet-300
                shadow-[0_0_22px_rgba(139,92,246,0.8)]
              "
            >
              <span
                className="
                  text-2xl
                  drop-shadow-[0_0_8px_rgba(167,139,250,0.9)]
                "
              >
                🚀
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          DRAGGABLE CHATBOT
      ====================================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
            }}
            transition={{
              duration: 0.25,
            }}

            /*
            IMPORTANT:
            Only Motion Values control position.
            No left/top position is used here.
            */

            drag
            dragMomentum={false}
            dragElastic={0}

            style={{
              x: chatX,
              y: chatY,
            }}

            onDragEnd={() => {
              /*
              Save EXACT position after dragging.
              */

              const x = chatX.get();
              const y = chatY.get();

              setChatPosition({
                x,
                y,
              });
            }}

            className="
              fixed
              left-0
              top-0
              z-[9999]
              flex
              h-[460px]
              w-[calc(100vw-32px)]
              max-w-[330px]
              flex-col
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-neutral-950/95
              shadow-2xl
              shadow-violet-950/40
              backdrop-blur-xl
            "
          >
            {/* =================================================
                HEADER
            ================================================== */}

            <div
              className="
                flex
                shrink-0
                cursor-grab
                items-center
                justify-between
                border-b
                border-white/10
                px-4
                py-3
                active:cursor-grabbing
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-violet-500/10
                    text-violet-400
                  "
                >
                  <Sparkles size={18} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Research Support
                  </p>

                  <p className="text-[11px] text-neutral-500">
                    Research assistant
                  </p>
                </div>
              </div>

              {/* =================================================
                  CLOSE BUTTON
              ================================================== */}

              <button
                type="button"
                onPointerDown={(event) => {
                  event.stopPropagation();
                }}
                onClick={(event) => {
                  event.stopPropagation();
                  closeChat();
                }}
                aria-label="Close support"
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  text-neutral-600
                  transition
                  hover:bg-white/5
                  hover:text-white
                "
              >
                <X size={16} />
              </button>
            </div>

            {/* =================================================
                CHAT BODY
            ================================================== */}

            <div
              className="
                scrollbar-hide
                flex-1
                overflow-y-auto
                px-4
                py-4
              "
              onPointerDown={(event) => {
                event.stopPropagation();
              }}
            >
              <div className="space-y-4">
                {messages.map((item) => (
                  <div
                    key={item.id}
                    className={`flex ${
                      item.type === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`
                        max-w-[88%]
                        rounded-2xl
                        px-3.5
                        py-3
                        text-sm
                        leading-relaxed
                        ${
                          item.type === "user"
                            ? `
                              rounded-br-md
                              bg-violet-600
                              text-white
                            `
                            : `
                              rounded-bl-md
                              border
                              border-white/10
                              bg-white/[0.04]
                              text-neutral-300
                            `
                        }
                      `}
                    >
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* =================================================
                  QUICK QUESTIONS
              ================================================== */}

              {messages.length === 1 && (
                <div className="mt-5">
                  <div className="mb-2 flex items-center gap-2">
                    <Sparkles
                      size={13}
                      className="text-violet-400"
                    />

                    <p className="text-[11px] uppercase tracking-wider text-neutral-600">
                      Quick questions
                    </p>
                  </div>

                  <div className="space-y-2">
                    {quickQuestions.map(
                      (question) => (
                        <button
                          key={question}
                          type="button"
                          onClick={() =>
                            sendMessage(question)
                          }
                          className="
                            group
                            flex
                            w-full
                            items-center
                            justify-between
                            rounded-xl
                            border
                            border-white/10
                            bg-white/[0.02]
                            px-3
                            py-2.5
                            text-left
                            text-xs
                            text-neutral-400
                            transition
                            hover:border-violet-500/30
                            hover:bg-violet-500/5
                            hover:text-white
                          "
                        >
                          <span>
                            {question}
                          </span>

                          <ArrowRight
                            size={13}
                            className="
                              text-neutral-700
                              transition
                              group-hover:translate-x-1
                              group-hover:text-violet-400
                            "
                          />
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* =================================================
                INPUT
            ================================================== */}

            <div
              className="
                shrink-0
                border-t
                border-white/10
                p-3
              "
              onPointerDown={(event) => {
                event.stopPropagation();
              }}
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-3
                  py-2
                  transition
                  focus-within:border-violet-500/40
                "
              >
                <input
                  type="text"
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter"
                    ) {
                      sendMessage();
                    }
                  }}
                  placeholder="Ask something..."
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-neutral-600
                  "
                />

                <button
                  type="button"
                  onClick={() => sendMessage()}
                  disabled={!message.trim()}
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-violet-600
                    text-white
                    transition
                    hover:bg-violet-500
                    disabled:cursor-not-allowed
                    disabled:opacity-30
                  "
                  aria-label="Send message"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}