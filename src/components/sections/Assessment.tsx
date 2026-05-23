"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    id: 1,
    question: "How often do you feel isolated while at sea?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  },
  {
    id: 2,
    question: "How would you rate your sleep quality during rotations?",
    options: ["Excellent", "Good", "Fair", "Poor", "Very Poor"],
  },
  {
    id: 3,
    question: "Do you have someone onboard you can confide in?",
    options: ["Yes, always", "Sometimes", "Rarely", "No", "Prefer not to say"],
  },
  {
    id: 4,
    question: "How often do you experience work-related anxiety?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  },
];

export default function Assessment() {
  const [currentStep, setCurrentStep] = useState<"intro" | "quiz" | "result">("intro");
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: answer });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentStep("result");
    }
  };

  const getScore = () => {
    let score = 0;
    Object.values(answers).forEach((answer) => {
      if (answer === "Often" || answer === "Always" || answer === "Very Poor" || answer === "No") score += 2;
      else if (answer === "Sometimes" || answer === "Fair" || answer === "Rarely") score += 1;
    });
    return score;
  };

  return (
    <section className="relative py-32 md:py-40 bg-stone-950">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {currentStep === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-stone-600 mb-6 font-mono">
                Anonymous Assessment
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-stone-100 mb-8 leading-[0.95]">
                Check Your
                <span className="italic text-stone-400 block mt-2">Wellbeing</span>
              </h2>
              <p className="text-stone-500 text-sm leading-[1.8] mb-12 max-w-md mx-auto">
                Take this 2-minute anonymous assessment to understand your current mental
                state. Your answers are not stored or shared.
              </p>
              <button
                data-cursor-hover
                onClick={() => setCurrentStep("quiz")}
                className="px-8 py-3 bg-stone-100 text-stone-950 text-xs uppercase tracking-widest hover:bg-stone-200 transition-colors"
              >
                Begin Assessment
              </button>
            </motion.div>
          )}

          {currentStep === "quiz" && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="mb-8">
                <p className="text-[10px] uppercase tracking-widest text-stone-600 mb-2 font-mono">
                  Question {currentQuestion + 1} of {questions.length}
                </p>
                <div className="h-px bg-stone-800">
                  <div
                    className="h-full bg-stone-600 transition-all duration-500"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-light text-stone-200 mb-12">
                {questions[currentQuestion].question}
              </h3>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option}
                    data-cursor-hover
                    onClick={() => handleAnswer(option)}
                    className="w-full p-6 border border-stone-800 text-left hover:border-stone-600 hover:bg-stone-900/30 transition-all duration-500 group"
                  >
                    <span className="text-stone-400 text-sm group-hover:text-stone-200 transition-colors">
                      {option}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center"
            >
              <div className="mb-8">
                <p className="text-[10px] uppercase tracking-widest text-stone-600 mb-2 font-mono">
                  Your Result
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-stone-100 mb-4">
                  {getScore() <= 2 ? "Good Standing" : getScore() <= 4 ? "Moderate Stress" : "High Stress"}
                </h2>
              </div>

              <p className="text-stone-500 text-sm leading-[1.8] mb-12 max-w-md mx-auto">
                {getScore() <= 2
                  ? "Your responses indicate you're managing well. Continue with your current wellness practices."
                  : getScore() <= 4
                  ? "You're experiencing moderate stress. Consider our meditation sessions or speaking with a counselor."
                  : "Your responses suggest you may benefit from professional support. Our team is available 24/7."}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#services"
                  data-cursor-hover
                  className="px-8 py-3 bg-stone-100 text-stone-950 text-xs uppercase tracking-widest hover:bg-stone-200 transition-colors"
                >
                  Explore Services
                </a>
                <a
                  href="#crisis"
                  data-cursor-hover
                  className="px-8 py-3 border border-stone-700 text-stone-300 text-xs uppercase tracking-widest hover:border-stone-500 hover:text-stone-100 transition-colors"
                >
                  Get Support
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
