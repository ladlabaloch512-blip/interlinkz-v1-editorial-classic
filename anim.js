// Interlinkz Variant 1 animation layer (approved plan, Design 01).
// Desktop only. Content is fully visible without this file; animation adds motion only.
(function () {
  if (!window.gsap) return;
  if (!window.matchMedia("(min-width: 1021px)").matches) return;
  gsap.registerPlugin(ScrollTrigger);
  // D1 frame sequence: the giant ghost Z in the hero assembles piece by piece.
  var pieces = document.querySelectorAll(".seq-z .zp");
  if (pieces.length === 3) {
    var tl = gsap.timeline({ delay: 0.15 });
    tl.from(pieces[0], { y: -46, opacity: 0, duration: 0.55, ease: "power2.out" })
      .from(pieces[1], { x: 52, opacity: 0, duration: 0.55, ease: "power2.out" }, "-=0.2")
      .from(pieces[2], { y: 46, opacity: 0, duration: 0.55, ease: "power2.out" }, "-=0.2");
  }
  // The process nodes light in sequence as the row scrolls into view.
  var nodes = document.querySelectorAll(".process-row .p-node");
  if (nodes.length) {
    gsap.timeline({ scrollTrigger: { trigger: ".process-row", start: "top 85%" }, repeat: -1, repeatDelay: 1.6 })
      .to(nodes, { backgroundColor: "#FFCC01", duration: 0.3, stagger: 0.45 })
      .to(nodes, { backgroundColor: "#ffffff", duration: 0.3, stagger: 0.2 }, "+=0.9");
  }
})();
