const rootSelector = '[data-js-tabs]'

class Tabs {
    selectors= {
        root: rootSelector,
        button: '[data-js-button]',
        content: '[data-js-content]',
    }

    stateClasses= {
        isActive: 'is-active',
    }

    stateAttributes = {
        ariaLabel: 'aria-selected',
        tabIndex: 'tabindex',
    }

    constructor(rootElement) {
        this.rootElement = rootElement;
        this.buttonElement = this.rootElement.querySelectorAll(this.selectors.button);
        this.contentElements = this.rootElement.querySelectorAll(this.selectors.content);
    }
}

class TabCollection {

    constructor() {
        this.init()
    }

    init() {
        document.querySelector(rootSelector).forEach((element) => {
            new Tabs(element)
        })
    }

}

export default TabCollection
