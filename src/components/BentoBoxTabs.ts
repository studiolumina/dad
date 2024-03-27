type BentoTrigger = HTMLButtonElement | HTMLAnchorElement;

class BentoTabs extends HTMLElement {

    find(id:string) {
        return this.querySelector(id);
    }
    #controlsMap: Map<BentoTrigger, HTMLElement>;
    constructor() {
        super();

        this.#controlsMap = new Map();

    }
    
    toggle = (e:MouseEvent) => {
        console.log('attempting toggle');
        const potentialBtn = (e.target as HTMLElement).closest<BentoTrigger>('.trigger')!;
        
        if (potentialBtn?.classList.contains('active')) return;
        
        if (this.#controlsMap.has(potentialBtn)) {
            console.log('Potential button found');
            for (const [trigger, section] of this.#controlsMap.entries()) {
                trigger.classList.remove('active');
                section.classList.remove('show');
            }
            
            const section = this.#controlsMap.get(potentialBtn);
            
            section!.classList.add('show');
            potentialBtn.classList.add('active');
        }
    }
    
    connectedCallback() {
        this.querySelectorAll<BentoTrigger>('.trigger').forEach(el => {
            this.#controlsMap.set(el, this.querySelector('#'+el.getAttribute('aria-controls'))!);
        });

        this.addEventListener('click', this.toggle, true)
    }
}


customElements.define('bento-tabs', BentoTabs);