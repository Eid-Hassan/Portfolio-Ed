// ======= Start locked =================
const lock = document.getElementById("container-lock");
const locked = document.getElementById("lock");
const unlocked = document.getElementById("unlock");
const upTop = document.getElementById("up-top");
// ======= Start Nav Bar =================
const linkes = document.getElementById("nav-menu");
const closeLink = document.getElementById("close-link");
const showLink = document.getElementById("show-link");
const layOut = document.getElementById("layout");
const sideBar = document.getElementById("sidebar");
const layoutLi = document.querySelectorAll(".lists");
// ======= Start Nav Bar Dark Mode =================
const dark = document.getElementById("dark");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const optionLi = document.getElementById("option-li");
// ========== scroll info about =================
const about = document.getElementById("about");
const aboutInfo = document.getElementById("about-info");
const skills = document.getElementById("skills-up");
const spans = document.querySelectorAll(".the-progress > span");
// ========== start info Education & Work =================
const education = document.getElementById("education");
const work = document.getElementById("work");
const dataEducation = document.getElementById("data-education");
const dataWork = document.getElementById("data-work");
const switcherLis = document.querySelectorAll(".links li");
const boxs = document.querySelectorAll(".gallerys .box");
const project = document.getElementById("project");
const projectButton = document.getElementById("project-button");
const testimonial = document.getElementById("testimonial");
const dataTestimonial = document.getElementById("data-testimonial");
const nav = document.getElementById("nav");
const footer = document.getElementById("footer");
const logo = document.getElementById("logo");
const edOne = document.getElementById("one-sp");
const EdOne = document.getElementById("one-sap");
const EdTwo = document.getElementById("two-sp");
const edTwo = document.getElementById("two-sap");

// ======= Start locked ==========
if (lock) {
    lock.addEventListener("click", () => {
        locked.classList.add("open");
        setTimeout(() => {
            lock.style.display = "none";
            unlocked.style.display = "block";
        }, 1000);
    });
}
// ================= Function for Nav =================
if (showLink) {
    showLink.addEventListener("click", () => {
        showLink.style.display = "none";
        linkes.style.display = "flex";
        closeLink.style.display = "block";
    });
}
if (closeLink) {
    closeLink.addEventListener("click", () => {
        linkes.style.display = "none";
        closeLink.style.display = "none";
        showLink.style.display = "block";
    });
}
// ============ Function For Dark Mode =================
if (moon) {
    moon.addEventListener("click", () => {
        document.body.style.background = "#0f1012";
        moon.style.display = "none";
        sun.style.display = "block";
    });
}
if (sun) {
    sun.addEventListener("click", () => {
        document.body.style.background = "white";
        sun.style.display = "none";
        moon.style.display = "block";
        optionLi.classList.remove("edit-color-after", "span");
    });
}
// ================= Function for Qualification =================
if (education) {
    education.addEventListener("click", () => {
        dataEducation.classList.toggle("qualification-active");
        edOne.classList.toggle("one");
        EdTwo.classList.toggle("two");
    });
}
if (work) {
    work.addEventListener("click", () => {
        dataWork.classList.toggle("qualification-active");
        EdOne.classList.toggle("one");
        edTwo.classList.toggle("two");
    });
}
switcherLis.forEach((ele) => {
    ele.addEventListener("click", function () {
        switcherLis.forEach((ele) => ele.classList.remove("active"));
        this.classList.add("active");
        boxs.forEach((box) => (box.style.display = "none"));
        document.querySelectorAll(this.dataset.cat).forEach((ele) => (ele.style.display = "block"));
    });
});
// ================= Functin For Scoll Window =================
window.onscroll = function () {
    if (window.scrollY >= 400) {
        upTop.style.opacity = "1";
        upTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        });
    } else {
        upTop.style.opacity = "0";
    }
    if (window.scrollY >= about.offsetTop - 400) {
        aboutInfo.style.opacity = 1;
    } else {
        aboutInfo.style.opacity = 0;
    }
    if (window.scrollY >= skills.offsetTop - 200) {
        spans.forEach((span) => (span.style.width = span.dataset.width));
    } else {
        spans.forEach((span) => (span.style.width = 0));
    }
    if (window.scrollY >= project.offsetTop - 500) {
        projectButton.style.opacity = 1;
    } else {
        projectButton.style.opacity = 0;
    }
    if (window.scrollY >= testimonial.offsetTop - 500) {
        dataTestimonial.style.opacity = 1;
    } else {
        dataTestimonial.style.opacity = 0;
    }
    if (window.scrollY >= footer.offsetTop - 500) {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
};
sideBar.onclick = function () {
    this.classList.toggle("open");
    layOut.classList.toggle("show-lay");
    layoutLi.forEach((ele) => {
        ele.addEventListener("click", () => {
            layOut.classList.remove("show-lay");
            sideBar.classList.remove("open");
        });
    });
};
logo.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};