import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const FlyingButton = () => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;

    const getVar = (variable) => getComputedStyle(button).getPropertyValue(variable);

    const handleClick = () => {
      if (button.classList.contains("active")) return;
      button.classList.add("active");

      // Animate button wings
      gsap.to(button, {
        keyframes: [
          {
            "--left-wing-first-x": 50,
            "--left-wing-first-y": 100,
            "--right-wing-second-x": 50,
            "--right-wing-second-y": 100,
            duration: 0.2,
            onComplete() {
              gsap.set(button, {
                "--left-wing-first-y": 0,
                "--left-wing-second-x": 40,
                "--left-wing-second-y": 100,
                "--left-wing-third-x": 0,
                "--left-wing-third-y": 100,
                "--left-body-third-x": 40,
                "--right-wing-first-x": 50,
                "--right-wing-first-y": 0,
                "--right-wing-second-x": 60,
                "--right-wing-second-y": 100,
                "--right-wing-third-x": 100,
                "--right-wing-third-y": 100,
                "--right-body-third-x": 60,
              });
            },
          },
          {
            "--left-wing-third-x": 20,
            "--left-wing-third-y": 90,
            "--left-wing-second-y": 90,
            "--left-body-third-y": 90,
            "--right-wing-third-x": 80,
            "--right-wing-third-y": 90,
            "--right-body-third-y": 90,
            "--right-wing-second-y": 90,
            duration: 0.2,
          },
          {
            "--rotate": 50,
            "--left-wing-third-y": 95,
            "--left-wing-third-x": 27,
            "--right-body-third-x": 45,
            "--right-wing-second-x": 45,
            "--right-wing-third-x": 60,
            "--right-wing-third-y": 83,
            duration: 0.25,
          },
          {
            "--rotate": 55,
            "--plane-x": -8,
            "--plane-y": 24,
            duration: 0.2,
          },
          {
            "--rotate": 40,
            "--plane-x": 45,
            "--plane-y": -180,
            "--plane-opacity": 0,
            duration: 0.3,
            onComplete() {
              // Reset button after animation
              setTimeout(() => {
                button.removeAttribute("style");
                text.removeAttribute("style");
                gsap.fromTo(
                  button,
                  { opacity: 0, y: -8 },
                  {
                    opacity: 1,
                    y: 0,
                    clearProps: true,
                    duration: 0.3,
                    onComplete() {
                      button.classList.remove("active");
                      navigate("/journey");
                    },
                  }
                );
              }, 500);
            },
          },
        ],
      });

      // Animate button color & text
      gsap.to(button, {
        keyframes: [
          {
            "--text-opacity": 0,
            "--border-radius": 0,
            "--left-wing-background": getVar("--primary-darkest"),
            "--right-wing-background": getVar("--primary-darkest"),
            duration: 0.1,
          },
          {
            "--left-wing-background": getVar("--primary"),
            "--right-wing-background": getVar("--primary"),
            duration: 0.1,
          },
          {
            "--left-body-background": getVar("--primary-dark"),
            "--right-body-background": getVar("--primary-darkest"),
            duration: 0.4,
          },
          {
            "--success-opacity": 1,
            "--success-scale": 1,
            duration: 0.25,
            delay: 0.25,
          },
        ],
      });

      // Animate text flying away
      gsap.to(text, {
        y: -200,
        opacity: 0,
        rotation: 20,
        duration: 1,
        ease: "power2.in",
      });
    };

    const container = containerRef.current;
    container.addEventListener("click", handleClick);

    return () => container.removeEventListener("click", handleClick);
  }, [navigate]);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "2rem",
        gap: "1rem",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <span ref={textRef} className="hero-fly-button">More About Me</span>
      <button ref={buttonRef} className="button">
        <span className="default">.</span>
        <div className="left"></div>
        <div className="right"></div>
      </button>
    </div>
  );
};

export default FlyingButton;
