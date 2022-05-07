const NewUser = function(name) {
    const userinfo = {};
        userinfo.name = name;
        userinfo.avatar = "";
        userinfo.bio = "";

        userinfo.intro = (selection) => {
            const avatar = document.createElement("DIV");
            avatar.setAttribute("id", "avatar");
            avatar.setAttribute("class", "col-8");
            avatar.innerHTML = `<img src="${userinfo.avatar}" alt="${this,name}">`;

            const bio = document.createElement("DIV");
            bio.classList.add("block-text");
            bio.classList.add("col-md-8");
            bio.innerHTML = `${userinfo.bio}`;
            selection.append(avatar, bio);

        }
  
    return userinfo;
}

const NewLink = function(title) {
    const link = {};
    link.title = title;
    link.url = "";
    link.description = null;
    link.color = null;

    link.box = (selection) => {
        const linkbtn = document.createElement("DIV");
        linkbtn.classList.add("box");
        linkbtn.classList.add("col-md-8");

        const btnLink = document.createElement("A");
        btnLink.classList.add("btn-link");
        btnLink.setAttribute("href", link.url);
        btnLink.innerHTML = `<div class='btn-link-title'>${link.title}</div>`;

        if (link.description != null) {
            const subtitle = document.createElement("DIV");
            subtitle.classList.add("btn-link-subtitle");
            subtitle.innerHTML = `${link.description}`;
            btnLink.append(subtitle);
        }

        if (link.color != null) {
            linkbtn.style.backgroundColor = link.color;
        }

        linkbtn.append(btnLink);
        selection.append(linkbtn);

    }

    return link;
}

const Standout = function(title) {
    const link = {};
    link.title = title;
    link.url = "";
    link.description = null;
    link.color = null;

    link.box = (selection) => {
        const linkbtn = document.createElement("DIV");
        linkbtn.classList.add("standout");
        linkbtn.classList.add("box");
        linkbtn.classList.add("col-md-8");

        const btnLink = document.createElement("A");
        btnLink.classList.add("btn-link");
        btnLink.setAttribute("href", link.url);
        btnLink.innerHTML = `<div class='btn-link-title'>${link.title}</div>`;

        if (link.description != null) {
            const subtitle = document.createElement("DIV");
            subtitle.classList.add("btn-link-subtitle");
            subtitle.innerHTML = `${link.description}`;
            btnLink.append(subtitle);
        }

        if (link.color != null) {
            linkbtn.style.backgroundColor = link.color;
        }

        linkbtn.append(btnLink);
        selection.append(linkbtn);

    }

    return link;
}

// SITE LAYOUT
const siteSection = document.querySelector("#quicklinks DIV");

// USER
const bria = NewUser("bria saunders-hall");
bria.avatar = "./img/profile-pic.png";
bria.bio = "I am a web developer and I specialize in mobile-first sites. I can code anything from a design or I can work with you to create a design for your site. I have experience working on custom WordPress themes and WordPress child themes.";
// bria.intro(siteSection);

const container = document.createElement("DIV");
container.classList.add("content-wrapper");
container.classList.add("container");
siteSection.append(container);

const portfolio = NewLink("Portfolio");
portfolio.url = "../portfolio/index.html";
portfolio.description = "Check out my projects!";
portfolio.box(container);

const fiverr = NewLink("Fiverr");
fiverr.url = "https://www.fiverr.com/share/17k7xp";
fiverr.description = "See what services I offer on Fiverr";
fiverr.box(container);

const subscriber = NewLink("Subscribe To Our Email List");
subscriber.url = "http://eepurl.com/h1uYX9";
// subscriber.description = "Sign up to our subscriber list to get a weekly produce list, and a list of the locations we are currently at. Love and Peace!";
subscriber.box(container)
