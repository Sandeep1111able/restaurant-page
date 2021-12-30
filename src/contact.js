const contactText = {
    contactTitleText: "Contact",
    contactHeaderText: "Do you have any questions?",
    addressText: "Opposite to Kantipur Dental, Newroad,Pokhara",
    phoneText: "+97798560xxxxx",
}



const contactTab = () => {
    const contactTab = document.createElement("div");
    const contactDiv = document.createElement("div");
    const contactTitle = document.createElement("h1");
    const contactHeader = document.createElement("h2");
    const address = document.createElement("p");
    const phone = document.createElement("p");

    contactTab.classList.add('tab');
    contactDiv.classList.add('contact');
    contactTitle.textContent = contactText.contactTitleText;
    contactHeader.textContent = contactText.contactHeaderText;
    address.textContent = contactText.addressText;
    phone.textContent = contactText.phoneText;
    contactDiv.append(contactHeader, address, phone);
    contactTab.append(contactTitle, contactDiv);


    return contactTab;
}

export default contactTab;