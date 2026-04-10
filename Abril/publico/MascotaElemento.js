const template = document.createElement("template");
template.innerHTML = "<div><h1>Mascota: <span id='nombreMascota'></span></h1></div><input type='text' id='myInput'>";


class MascotaElemento extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
        const templateContent = template.content.cloneNode(true);

        this.name = this.getAttribute("nombre");
        console.log("Nombre: ", this.name);
        
        templateContent.querySelector("#nombreMascota").textContent = this.name;
        shadow.append(templateContent);

        this.input = shadow.querySelector("#myInput");
        this.input.addEventListener("input", this.handleInput.bind(this));
        
        console.log("Constructor ", this);
    }

    handleInput(){
        console.log("Tecleaste...");
        this.setAttribute("value", this.input.value);
    }

    static get observedAttributes() {
        return ["value"];
    }

    attributeChangedCallback(name, old, nw){
        console.log(`Cambio ${name} de ${old} a ${nw}`);
        if (name === "value"){
            this.shadowRoot.querySelector("#nombreMascota").textContent = nw;
        }
    }
}

customElements.define("mascota-elemento", MascotaElemento);