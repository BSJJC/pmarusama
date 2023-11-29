import { shallowRef, Ref } from 'vue';

export default function importDynamicComponentByComponentName(componentName: string): Ref<HTMLElement | undefined> {
  const dynamicComponent: Ref<HTMLElement | undefined> = shallowRef();

  switch (componentName) {
    case 'h1':
    case 'h2':
    case 'p':
    case 'table':
    case 'images':
      import(`./common-components/${componentName}-component.vue`).then((component) => {
        dynamicComponent.value = component.default;
      });
      break;

    default:
      break;
  }

  return dynamicComponent;
}
