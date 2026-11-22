// Interlinkz Variant 1 animation layer (approved plan, Design 01).
// Desktop only. Content is fully visible without this file; animation adds motion only.
// ScrollTrigger from tweens set immediateRender: false, so nothing is
// pre-hidden: elements sit fully visible until their animation moment.
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
  // D1: the process line draws itself segment by segment as the row
  // scrolls into view, then the nodes run their light sequence.
  var chain = document.querySelector(".linkchain");
  var lines = document.querySelectorAll(".linkchain .lc-line");
  if (chain && lines.length) {
    gsap.from(lines, { scaleX: 0, transformOrigin: "left center", duration: 0.5, stagger: 0.18, ease: "power2.out", immediateRender: false,
      scrollTrigger: { trigger: chain, start: "top 85%", once: true } });
  }
  // D1: the home services arrive in a short stagger.
  var svc = document.querySelectorAll(".home-services .ed-col");
  if (svc.length) {
    gsap.from(svc, { y: 26, opacity: 0, duration: 0.5, stagger: 0.12, ease: "power2.out", immediateRender: false,
      scrollTrigger: { trigger: ".home-services", start: "top 85%", once: true } });
  }
  // The process nodes light in sequence as the row scrolls into view.
  var nodes = document.querySelectorAll(".linkchain .lc-node");
  if (nodes.length) {
    gsap.timeline({ scrollTrigger: { trigger: ".linkchain", start: "top 85%" }, repeat: -1, repeatDelay: 1.6 })
      .to(nodes, { backgroundColor: "#ffffff", duration: 0.3, stagger: 0.45 })
      .to(nodes, { backgroundColor: "#FFCC01", duration: 0.3, stagger: 0.2 }, "+=0.9");
  }
})();
