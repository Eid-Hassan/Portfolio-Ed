// ======= Start locked =================
let lock = document.getElementById( "container-lock" ),
    locked = document.getElementById("lock"),
    unlocked = document.getElementById( "unlock" ),
    upTop = document.getElementById( "up-top" );
// ======= Start Nav Bar =================
let linkes = document.getElementById( "nav-menu" ),
    closeLink = document.getElementById( "close-link" ),
    showLink = document.getElementById( "show-link" );
let layOut = document.getElementById( "layout" ),
    sideBar = document.getElementById( "sidebar" ),
    showCar = document.getElementById( "car-shop" ),
    empty = document.getElementById( "empty" ),
    layoutLi = document.querySelectorAll( ".lists" );
// ======= Start Nav Bar Dark Mode =================
let dark = document.getElementById( "dark" ),
    moon = document.getElementById( "moon" ),
    sun = document.getElementById( "sun" ),
    option = document.getElementById( "option" ),
    optionLi = document.getElementById( "option-li" );
// ========== scroll info about =================
let about = document.getElementById( "about" ),
    aboutInfo = document.getElementById( "about-info" ),
    skills = document.getElementById( "skills-up" ),
    spans = document.querySelectorAll( ".the-progress > span" );
// ========== start info Education & Work =================
let education = document.getElementById( "education" ),
    work = document.getElementById( "work" ),
    dataEducation = document.getElementById( "data-education" ),
    dataWork = document.getElementById( "data-work" ),
    switcherLis = document.querySelectorAll( ".links li" ),
    boxs = document.querySelectorAll( ".gallerys .box" ),
    project = document.getElementById( "project" ),
    projectButton = document.getElementById( "project-button" ),
    testimonial = document.getElementById( "testimonial" ),
    dataTestimonial = document.getElementById( "data-testimonial" ),
    nav = document.getElementById( "nav" ),
    footer = document.getElementById( "footer" ),
    logo = document.getElementById( "logo" );
let edOne = document.getElementById( "one-sp" ),
    EdOne = document.getElementById( "one-sap" ),
    EdTwo = document.getElementById( "two-sp" ),
    edTwo = document.getElementById( "two-sap" );
// ======= Start locked ==========
if ( lock )
{
    lock.addEventListener( "click", () =>
    {
        locked.classList.add( "open" );
        setInterval(() => {
            lock.style.display = "none";
            unlocked.style.display = "block";
        }, 1000);
    } )
};
// ================= Function for Nav =================
if ( showLink )
{
    showLink.addEventListener( "click", () =>
    {
        showLink.style.display = "none"
        linkes.style.display = "flex"
        closeLink.style.display = "block"
    } )
};
if ( closeLink )
{
    closeLink.addEventListener( "click", () =>
    {
        linkes.style.display = "none"
        closeLink.style.display = "none"
        showLink.style.display = "block"
    } )
};
// ============ Function For Dark Mode =================
if ( moon )
{
    moon.addEventListener( "click", () =>
    {
        document.body.style.background = "#0f1012"
        moon.style.display = "none"
        sun.style.display = "block"
    } )
};
if ( sun )
{
    sun.addEventListener( "click", () =>
    {
        document.body.style.background = "white"
        sun.style.display = "none"
        moon.style.display = "block"
        optionLi.classList.remove( ".edit-color-after span" )
    } )
};
// ================= Function for Qualification =================
if ( education )
{
    education.addEventListener( "click", () =>
    {
        dataEducation.classList.toggle( "qualification-active" );
        edOne.classList.toggle( "one" );
        EdTwo.classList.toggle( "two" );
    } )
};
if ( work )
{
    work.addEventListener( "click", () =>
    {
        dataWork.classList.toggle( "qualification-active" );
        EdOne.classList.toggle( "one" );
        edTwo.classList.toggle( "two" );
    } )
};
switcherLis.forEach( ( ele ) =>
{
    ele.addEventListener( "click", function Active ()
    {
        switcherLis.forEach( ( ele ) =>
        {
            ele.classList.remove( "active" );
            this.classList.add( "active" );
        } );
        boxs.forEach( ( boxs ) =>
        {
            boxs.style.display = "none";
        } );
        document.querySelectorAll( this.dataset.cat ).forEach( ( ele ) =>
        {
            ele.style.display = "block";
        } );
    }
    );
} );
// ================= Functin For Scoll Window =================
window.onscroll = function ()
{
    if ( window.scrollY >= 400 )
    {
        upTop.style.opacity = "1";
        upTop.addEventListener( "click", function ()
        {
            window.scrollTo( {
                top: 0,
                lft: 0,
                behavior: "smooth",
            } );
        } );
    } else { upTop.style.opacity = "0"; }
    if ( window.scrollY >= about.offsetTop - 400 ) { aboutInfo.style.opacity = 1; }
    else { aboutInfo.style.opacity = 0; }
    if ( window.scrollY >= skills.offsetTop - 200 )
    { spans.forEach( ( span ) => { span.style.width = span.dataset.width; } ) }
    else { spans.forEach( ( span ) => { span.style.width = 0; } ) };
    if ( window.scrollY >= project.offsetTop - 500 ) { projectButton.style.opacity = 1; }
    else { projectButton.style.opacity = 0; }
    if ( window.scrollY >= testimonial.offsetTop - 500 ) { dataTestimonial.style.opacity = 1; }
    else { dataTestimonial.style.opacity = 0; }
    if ( window.scrollY >= footer.offsetTop - 500 ) { nav.style.display = "none"; }
    else { nav.style.display = "flex"; }
};
sideBar.onclick = function ( e )
{
    this.classList.toggle( "open" );
    layOut.classList.toggle( "show-lay" );
    layoutLi.forEach( ( ele ) =>
    {
        ele.addEventListener( "click", () =>
        {
            layOut.classList.remove( "show-lay" )
            sideBar.classList.remove( "open" )
        } );
    } );

};
logo.onclick = function ()
{
    window.scrollTo( {
        top: 0,
        left: 0,
        behavior: "smooth",
    } )
};

