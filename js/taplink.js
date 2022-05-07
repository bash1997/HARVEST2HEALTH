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

const NewLink = function(title, id) {
    const link = {};
    link.title = title;
    link.id = id;
    link.url = "";
    link.description = null;
    link.color = null;

    link.copy = () => {
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(link.description);
      
        /* Alert the copied text */
        // alert("Copied the text: " + link.description);
    }

    link.box = (selection) => {
        const linkbtn = document.createElement("DIV");
        linkbtn.classList.add("box");
        linkbtn.classList.add("col-md-8");

        if(link.url == ""){
            var btnLink = document.createElement("DIV");
            btnLink.classList.add("btn-link");
            btnLink.innerHTML = `<div class='btn-link-title'>${link.title}</div>`;
            btnLink.setAttribute("onclick", () => {
                navigator.clipboard.writeText(link.description);
                alert("Copied the text: " + link.description);
            });
        } else {
            var btnLink = document.createElement("A");
            btnLink.classList.add("btn-link");
            btnLink.setAttribute("href", link.url);
            btnLink.innerHTML = `<div class='btn-link-title'>${link.title}</div>`;
        }

        if (link.description != null) {
            const subtitle = document.createElement("DIV");
            subtitle.classList.add("btn-link-subtitle");
            subtitle.setAttribute("id", link.id);
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

const Standout = function(title, id) {
    const link = {};
    link.title = title;
    link.id = id;
    link.url = "";
    link.description = null;
    link.color = null;

    link.copy = () => {
        /* Get the text field */
        var copyText = document.getElementById(link.id);
      
        /* Select the text field */
        link.description.select();
        // copyText.setSelectionRange(0, 99999); /* For mobile devices */
      
         /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);
      
        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);
    }

    link.box = (selection) => {
        const linkbtn = document.createElement("DIV");
        linkbtn.classList.add("standout");
        linkbtn.classList.add("box");
        linkbtn.classList.add("col-md-8");

        const btnLink = document.createElement("A");
        btnLink.classList.add("btn-link");
        btnLink.setAttribute("href", link.url);
        btnLink.innerHTML = `<div class='btn-link-title'>${link.title}</div>`;

        if(link.url == ""){
            btnLink.setAttribute("onclick", link.copy);
        }

        if (link.description != null) {
            const subtitle = document.createElement("DIV");
            subtitle.classList.add("btn-link-subtitle");
            subtitle.setAttribute("id", link.id);
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

const cashapp = NewLink("Cash App", "cashapp");
cashapp.url = "https://cash.app/$nucas";
cashapp.description = "$nucas";
cashapp.box(container);

const paypal = NewLink("PayPal", "paypal");
paypal.description = "Eugene Yarbrough";
paypal.box(container);

const venmo = NewLink("Venmo", "venmo");
venmo.description = "Eugene-Yarbrough";
venmo.box(container);

const zelle = NewLink("Zelle", "zelle");
zelle.description = "19176538743";
zelle.box(container);

const subscriber = Standout("Subscribe To Our Email List", "subscribe");
subscriber.url = "http://eepurl.com/h1uYX9";
subscriber.description = "Get a weekly produce list, and a list of the locations we are currently at.";
// subscriber.box(container)
