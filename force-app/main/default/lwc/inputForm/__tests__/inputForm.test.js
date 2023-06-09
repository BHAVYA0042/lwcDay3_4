import { createElement } from 'lwc';
import InputForm from 'c/inputForm';

describe('c-input-form', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-input-form', {
            is: InputForm
        });

        // Act
        document.body.appendChild(element);

        // Assert
        const ip = element.shadowRoot.querySelectorAll('.textInput');
        ip.forEach((fields)=>{
            fields.value='testing';
            fields.dispatchEvent(new CustomEvent('change'));
            
            return Promise.resolve().then(()=>{
                expect(fields.value).toMatch(/^[a-zA-Z ]+$/);
            })
        })

        
    });
});