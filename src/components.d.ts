/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface BmBox {
    /**
    * CSS classes
    */
    'class': string;
  }
  interface BmBreadcrumb {
    /**
    * Breadcrumb alignment
    */
    'alignment': 'is-centered' | 'is-right';
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Separator
    */
    'separator': | 'has-arrow-separator'
    | 'has-bullet-separator'
    | 'has-dot-separator'
    | 'has-succeeds-separator';
    /**
    * Size
    */
    'size': 'is-small' | 'is-medium' | 'is-large';
  }
  interface BmButton {
    /**
    * CSS classes
    */
    'class': string;
    /**
    * Color
    */
    'color': | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-danger'
    | 'is-warning'
    | 'is-white'
    | 'is-light'
    | 'is-dark'
    | 'is-black'
    | 'is-text';
    /**
    * Is disabled?
    */
    'disabled': boolean;
    /**
    * Active state
    */
    'isActive': boolean;
    /**
    * Focused state
    */
    'isFocused': boolean;
    /**
    * Display the button in full-width
    */
    'isFullwidth': boolean;
    /**
    * Hovered state
    */
    'isHovered': boolean;
    /**
    * Is inverted
    */
    'isInverted': boolean;
    /**
    * Loading state
    */
    'isLoading': boolean;
    /**
    * Is outlined
    */
    'isOutlined': boolean;
    /**
    * Rounded button
    */
    'isRounded': boolean;
    /**
    * Static
    */
    'isStatic': boolean;
    /**
    * Size
    */
    'size': 'is-small' | 'is-medium' | 'is-large' | 'is-normal';
  }
  interface BmButtons {
    /**
    * CSS classes
    */
    'class': string;
    /**
    * Buttons size
    */
    'size': 'are-small' | 'are-medium' | 'are-large';
  }
  interface BmCard {
    /**
    * CSS Classes
    */
    'class': string;
  }
  interface BmCardContent {
    /**
    * CSS Classes
    */
    'class': string;
  }
  interface BmCardFooter {
    /**
    * CSS Classes
    */
    'class': string;
  }
  interface BmCardHeader {
    /**
    * CSS Classes
    */
    'class': string;
  }
  interface BmCardImage {
    /**
    * CSS Classes
    */
    'class': string;
  }
  interface BmCheckbox {
    /**
    * Checked
    */
    'checked': boolean;
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Disabled
    */
    'disabled': boolean;
    /**
    * Label classes
    */
    'labelClass': string;
  }
  interface BmColumn {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Narrow column
    */
    'isNarrow': boolean;
    /**
    * Sizes
    */
    'sizes': string;
  }
  interface BmColumns {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Columns gaps
    */
    'gaps': string;
    /**
    * Centered
    */
    'isCentered': boolean;
    /**
    * Desktop
    */
    'isDesktop': boolean;
    /**
    * Gapless
    */
    'isGapless': boolean;
    /**
    * Mobile
    */
    'isMobile': boolean;
    /**
    * Multiline
    */
    'isMultiline': boolean;
    /**
    * Vertically centered
    */
    'isVcentered': boolean;
  }
  interface BmContainer {
    /**
    * Container breakpoint
    */
    'breakpoint': 'is-widescreen' | 'is-fullhd';
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Fluid container
    */
    'isFluid': boolean;
  }
  interface BmContent {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Content size
    */
    'size': 'is-small' | 'is-medium' | 'is-large';
  }
  interface BmDivider {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * CSS Classes
    */
    'content': string;
    /**
    * Orientation
    */
    'orientation': 'is-horizontal' | 'is-vertical';
  }
  interface BmDropdown {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * The dropdown visibility
    */
    'isActive': boolean;
    /**
    * The dropdown will show up when hovering the dropdown-trigger
    */
    'isHoverable': boolean;
    /**
    * Align the dropdown to the right
    */
    'isRight': boolean;
    /**
    * Dropdown menu that appears above the dropdown button
    */
    'isUp': boolean;
  }
  interface BmField {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Has addons
    */
    'hasAddons': boolean;
    /**
    * Grouped field
    */
    'isGrouped': boolean;
    /**
    * Grouped, on multiline
    */
    'isGroupedMultiline': boolean;
    /**
    * Horizontal field
    */
    'isHorizontal': boolean;
    /**
    * Label
    */
    'label': string;
    /**
    * Help or error message
    */
    'message': string;
    /**
    * Field size
    */
    'size': 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
  }
  interface BmFile {
    /**
    * Alignment
    */
    'alignment': 'is-centered' | 'is-right';
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Color
    */
    'color': | 'is-white'
    | 'is-black'
    | 'is-light'
    | 'is-dark'
    | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-warning'
    | 'is-danger';
    /**
    * File
    */
    'file': File;
    /**
    * Add a placeholder for the selected file name
    */
    'hasName': boolean;
    /**
    * Boxed block
    */
    'isBoxed': boolean;
    /**
    * Expand the name to fill up the space
    */
    'isFullwidth': boolean;
    /**
    * Move the CTA to the right side
    */
    'isRight': boolean;
    /**
    * Name
    */
    'name': string;
    /**
    * Placeholder
    */
    'placeholder': string;
    /**
    * Size
    */
    'size': 'is-small' | 'is-medium' | 'is-large';
  }
  interface BmFooter {
    /**
    * CSS Classes
    */
    'class': string;
  }
  interface BmIcon {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Color
    */
    'color': 'has-text-info' | 'has-text-success' | 'has-text-warning' | 'has-text-danger';
    /**
    * Size
    */
    'size': 'is-small' | 'is-medium' | 'is-large';
  }
  interface BmImage {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Size
    */
    'size': | 'is-16x16'
    | 'is-24x24'
    | 'is-32x32'
    | 'is-48x48'
    | 'is-64x64'
    | 'is-96x96'
    | 'is-128x128';
  }
  interface BmInput {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Color
    */
    'color': 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    /**
    * Control Classes
    */
    'controlClass': string;
    /**
    * Disabled state
    */
    'disabled': boolean;
    /**
    * Loading state
    */
    'isLoading': boolean;
    /**
    * Rounded
    */
    'isRounded': boolean;
    /**
    * Removes the background, border, shadow, and horizontal padding
    */
    'isStatic': boolean;
    /**
    * Name
    */
    'name': string;
    /**
    * Placeholder
    */
    'placeholder': string;
    /**
    * The input will look similar to a normal one, but is not editable and has no shadow
    */
    'readonly': boolean;
    /**
    * Required
    */
    'required': boolean;
    /**
    * Size
    */
    'size': 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
    /**
    * State
    */
    'state': 'is-hovered' | 'is-focused';
    /**
    * Type
    */
    'type': 'text' | 'number' | 'email' | 'password';
    /**
    * Value
    */
    'value': string | number;
  }
  interface BmMenu {
    /**
    * CSS Classes
    */
    'class': string;
  }
  interface BmMessage {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Color
    */
    'color': | 'is-dark'
    | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-warning'
    | 'is-danger';
    /**
    * Size
    */
    'size': 'is-small' | 'is-medium' | 'is-large';
  }
  interface BmModal {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Modal Card
    */
    'hasModalCard': boolean;
    /**
    * Is Active
    */
    'isActive': boolean;
  }
  interface BmNavbar {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Color
    */
    'color': | 'is-black'
    | 'is-dark'
    | 'is-light'
    | 'is-white'
    | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-warning'
    | 'is-danger';
    /**
    * Fixed position
    */
    'fixedPosition': 'is-fixed-top' | 'is-fixed-bottom';
    /**
    * Spaced
    */
    'isSpaced': boolean;
    /**
    * Transparent
    */
    'isTransparent': boolean;
  }
  interface BmNotification {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Color
    */
    'color': 'is-primary' | 'is-link' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    /**
    * Dismissable
    */
    'dismissable': boolean;
  }
  interface BmPagination {
    /**
    * Alignment
    */
    'alignment': 'is-centered' | 'is-right';
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Rounded
    */
    'isRounded': boolean;
    /**
    * Pagination size
    */
    'size': 'is-small' | 'is-medium' | 'is-large';
  }
  interface BmPanel {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Panel color
    */
    'color': 'is-primary' | 'is-link' | 'is-info' | 'is-success' | 'is-danger' | 'is-warning';
  }
  interface BmProgress {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Color
    */
    'color': 'is-primary' | 'is-link' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    /**
    * Maximum value
    */
    'max': number;
    /**
    * Size
    */
    'size': 'is-small' | 'is-medium' | 'is-large';
    /**
    * Value
    */
    'value': number;
  }
  interface BmRadio {
    /**
    * Checked
    */
    'checked': boolean;
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Disabled
    */
    'disabled': boolean;
    /**
    * Label Classes
    */
    'labelClass': string;
    /**
    * Name
    */
    'name': string;
  }
  interface BmSection {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Section size
    */
    'size': 'is-medium' | 'is-large';
  }
  interface BmSelect {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Color
    */
    'color': 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    /**
    * Control classes
    */
    'controlClass': string;
    /**
    * Icon
    */
    'icon': string;
    /**
    * Loading state
    */
    'isLoading': boolean;
    /**
    * Allows multiple selection
    */
    'isMultiple': boolean;
    /**
    * Rounded
    */
    'isRounded': boolean;
    /**
    * Size
    */
    'size': 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
    /**
    * State
    */
    'state': 'is-hovered' | 'is-focused';
    /**
    * Value
    */
    'value': string | number;
  }
  interface BmTable {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Bordered
    */
    'isBordered': boolean;
    /**
    * Fullwidth
    */
    'isFullwidth': boolean;
    /**
    * Hoverable
    */
    'isHoverable': boolean;
    /**
    * Narrow
    */
    'isNarrow': boolean;
    /**
    * Scrollable
    */
    'isScrollable': boolean;
    /**
    * Striped
    */
    'isStriped': boolean;
  }
  interface BmTabs {
    /**
    * Alignment
    */
    'alignment': 'is-centered' | 'is-right';
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Full width
    */
    'isFullwidth': boolean;
    /**
    * Rounded
    */
    'isRounded': boolean;
    /**
    * Pagination size
    */
    'size': 'is-small' | 'is-medium' | 'is-large';
    /**
    * Style
    */
    'tabStyle': 'is-boxed' | 'is-toggle';
  }
  interface BmTag {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Color
    */
    'color': | 'is-black'
    | 'is-dark'
    | 'is-light'
    | 'is-white'
    | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-warning'
    | 'is-danger';
    /**
    * Modifier
    */
    'modifier': 'is-rounded' | 'is-delete';
    /**
    * Size
    */
    'size': 'is-normal' | 'is-medium' | 'is-large';
    /**
    * Tag
    */
    'tag': string;
  }
  interface BmTags {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Has addons
    */
    'hasAddons': boolean;
    /**
    * Size
    */
    'size': 'are-medium' | 'are-large';
  }
  interface BmTextarea {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Color
    */
    'color': 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    /**
    * Control class
    */
    'controlClass': string;
    /**
    * Disabled state
    */
    'disabled': boolean;
    /**
    * Fixed size
    */
    'hasFixedSize': boolean;
    /**
    * Loading state
    */
    'isLoading': boolean;
    /**
    * Readonly state
    */
    'readonly': boolean;
    /**
    * Rows
    */
    'rows': number;
    /**
    * Size
    */
    'size': 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
    /**
    * State
    */
    'state': 'is-hovered' | 'is-focused';
    /**
    * Value
    */
    'value': string | number;
  }
}

declare global {


  interface HTMLBmBoxElement extends Components.BmBox, HTMLStencilElement {}
  var HTMLBmBoxElement: {
    prototype: HTMLBmBoxElement;
    new (): HTMLBmBoxElement;
  };

  interface HTMLBmBreadcrumbElement extends Components.BmBreadcrumb, HTMLStencilElement {}
  var HTMLBmBreadcrumbElement: {
    prototype: HTMLBmBreadcrumbElement;
    new (): HTMLBmBreadcrumbElement;
  };

  interface HTMLBmButtonElement extends Components.BmButton, HTMLStencilElement {}
  var HTMLBmButtonElement: {
    prototype: HTMLBmButtonElement;
    new (): HTMLBmButtonElement;
  };

  interface HTMLBmButtonsElement extends Components.BmButtons, HTMLStencilElement {}
  var HTMLBmButtonsElement: {
    prototype: HTMLBmButtonsElement;
    new (): HTMLBmButtonsElement;
  };

  interface HTMLBmCardElement extends Components.BmCard, HTMLStencilElement {}
  var HTMLBmCardElement: {
    prototype: HTMLBmCardElement;
    new (): HTMLBmCardElement;
  };

  interface HTMLBmCardContentElement extends Components.BmCardContent, HTMLStencilElement {}
  var HTMLBmCardContentElement: {
    prototype: HTMLBmCardContentElement;
    new (): HTMLBmCardContentElement;
  };

  interface HTMLBmCardFooterElement extends Components.BmCardFooter, HTMLStencilElement {}
  var HTMLBmCardFooterElement: {
    prototype: HTMLBmCardFooterElement;
    new (): HTMLBmCardFooterElement;
  };

  interface HTMLBmCardHeaderElement extends Components.BmCardHeader, HTMLStencilElement {}
  var HTMLBmCardHeaderElement: {
    prototype: HTMLBmCardHeaderElement;
    new (): HTMLBmCardHeaderElement;
  };

  interface HTMLBmCardImageElement extends Components.BmCardImage, HTMLStencilElement {}
  var HTMLBmCardImageElement: {
    prototype: HTMLBmCardImageElement;
    new (): HTMLBmCardImageElement;
  };

  interface HTMLBmCheckboxElement extends Components.BmCheckbox, HTMLStencilElement {}
  var HTMLBmCheckboxElement: {
    prototype: HTMLBmCheckboxElement;
    new (): HTMLBmCheckboxElement;
  };

  interface HTMLBmColumnElement extends Components.BmColumn, HTMLStencilElement {}
  var HTMLBmColumnElement: {
    prototype: HTMLBmColumnElement;
    new (): HTMLBmColumnElement;
  };

  interface HTMLBmColumnsElement extends Components.BmColumns, HTMLStencilElement {}
  var HTMLBmColumnsElement: {
    prototype: HTMLBmColumnsElement;
    new (): HTMLBmColumnsElement;
  };

  interface HTMLBmContainerElement extends Components.BmContainer, HTMLStencilElement {}
  var HTMLBmContainerElement: {
    prototype: HTMLBmContainerElement;
    new (): HTMLBmContainerElement;
  };

  interface HTMLBmContentElement extends Components.BmContent, HTMLStencilElement {}
  var HTMLBmContentElement: {
    prototype: HTMLBmContentElement;
    new (): HTMLBmContentElement;
  };

  interface HTMLBmDividerElement extends Components.BmDivider, HTMLStencilElement {}
  var HTMLBmDividerElement: {
    prototype: HTMLBmDividerElement;
    new (): HTMLBmDividerElement;
  };

  interface HTMLBmDropdownElement extends Components.BmDropdown, HTMLStencilElement {}
  var HTMLBmDropdownElement: {
    prototype: HTMLBmDropdownElement;
    new (): HTMLBmDropdownElement;
  };

  interface HTMLBmFieldElement extends Components.BmField, HTMLStencilElement {}
  var HTMLBmFieldElement: {
    prototype: HTMLBmFieldElement;
    new (): HTMLBmFieldElement;
  };

  interface HTMLBmFileElement extends Components.BmFile, HTMLStencilElement {}
  var HTMLBmFileElement: {
    prototype: HTMLBmFileElement;
    new (): HTMLBmFileElement;
  };

  interface HTMLBmFooterElement extends Components.BmFooter, HTMLStencilElement {}
  var HTMLBmFooterElement: {
    prototype: HTMLBmFooterElement;
    new (): HTMLBmFooterElement;
  };

  interface HTMLBmIconElement extends Components.BmIcon, HTMLStencilElement {}
  var HTMLBmIconElement: {
    prototype: HTMLBmIconElement;
    new (): HTMLBmIconElement;
  };

  interface HTMLBmImageElement extends Components.BmImage, HTMLStencilElement {}
  var HTMLBmImageElement: {
    prototype: HTMLBmImageElement;
    new (): HTMLBmImageElement;
  };

  interface HTMLBmInputElement extends Components.BmInput, HTMLStencilElement {}
  var HTMLBmInputElement: {
    prototype: HTMLBmInputElement;
    new (): HTMLBmInputElement;
  };

  interface HTMLBmMenuElement extends Components.BmMenu, HTMLStencilElement {}
  var HTMLBmMenuElement: {
    prototype: HTMLBmMenuElement;
    new (): HTMLBmMenuElement;
  };

  interface HTMLBmMessageElement extends Components.BmMessage, HTMLStencilElement {}
  var HTMLBmMessageElement: {
    prototype: HTMLBmMessageElement;
    new (): HTMLBmMessageElement;
  };

  interface HTMLBmModalElement extends Components.BmModal, HTMLStencilElement {}
  var HTMLBmModalElement: {
    prototype: HTMLBmModalElement;
    new (): HTMLBmModalElement;
  };

  interface HTMLBmNavbarElement extends Components.BmNavbar, HTMLStencilElement {}
  var HTMLBmNavbarElement: {
    prototype: HTMLBmNavbarElement;
    new (): HTMLBmNavbarElement;
  };

  interface HTMLBmNotificationElement extends Components.BmNotification, HTMLStencilElement {}
  var HTMLBmNotificationElement: {
    prototype: HTMLBmNotificationElement;
    new (): HTMLBmNotificationElement;
  };

  interface HTMLBmPaginationElement extends Components.BmPagination, HTMLStencilElement {}
  var HTMLBmPaginationElement: {
    prototype: HTMLBmPaginationElement;
    new (): HTMLBmPaginationElement;
  };

  interface HTMLBmPanelElement extends Components.BmPanel, HTMLStencilElement {}
  var HTMLBmPanelElement: {
    prototype: HTMLBmPanelElement;
    new (): HTMLBmPanelElement;
  };

  interface HTMLBmProgressElement extends Components.BmProgress, HTMLStencilElement {}
  var HTMLBmProgressElement: {
    prototype: HTMLBmProgressElement;
    new (): HTMLBmProgressElement;
  };

  interface HTMLBmRadioElement extends Components.BmRadio, HTMLStencilElement {}
  var HTMLBmRadioElement: {
    prototype: HTMLBmRadioElement;
    new (): HTMLBmRadioElement;
  };

  interface HTMLBmSectionElement extends Components.BmSection, HTMLStencilElement {}
  var HTMLBmSectionElement: {
    prototype: HTMLBmSectionElement;
    new (): HTMLBmSectionElement;
  };

  interface HTMLBmSelectElement extends Components.BmSelect, HTMLStencilElement {}
  var HTMLBmSelectElement: {
    prototype: HTMLBmSelectElement;
    new (): HTMLBmSelectElement;
  };

  interface HTMLBmTableElement extends Components.BmTable, HTMLStencilElement {}
  var HTMLBmTableElement: {
    prototype: HTMLBmTableElement;
    new (): HTMLBmTableElement;
  };

  interface HTMLBmTabsElement extends Components.BmTabs, HTMLStencilElement {}
  var HTMLBmTabsElement: {
    prototype: HTMLBmTabsElement;
    new (): HTMLBmTabsElement;
  };

  interface HTMLBmTagElement extends Components.BmTag, HTMLStencilElement {}
  var HTMLBmTagElement: {
    prototype: HTMLBmTagElement;
    new (): HTMLBmTagElement;
  };

  interface HTMLBmTagsElement extends Components.BmTags, HTMLStencilElement {}
  var HTMLBmTagsElement: {
    prototype: HTMLBmTagsElement;
    new (): HTMLBmTagsElement;
  };

  interface HTMLBmTextareaElement extends Components.BmTextarea, HTMLStencilElement {}
  var HTMLBmTextareaElement: {
    prototype: HTMLBmTextareaElement;
    new (): HTMLBmTextareaElement;
  };
  interface HTMLElementTagNameMap {
    'bm-box': HTMLBmBoxElement;
    'bm-breadcrumb': HTMLBmBreadcrumbElement;
    'bm-button': HTMLBmButtonElement;
    'bm-buttons': HTMLBmButtonsElement;
    'bm-card': HTMLBmCardElement;
    'bm-card-content': HTMLBmCardContentElement;
    'bm-card-footer': HTMLBmCardFooterElement;
    'bm-card-header': HTMLBmCardHeaderElement;
    'bm-card-image': HTMLBmCardImageElement;
    'bm-checkbox': HTMLBmCheckboxElement;
    'bm-column': HTMLBmColumnElement;
    'bm-columns': HTMLBmColumnsElement;
    'bm-container': HTMLBmContainerElement;
    'bm-content': HTMLBmContentElement;
    'bm-divider': HTMLBmDividerElement;
    'bm-dropdown': HTMLBmDropdownElement;
    'bm-field': HTMLBmFieldElement;
    'bm-file': HTMLBmFileElement;
    'bm-footer': HTMLBmFooterElement;
    'bm-icon': HTMLBmIconElement;
    'bm-image': HTMLBmImageElement;
    'bm-input': HTMLBmInputElement;
    'bm-menu': HTMLBmMenuElement;
    'bm-message': HTMLBmMessageElement;
    'bm-modal': HTMLBmModalElement;
    'bm-navbar': HTMLBmNavbarElement;
    'bm-notification': HTMLBmNotificationElement;
    'bm-pagination': HTMLBmPaginationElement;
    'bm-panel': HTMLBmPanelElement;
    'bm-progress': HTMLBmProgressElement;
    'bm-radio': HTMLBmRadioElement;
    'bm-section': HTMLBmSectionElement;
    'bm-select': HTMLBmSelectElement;
    'bm-table': HTMLBmTableElement;
    'bm-tabs': HTMLBmTabsElement;
    'bm-tag': HTMLBmTagElement;
    'bm-tags': HTMLBmTagsElement;
    'bm-textarea': HTMLBmTextareaElement;
  }
}

declare namespace LocalJSX {
  interface BmBox {
    /**
    * CSS classes
    */
    'class'?: string;
  }
  interface BmBreadcrumb {
    /**
    * Breadcrumb alignment
    */
    'alignment'?: 'is-centered' | 'is-right';
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Separator
    */
    'separator'?: | 'has-arrow-separator'
    | 'has-bullet-separator'
    | 'has-dot-separator'
    | 'has-succeeds-separator';
    /**
    * Size
    */
    'size'?: 'is-small' | 'is-medium' | 'is-large';
  }
  interface BmButton {
    /**
    * CSS classes
    */
    'class'?: string;
    /**
    * Color
    */
    'color'?: | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-danger'
    | 'is-warning'
    | 'is-white'
    | 'is-light'
    | 'is-dark'
    | 'is-black'
    | 'is-text';
    /**
    * Is disabled?
    */
    'disabled'?: boolean;
    /**
    * Active state
    */
    'isActive'?: boolean;
    /**
    * Focused state
    */
    'isFocused'?: boolean;
    /**
    * Display the button in full-width
    */
    'isFullwidth'?: boolean;
    /**
    * Hovered state
    */
    'isHovered'?: boolean;
    /**
    * Is inverted
    */
    'isInverted'?: boolean;
    /**
    * Loading state
    */
    'isLoading'?: boolean;
    /**
    * Is outlined
    */
    'isOutlined'?: boolean;
    /**
    * Rounded button
    */
    'isRounded'?: boolean;
    /**
    * Static
    */
    'isStatic'?: boolean;
    /**
    * Size
    */
    'size'?: 'is-small' | 'is-medium' | 'is-large' | 'is-normal';
  }
  interface BmButtons {
    /**
    * CSS classes
    */
    'class'?: string;
    /**
    * Buttons size
    */
    'size'?: 'are-small' | 'are-medium' | 'are-large';
  }
  interface BmCard {
    /**
    * CSS Classes
    */
    'class'?: string;
  }
  interface BmCardContent {
    /**
    * CSS Classes
    */
    'class'?: string;
  }
  interface BmCardFooter {
    /**
    * CSS Classes
    */
    'class'?: string;
  }
  interface BmCardHeader {
    /**
    * CSS Classes
    */
    'class'?: string;
  }
  interface BmCardImage {
    /**
    * CSS Classes
    */
    'class'?: string;
  }
  interface BmCheckbox {
    /**
    * Checked
    */
    'checked'?: boolean;
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Disabled
    */
    'disabled'?: boolean;
    /**
    * Label classes
    */
    'labelClass'?: string;
  }
  interface BmColumn {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Narrow column
    */
    'isNarrow'?: boolean;
    /**
    * Sizes
    */
    'sizes'?: string;
  }
  interface BmColumns {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Columns gaps
    */
    'gaps'?: string;
    /**
    * Centered
    */
    'isCentered'?: boolean;
    /**
    * Desktop
    */
    'isDesktop'?: boolean;
    /**
    * Gapless
    */
    'isGapless'?: boolean;
    /**
    * Mobile
    */
    'isMobile'?: boolean;
    /**
    * Multiline
    */
    'isMultiline'?: boolean;
    /**
    * Vertically centered
    */
    'isVcentered'?: boolean;
  }
  interface BmContainer {
    /**
    * Container breakpoint
    */
    'breakpoint'?: 'is-widescreen' | 'is-fullhd';
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Fluid container
    */
    'isFluid'?: boolean;
  }
  interface BmContent {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Content size
    */
    'size'?: 'is-small' | 'is-medium' | 'is-large';
  }
  interface BmDivider {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * CSS Classes
    */
    'content'?: string;
    /**
    * Orientation
    */
    'orientation'?: 'is-horizontal' | 'is-vertical';
  }
  interface BmDropdown {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * The dropdown visibility
    */
    'isActive'?: boolean;
    /**
    * The dropdown will show up when hovering the dropdown-trigger
    */
    'isHoverable'?: boolean;
    /**
    * Align the dropdown to the right
    */
    'isRight'?: boolean;
    /**
    * Dropdown menu that appears above the dropdown button
    */
    'isUp'?: boolean;
  }
  interface BmField {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Has addons
    */
    'hasAddons'?: boolean;
    /**
    * Grouped field
    */
    'isGrouped'?: boolean;
    /**
    * Grouped, on multiline
    */
    'isGroupedMultiline'?: boolean;
    /**
    * Horizontal field
    */
    'isHorizontal'?: boolean;
    /**
    * Label
    */
    'label'?: string;
    /**
    * Help or error message
    */
    'message'?: string;
    /**
    * Field size
    */
    'size'?: 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
  }
  interface BmFile {
    /**
    * Alignment
    */
    'alignment'?: 'is-centered' | 'is-right';
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Color
    */
    'color'?: | 'is-white'
    | 'is-black'
    | 'is-light'
    | 'is-dark'
    | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-warning'
    | 'is-danger';
    /**
    * File
    */
    'file'?: File;
    /**
    * Add a placeholder for the selected file name
    */
    'hasName'?: boolean;
    /**
    * Boxed block
    */
    'isBoxed'?: boolean;
    /**
    * Expand the name to fill up the space
    */
    'isFullwidth'?: boolean;
    /**
    * Move the CTA to the right side
    */
    'isRight'?: boolean;
    /**
    * Name
    */
    'name'?: string;
    /**
    * Placeholder
    */
    'placeholder'?: string;
    /**
    * Size
    */
    'size'?: 'is-small' | 'is-medium' | 'is-large';
  }
  interface BmFooter {
    /**
    * CSS Classes
    */
    'class'?: string;
  }
  interface BmIcon {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Color
    */
    'color'?: 'has-text-info' | 'has-text-success' | 'has-text-warning' | 'has-text-danger';
    /**
    * Size
    */
    'size'?: 'is-small' | 'is-medium' | 'is-large';
  }
  interface BmImage {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Size
    */
    'size'?: | 'is-16x16'
    | 'is-24x24'
    | 'is-32x32'
    | 'is-48x48'
    | 'is-64x64'
    | 'is-96x96'
    | 'is-128x128';
  }
  interface BmInput {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Color
    */
    'color'?: 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    /**
    * Control Classes
    */
    'controlClass'?: string;
    /**
    * Disabled state
    */
    'disabled'?: boolean;
    /**
    * Loading state
    */
    'isLoading'?: boolean;
    /**
    * Rounded
    */
    'isRounded'?: boolean;
    /**
    * Removes the background, border, shadow, and horizontal padding
    */
    'isStatic'?: boolean;
    /**
    * Name
    */
    'name'?: string;
    /**
    * Placeholder
    */
    'placeholder'?: string;
    /**
    * The input will look similar to a normal one, but is not editable and has no shadow
    */
    'readonly'?: boolean;
    /**
    * Required
    */
    'required'?: boolean;
    /**
    * Size
    */
    'size'?: 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
    /**
    * State
    */
    'state'?: 'is-hovered' | 'is-focused';
    /**
    * Type
    */
    'type'?: 'text' | 'number' | 'email' | 'password';
    /**
    * Value
    */
    'value'?: string | number;
  }
  interface BmMenu {
    /**
    * CSS Classes
    */
    'class'?: string;
  }
  interface BmMessage {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Color
    */
    'color'?: | 'is-dark'
    | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-warning'
    | 'is-danger';
    /**
    * Size
    */
    'size'?: 'is-small' | 'is-medium' | 'is-large';
  }
  interface BmModal {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Modal Card
    */
    'hasModalCard'?: boolean;
    /**
    * Is Active
    */
    'isActive'?: boolean;
  }
  interface BmNavbar {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Color
    */
    'color'?: | 'is-black'
    | 'is-dark'
    | 'is-light'
    | 'is-white'
    | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-warning'
    | 'is-danger';
    /**
    * Fixed position
    */
    'fixedPosition'?: 'is-fixed-top' | 'is-fixed-bottom';
    /**
    * Spaced
    */
    'isSpaced'?: boolean;
    /**
    * Transparent
    */
    'isTransparent'?: boolean;
  }
  interface BmNotification {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Color
    */
    'color'?: 'is-primary' | 'is-link' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    /**
    * Dismissable
    */
    'dismissable'?: boolean;
  }
  interface BmPagination {
    /**
    * Alignment
    */
    'alignment'?: 'is-centered' | 'is-right';
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Rounded
    */
    'isRounded'?: boolean;
    /**
    * Pagination size
    */
    'size'?: 'is-small' | 'is-medium' | 'is-large';
  }
  interface BmPanel {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Panel color
    */
    'color'?: 'is-primary' | 'is-link' | 'is-info' | 'is-success' | 'is-danger' | 'is-warning';
  }
  interface BmProgress {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Color
    */
    'color'?: 'is-primary' | 'is-link' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    /**
    * Maximum value
    */
    'max'?: number;
    /**
    * Size
    */
    'size'?: 'is-small' | 'is-medium' | 'is-large';
    /**
    * Value
    */
    'value'?: number;
  }
  interface BmRadio {
    /**
    * Checked
    */
    'checked'?: boolean;
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Disabled
    */
    'disabled'?: boolean;
    /**
    * Label Classes
    */
    'labelClass'?: string;
    /**
    * Name
    */
    'name'?: string;
  }
  interface BmSection {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Section size
    */
    'size'?: 'is-medium' | 'is-large';
  }
  interface BmSelect {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Color
    */
    'color'?: 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    /**
    * Control classes
    */
    'controlClass'?: string;
    /**
    * Icon
    */
    'icon'?: string;
    /**
    * Loading state
    */
    'isLoading'?: boolean;
    /**
    * Allows multiple selection
    */
    'isMultiple'?: boolean;
    /**
    * Rounded
    */
    'isRounded'?: boolean;
    /**
    * Size
    */
    'size'?: 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
    /**
    * State
    */
    'state'?: 'is-hovered' | 'is-focused';
    /**
    * Value
    */
    'value'?: string | number;
  }
  interface BmTable {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Bordered
    */
    'isBordered'?: boolean;
    /**
    * Fullwidth
    */
    'isFullwidth'?: boolean;
    /**
    * Hoverable
    */
    'isHoverable'?: boolean;
    /**
    * Narrow
    */
    'isNarrow'?: boolean;
    /**
    * Scrollable
    */
    'isScrollable'?: boolean;
    /**
    * Striped
    */
    'isStriped'?: boolean;
  }
  interface BmTabs {
    /**
    * Alignment
    */
    'alignment'?: 'is-centered' | 'is-right';
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Full width
    */
    'isFullwidth'?: boolean;
    /**
    * Rounded
    */
    'isRounded'?: boolean;
    /**
    * Pagination size
    */
    'size'?: 'is-small' | 'is-medium' | 'is-large';
    /**
    * Style
    */
    'tabStyle'?: 'is-boxed' | 'is-toggle';
  }
  interface BmTag {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Color
    */
    'color'?: | 'is-black'
    | 'is-dark'
    | 'is-light'
    | 'is-white'
    | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-warning'
    | 'is-danger';
    /**
    * Modifier
    */
    'modifier'?: 'is-rounded' | 'is-delete';
    /**
    * Size
    */
    'size'?: 'is-normal' | 'is-medium' | 'is-large';
    /**
    * Tag
    */
    'tag'?: string;
  }
  interface BmTags {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Has addons
    */
    'hasAddons'?: boolean;
    /**
    * Size
    */
    'size'?: 'are-medium' | 'are-large';
  }
  interface BmTextarea {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Color
    */
    'color'?: 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    /**
    * Control class
    */
    'controlClass'?: string;
    /**
    * Disabled state
    */
    'disabled'?: boolean;
    /**
    * Fixed size
    */
    'hasFixedSize'?: boolean;
    /**
    * Loading state
    */
    'isLoading'?: boolean;
    /**
    * Readonly state
    */
    'readonly'?: boolean;
    /**
    * Rows
    */
    'rows'?: number;
    /**
    * Size
    */
    'size'?: 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
    /**
    * State
    */
    'state'?: 'is-hovered' | 'is-focused';
    /**
    * Value
    */
    'value'?: string | number;
  }

  interface IntrinsicElements {
    'bm-box': BmBox;
    'bm-breadcrumb': BmBreadcrumb;
    'bm-button': BmButton;
    'bm-buttons': BmButtons;
    'bm-card': BmCard;
    'bm-card-content': BmCardContent;
    'bm-card-footer': BmCardFooter;
    'bm-card-header': BmCardHeader;
    'bm-card-image': BmCardImage;
    'bm-checkbox': BmCheckbox;
    'bm-column': BmColumn;
    'bm-columns': BmColumns;
    'bm-container': BmContainer;
    'bm-content': BmContent;
    'bm-divider': BmDivider;
    'bm-dropdown': BmDropdown;
    'bm-field': BmField;
    'bm-file': BmFile;
    'bm-footer': BmFooter;
    'bm-icon': BmIcon;
    'bm-image': BmImage;
    'bm-input': BmInput;
    'bm-menu': BmMenu;
    'bm-message': BmMessage;
    'bm-modal': BmModal;
    'bm-navbar': BmNavbar;
    'bm-notification': BmNotification;
    'bm-pagination': BmPagination;
    'bm-panel': BmPanel;
    'bm-progress': BmProgress;
    'bm-radio': BmRadio;
    'bm-section': BmSection;
    'bm-select': BmSelect;
    'bm-table': BmTable;
    'bm-tabs': BmTabs;
    'bm-tag': BmTag;
    'bm-tags': BmTags;
    'bm-textarea': BmTextarea;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'bm-box': LocalJSX.BmBox & JSXBase.HTMLAttributes<HTMLBmBoxElement>;
      'bm-breadcrumb': LocalJSX.BmBreadcrumb & JSXBase.HTMLAttributes<HTMLBmBreadcrumbElement>;
      'bm-button': LocalJSX.BmButton & JSXBase.HTMLAttributes<HTMLBmButtonElement>;
      'bm-buttons': LocalJSX.BmButtons & JSXBase.HTMLAttributes<HTMLBmButtonsElement>;
      'bm-card': LocalJSX.BmCard & JSXBase.HTMLAttributes<HTMLBmCardElement>;
      'bm-card-content': LocalJSX.BmCardContent & JSXBase.HTMLAttributes<HTMLBmCardContentElement>;
      'bm-card-footer': LocalJSX.BmCardFooter & JSXBase.HTMLAttributes<HTMLBmCardFooterElement>;
      'bm-card-header': LocalJSX.BmCardHeader & JSXBase.HTMLAttributes<HTMLBmCardHeaderElement>;
      'bm-card-image': LocalJSX.BmCardImage & JSXBase.HTMLAttributes<HTMLBmCardImageElement>;
      'bm-checkbox': LocalJSX.BmCheckbox & JSXBase.HTMLAttributes<HTMLBmCheckboxElement>;
      'bm-column': LocalJSX.BmColumn & JSXBase.HTMLAttributes<HTMLBmColumnElement>;
      'bm-columns': LocalJSX.BmColumns & JSXBase.HTMLAttributes<HTMLBmColumnsElement>;
      'bm-container': LocalJSX.BmContainer & JSXBase.HTMLAttributes<HTMLBmContainerElement>;
      'bm-content': LocalJSX.BmContent & JSXBase.HTMLAttributes<HTMLBmContentElement>;
      'bm-divider': LocalJSX.BmDivider & JSXBase.HTMLAttributes<HTMLBmDividerElement>;
      'bm-dropdown': LocalJSX.BmDropdown & JSXBase.HTMLAttributes<HTMLBmDropdownElement>;
      'bm-field': LocalJSX.BmField & JSXBase.HTMLAttributes<HTMLBmFieldElement>;
      'bm-file': LocalJSX.BmFile & JSXBase.HTMLAttributes<HTMLBmFileElement>;
      'bm-footer': LocalJSX.BmFooter & JSXBase.HTMLAttributes<HTMLBmFooterElement>;
      'bm-icon': LocalJSX.BmIcon & JSXBase.HTMLAttributes<HTMLBmIconElement>;
      'bm-image': LocalJSX.BmImage & JSXBase.HTMLAttributes<HTMLBmImageElement>;
      'bm-input': LocalJSX.BmInput & JSXBase.HTMLAttributes<HTMLBmInputElement>;
      'bm-menu': LocalJSX.BmMenu & JSXBase.HTMLAttributes<HTMLBmMenuElement>;
      'bm-message': LocalJSX.BmMessage & JSXBase.HTMLAttributes<HTMLBmMessageElement>;
      'bm-modal': LocalJSX.BmModal & JSXBase.HTMLAttributes<HTMLBmModalElement>;
      'bm-navbar': LocalJSX.BmNavbar & JSXBase.HTMLAttributes<HTMLBmNavbarElement>;
      'bm-notification': LocalJSX.BmNotification & JSXBase.HTMLAttributes<HTMLBmNotificationElement>;
      'bm-pagination': LocalJSX.BmPagination & JSXBase.HTMLAttributes<HTMLBmPaginationElement>;
      'bm-panel': LocalJSX.BmPanel & JSXBase.HTMLAttributes<HTMLBmPanelElement>;
      'bm-progress': LocalJSX.BmProgress & JSXBase.HTMLAttributes<HTMLBmProgressElement>;
      'bm-radio': LocalJSX.BmRadio & JSXBase.HTMLAttributes<HTMLBmRadioElement>;
      'bm-section': LocalJSX.BmSection & JSXBase.HTMLAttributes<HTMLBmSectionElement>;
      'bm-select': LocalJSX.BmSelect & JSXBase.HTMLAttributes<HTMLBmSelectElement>;
      'bm-table': LocalJSX.BmTable & JSXBase.HTMLAttributes<HTMLBmTableElement>;
      'bm-tabs': LocalJSX.BmTabs & JSXBase.HTMLAttributes<HTMLBmTabsElement>;
      'bm-tag': LocalJSX.BmTag & JSXBase.HTMLAttributes<HTMLBmTagElement>;
      'bm-tags': LocalJSX.BmTags & JSXBase.HTMLAttributes<HTMLBmTagsElement>;
      'bm-textarea': LocalJSX.BmTextarea & JSXBase.HTMLAttributes<HTMLBmTextareaElement>;
    }
  }
}


