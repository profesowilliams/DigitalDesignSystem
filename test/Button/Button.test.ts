import { html, fixture, expect } from '@open-wc/testing';
import { Button } from '../../src/components/Lit/Button'; // Adjust the import path as necessary

describe('Button Component', function () {
  this.timeout(6000); // Increase the timeout to 120 seconds

  let element: Button;

  const renderButton = (args: any) => html` <tds-button type="button" variant="${args.variant}" theme="${args.theme}" label="${args.label || args.variant}" color="${args.color}" ?disabled="${args.disabled}" ?minimal="${args.compact}"> ${args.label || args.variant} </tds-button> `;

  beforeEach(async () => {
    // Wait for the custom element to be defined
    element = await fixture<Button>(renderButton({ theme: 'light', disabled: false, color: 'dark-blue', compact: false, variant: 'primary', label: 'Button' }));
    await element.updateComplete; // Ensure the element has fully rendered
    console.log('Element rendered:', element); // Debug log
  });

  it('should render the button with default properties', async function () {
    await element.updateComplete;
    console.log('ShadowRoot:', element.shadowRoot); // Debug log
    const shadowRoot = element.shadowRoot;
    expect(shadowRoot).not.to.be.null;

    const button = shadowRoot!.querySelector('button') as HTMLButtonElement;
    console.log('Button:', button); // Debug log
    expect(button).not.to.be.null;

    expect(button).to.be.visible;
    expect(button.textContent!.trim()).to.equal('Button');
  });

});
