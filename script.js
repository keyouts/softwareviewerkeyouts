document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    {
      src: "https://images.squarespace-cdn.com/content/686b137649e6ef6f1bbbe325/364f5771-7982-4956-a342-56dfdb75414f/HighlightHopperDesktopIcon.png?content-type=image%2Fpng",
      alt: "Logo for Highlight Hopper Desktop.",
      link: "https://github.com/keyouts/HighlightHopperDesktop",
      text: "Highlight Hopper Desktop – Organize and browse highlights from our Hopper extension."
    },
    {
      src: "https://images.squarespace-cdn.com/content/686b137649e6ef6f1bbbe325/697ae513-039d-4bb8-b688-c1d7bd05a1f9/HopperNoteIcon.png?content-type=image%2Fpng",
      alt: "Logo for Hopper Note.",
      link: "https://github.com/keyouts/HopperNote",
      text: "Hopper Note – Companion note-taking tool."
    },
    {
      src: "https://images.squarespace-cdn.com/content/686b137649e6ef6f1bbbe325/2f4ffd79-1b96-4418-a6c2-cf97c8d10ee5/icon.png?content-type=image%2Fpng",
      alt: "Logo for Pixel Bug.",
      link: "https://keyouts.github.io/pixelbugweb/",
      text: "Pixel Bug – Pixel art and animation software."
    },
       {
      src: "https://images.squarespace-cdn.com/content/686b137649e6ef6f1bbbe325/0fb25d6f-4f55-4300-b7ad-827779ef7fb3/SkoshPressLogo.png?content-type=image%2Fpng",
      alt: "Logo for Skosh Press.",
      link: "https://github.com/keyouts/skoshpress",
      text: "Skosh Press - document editing and publishing software."
    },
     {
      src: "https://images.squarespace-cdn.com/content/686b137649e6ef6f1bbbe325/fdc0ca85-35e7-4e36-ab34-7fa96ea32006/DMDashIcon.png?content-type=image%2Fpng",
      alt: "Logo for DM Dash.",
      link: "https://keyouts.github.io/DMDash/",
      text: "DM Dash - Beta app to create campaigns and maps."
    }
  ];

  

  let current = 0;

  const imgEl = document.getElementById("carousel-image");
  const linkEl = document.getElementById("carousel-link");
  const overlay = document.getElementById("carousel-overlay");

  function showSlide(index) {
    current = (index + slides.length) % slides.length;

    imgEl.src = slides[current].src;
    imgEl.alt = slides[current].alt;
    linkEl.href = slides[current].link;
    overlay.textContent = slides[current].text;
  }

  document.querySelector(".nav.right").addEventListener("click", () => {
    showSlide(current + 1);
  });

  document.querySelector(".nav.left").addEventListener("click", () => {
    showSlide(current - 1);
  });

  showSlide(current);
});
