import { Component, Prop, h, JSX, ComponentInterface, Host } from '@stencil/core';

@Component({
  tag: 'b-section',
  styleUrls: ['section.scss'],
})
export class Section implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Section size
   */
  @Prop() size: 'is-medium' | 'is-large';

  render(): JSX.Element {
    return (
      <Host>
        <div
          class={{
            section: true,
            [this.size]: !!this.size,
            [this.class]: !!this.class,
          }}
        >
          <slot />
        </div>
      </Host>
    );
  }
}