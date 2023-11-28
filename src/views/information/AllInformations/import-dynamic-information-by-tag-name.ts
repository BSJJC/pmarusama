import { shallowRef, Ref } from 'vue';

export default function importDynamicInformationByTagName(tagName: string): Ref<HTMLElement | undefined> {
  const dynamicInformationComponent: Ref<HTMLElement | undefined> = shallowRef();

  switch (tagName) {
    case 'h1':
    case 'h2':
    case 'p':
      import(`./common-components/${tagName}-component.vue`).then((component) => {
        dynamicInformationComponent.value = component.default;
      });
      break;

    default:
      break;
  }

  return dynamicInformationComponent;
}
