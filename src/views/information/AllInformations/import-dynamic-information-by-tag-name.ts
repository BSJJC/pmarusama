import { shallowRef, Ref } from 'vue';

export default function importDynamicInformationByComponentName(componentName: string): Ref<HTMLElement | undefined> {
  const dynamicInformationComponent: Ref<HTMLElement | undefined> = shallowRef();

  switch (componentName) {
    case 'h1':
    case 'h2':
    case 'p':
      import(`./common-components/${componentName}-component.vue`).then((component) => {
        dynamicInformationComponent.value = component.default;
      });
      break;

    default:
      break;
  }

  return dynamicInformationComponent;
}
